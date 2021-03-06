import React, { Component, useContext, useEffect, useRef, useState } from 'react';
import { Table, Button, Form, Input, Popconfirm } from 'antd';
import instance from '../../../interceptors';
import MyDialog from '../../blog/Components/Dialog/MyDialog';

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
                        title,
                        editable,
                        required,
                        children,
                        dataIndex,
                        record,
                        handleSave,
                        ...restProps
                      }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      if (record[Object.keys(values)[0]] + ',' !== values[Object.keys(values)[0]] && !record._status) {
        record._status = 'UPDATE';
      }
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={required && [
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save}/>
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export default class MyTable extends Component {

  constructor(props) {
    super(props);
    props.columns.push(
      {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => {
          return (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          );
        },
      });
    this.state = {
      columns: props.columns,
      dataSource: props.dataSource,
      urls: props.urls,
      show: 'none',
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      selectedRowKeys: [],
      dataSource: dataSource.map(item => {
        if (item.key === key) {
          item._status = 'DELETE';
        }
        return item;
      }),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      _status: 'ADD',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSaveData = () => {
    const newData = [...(this.state.dataSource.filter(item => !!item._status))];
    // 没有_status的字段不传输
    for (let i = 0; i < newData.length; i++) {
      delete newData[i].key;
    }
    let url = this.state.urls['save'];
    instance.post(url, newData).then(
      res => {
        alert(res.data.data);
        this.setState({
          ...this.state,
          show: 'display',
        });
      }, function(e) {
        alert(e);
      });
  };

  handleDeleteData = (selectedRowKeys) => {
    if (!selectedRowKeys || selectedRowKeys.length === 0) {
      alert('请勾选!');
      return false;
    }
    const that = this;
    const deleteData = [...(this.state.dataSource.filter(item => selectedRowKeys.indexOf(item.key) > -1))];
    let ids = [];
    deleteData.forEach((ele) => {
      if (!!ele.id) {
        ids.push(ele.id);
      }
    });
    if (ids.length === 0) {
      alert('删除成功');
      const dataSource = [...that.state.dataSource];
      that.setState({
        selectedRowKeys: [],
        dataSource: dataSource.filter(item => selectedRowKeys.indexOf(item.key) < 0),
      });
      return false;
    }
    let url = this.state.urls['deleteByIds'] + '?ids=' + ids.join(',');
    instance.get(url, deleteData).then(
      function(res) {
        alert(res.data.msg);
        const dataSource = [...that.state.dataSource];
        that.setState({
          selectedRowKeys: [],
          dataSource: dataSource.filter(item => selectedRowKeys.indexOf(item.key) < 0),
        });
      }, function(e) {
        alert(e);
      });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  fresh(that) {
    let url = this.state.urls['query'];
    instance.get(url).then(
      function(res) {
        let dataSource = res.data.data;
        // 获取数据数目
        dataSource.forEach((ele, index) => {
          ele.key = index;
        });
        that.setState({ dataSource: dataSource, count: dataSource.length });
      }, function(e) {
        that.setState({ dataSource: [], count: 0 });
      });
  }

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  componentDidMount() {
    this.fresh(this);
  }

  componentWillUnmount() {

  }

  render() {
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const { selectedRowKeys, show } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const columns = this.state.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          required: col.required,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    const success = (data) => {
      this.setState({
        ...this.state,
        show: 'none',
      });
    };
    const failure = (data) => {
      this.setState({
        ...this.state,
        show: 'none',
      });
    };
    return (
      <div className="common-my-table">
        {show === 'display' && <MyDialog success={success} failure={failure}/>}
        <div className="common-my-table-button">
          <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
            add
          </Button>
          <Button onClick={this.handleSaveData} type="primary" style={{ marginBottom: 16 }}>
            save
          </Button>
          <Button onClick={() => this.handleDeleteData(this.state.selectedRowKeys)} type="primary"
                  style={{ marginBottom: 16 }}>
            delete
          </Button>
        </div>
        <div className="common-my-table-table">
          <Table rowClassName={() => 'editable-row'} pagination={{ pageSize: 999 }}
                 bordered rowSelection={rowSelection}
                 dataSource={this.state.dataSource ? this.state.dataSource.filter(item => item._status !== 'DELETE') : this.state.dataSource}
                 columns={columns} components={components}/>
        </div>
      </div>
    );
  }
}
