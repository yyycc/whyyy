import React, { Component } from 'react';
import axios from 'axios';

export default class FileManage extends Component {
  constructor() {
    super();
    this.state = {
      width: 0,
      opacity: 0,
      percent: 0,
    };
  }

  render() {
    let file;
    const upload = () => {
      let form = new FormData();
      form.append('file', file); // 这边的名字要跟 multer.array('file')这里的名字呼应上，否则就用 multer.any()，不然500
      let url = 'http://localhost:8871/file/upload';

      axios.post(url, form, {
        headers:
          { 'Content-Type': 'multipart/form-data' },
      }).then(
        function(res) {
          if (res.data.success) {
            res.data.data.creation_date = '2020-07-06';
            res.data.data.last_update_date = '2020-07-06';
            axios.post('http://localhost:8871/file/insertSelective', res.data.data).then(
              function(res) {
                alert(res.data.success);
              }, function(e) {
                alert(e);
              });
          }
        }, function(e) {
          alert(e);
        });
    };

    const downLoad = (id) => {
      id = 6;
      let url_download = 'http://localhost:8871/file/download?file_name=';
      let url_query = 'http://localhost:8871/file/queryById?id=' + id;
      this.setState({
        ...this.state,
        opacity: 1,
      });
      axios.get(url_query).then(
        res => {
          let name = res.data.data[0].file_name;
          let path = res.data.data[0].file_path;
          let paths = path.split('/');
          let file_name = paths[paths.length - 1];
          url_download = url_download + file_name;
          axios.get(url_download, { responseType: 'blob' }).then(
            res => {
              let blob = res.data;
              let reader = new FileReader();
              reader.readAsDataURL(blob); // 转换为base64，可以直接放入a标签href
              /*reader.onprogress = (e) => {
                // e 是一个 ProgressEvent.
                if (e.lengthComputable) {
                  let percentLoaded = Math.round((e.loaded / e.total) * 100);
                  console.log(percentLoaded);
                  // 更新进度条长度
                  if (percentLoaded < 100) {
                    this.setState({
                      ...this.state,
                      percent: percentLoaded,
                      width: percentLoaded,
                    });
                  }
                }
              };*/
              reader.onload = (e) => {
                // 转换完成，创建一个a标签用于下载
                /*this.setState({
                  ...this.state,
                  percent: 100,
                  width: 100,
                });*/
                let a = document.createElement('a');
                a.download = name;
                a.href = e.target.result;
                a.click();
              };
            }, function(e) {
              alert(e);
            });
        }, function(e) {
          alert(e);
        });
    };

    const changeFile = (e) => {
      file = e.target.files[0];
    };

    const width = this.state.width;
    const opacity = this.state.opacity;
    const percent = this.state.percent;
    return (
      <div className="blog-file">
        <p>封装一个文件上传下载的组件</p>
        <div id="progress_bar" style={{ opacity: `${opacity}` }}>
          <div className="percent" style={{ width: `${width}%` }}>{percent}%</div>
        </div>

        <input type='file' id='file' name='file' onChange={changeFile}/>
        <button onClick={upload}>上传文件</button>
        <button onClick={downLoad}>下载文件</button>


        <h3>文件上传：</h3>
        选择一个文件上传: <br/>
        <form action="http://localhost:8871/file/upload" method="post" target="stop" encType="multipart/form-data">
          <input type="file" name="file"/><br/>
          <input type="submit" value="上传文件"/>
        </form>
        {/*阻止提交跳转页面*/}
        <iframe title='stop' name="stop" style={{ display: 'none' }}></iframe>
      </div>
    );
  }
}
