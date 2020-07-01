import React, { Component } from 'react';
import axios from 'axios';

export default class File extends Component {
  static propTypes = {};

  render() {
    let file;
    const upload = () => {
      let form = new FormData();
      form.append('files', file);
      let url = 'http://localhost:8871/file/upload';

      axios.post(url, form, {
        headers:
          { 'Content-Type': 'multipart/form-data' },
      }).then(
        function(res) {
          alert(res.data.data);
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

        <input type='file' id='file' onChange={changeFile}/>
        <button onClick={upload}/>


        <h3>文件上传：</h3>
        选择一个文件上传: <br/>
        <form action="http://localhost:8871/file/upload" method="post" target="stop" encType="multipart/form-data">
          <input type="file" name="file"/><br/>
          <input type="submit" value="上传文件"/>
        </form>
        {/*阻止提交跳转页面*/}
        <iframe name="stop" style={{ display: 'none' }}></iframe>
      </div>
    );
  }
}
