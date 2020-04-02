import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import code from './code';
import urls from './urls';
import PreFormat from '../component/PreFormat';
import { Link } from 'react-router-dom';

export class LinuxB extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { codes } = code;
    const { fontSize, leaveConfirm } = this.props.blog;
    const { urlStates } = urls;
    return (
      <div className="blog-linux-b">
        <h1>linux指令(2): 常用指令</h1>
        <body style={{ fontSize: `${fontSize}px` }}>
        <p>记录一下linux中常用的指令</p><p></p>

        <h2 id="linux-2-1">1. netstat</h2>
        <p>查看端口占用情况</p>
        <PreFormat content={codes[1]}/>

        <h2 id="linux-2-2">2. find</h2>
        <p>在 当前目录下，查找所有内容包含‘abc’的文件</p>
        <PreFormat content={codes[2]}/>

        <p>在当前目录下，查找所有文件名以my开头的文件</p>
        <PreFormat content={codes[3]}/>

        <p>在当前文件夹下所有文件中(*)找包含'指定的内容'的文件输出文件名</p>
        <PreFormat content={codes[4]}/>

        <h2 id="linux-2-3">3. env</h2>
        <p>看环境变量</p>

        <h2 id="linux-2-4">4. whereis</h2>
        <p>搜索程序名</p>

        <h2 id="linux-2-5">5. which</h2>
        <p>搜索系统命令</p>

        <h2 id="linux-2-6">6. lsnrctl</h2>
        <p>oracle中设置监听器指令 +[status]/[start]/[stop]</p>

        <h2 id="linux-2-7">7. tar</h2>
        <p>打成tar包</p>
        <PreFormat content={codes[5]}/>
        <p>解压tar包</p>
        <PreFormat content={codes[6]}/>
        <p>如果要操作.tar.gz的压缩包，就多加一个z指令</p>

        <h2 id="linux-2-8">8. ></h2>
        <p>将指令的输出放进文件</p>
        <PreFormat content={codes[7]}/>
        <p>当前目录就会出现config文件，里面是git配置内容</p>

        <h2 id="linux-2-9">9. echo</h2>
        <p>输出cyy</p>
        <p>echo cyy</p>
        <p>输出黄底 红色的 ever</p>
        <PreFormat content={codes[8]}/>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. Linux xargs 命令</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://www.runoob.com/linux/linux-comm-xargs.html" rel="noopener noreferrer" target="_blank">
            1. Linux xargs 命令</a><br/>
        </p>
        }
        </body>
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
)(LinuxB);
