import React, { Component } from 'react';
import axios from 'axios';

export default class File extends Component {

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
                debugger;
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
      id = 4;
      let url_download = 'http://localhost:8871/file/download?file_name=';
      let url_query = 'http://localhost:8871/file/queryById?id=' + id;
      axios.get(url_query).then(
        function(res) {
          let name = res.data.data[0].file_name;
          let path = res.data.data[0].file_path;
          let paths = path.split('/');
          let file_name = paths[paths.length - 1];
          url_download = url_download + file_name;
          axios.get(url_download, { responseType: 'blob' }).then(
            function(res) {
              let blob = res.data;
              let reader = new FileReader();
              reader.readAsDataURL(blob); // 转换为base64，可以直接放入a标签href
              reader.onload = function(e) {
                // 转换完成，创建一个a标签用于下载
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
    return (
      <div className="blog-file">
        <p>封装一个文件上传下载的组件</p>

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
