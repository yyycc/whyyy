import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import code from './code';
import tableCode from './tableCode';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';
import PreFormat from '../../Components/PreFormat/PreFormat';

export class LinuxA extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { codes } = code;
    const { vi, viName, viTitles, cp, cpName, cpTitles, tail, tailName, tailTitles } = tableCode;
    const { fontSize } = this.props.blog;
    return (
      <div className="blog-linux-a">
        <h1>linux指令(1): vi、cp、tail指令</h1>
        <article style={{ fontSize: `${fontSize}px` }}>
          <h2 id="oracle-1-1">1. 启动</h2>
          <p>介绍一下平时最常用到的几个指令～～</p>

          <h2 id="linux-1-1">1. vi 文书编辑器</h2>
          <p>在我本地，编辑器一般用sublime，图形化界面好操作，但是服务器上一般用不了。</p>
          <p>最近项目上访问服务器都要用云桌面，Xshell又回到了我的身边。</p>

          <SimpleTable titles={viTitles} data={vi} name={viName}/>

          <p>(加班到10点。。。再写一个指令慰劳一下辛苦的自己)</p>

          <h2 id="linux-1-2">2. cp 复制</h2>
          <p>这个指令也是非常常用的了呀。</p>
          <p>为了直观，我在本地建了两个文件夹作为测试案例</p>
          <p>~/lasting/cp-test-1 (ONE)</p>
          <p>~/lasting/cp-test-2 (TWO)</p>


          <SimpleTable titles={cpTitles} data={cp} name={cpName}/>

          <h2 id="linux-1-3">3. tail</h2>
          <p>这个指令通常用于在启动tomcat的时候看日志</p>
          <PreFormat content={codes[0]}/>
          <SimpleTable titles={tailTitles} data={tail} name={tailName}/>
        </article>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinuxA);