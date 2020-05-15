import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import flower from '../../../../images/floating-flowers.png';
import { Pagination } from 'antd';

/*
 * @name: 每日一句
 * @description: 每日一句列表
 * @description: 渐变背景、图片滚动、文字浮于图片之上
 * @problem: 文字absolute，超过可视高度后就有问题，所以之后要做翻页(>24跳)
 */

export class Sentences extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { sentences, sentencesSize, sentencesCurrent } = this.props.blog;
    let { sentencesToDisplay } = this.props.blog;
    const { changeSentences } = this.props.actions;
    if (sentencesToDisplay.length === 0) {
      sentencesToDisplay = sentences.slice(0, sentencesSize);
    }
    return (
      <div className="blog-sentences">
        <div className="blog-sentences-list-bg">
          <h1>everyday sentences</h1>
          <div className="blog-sentences-list-img">
            <img className="blog-sentences-list-img-1" src={flower} alt=''/>
            <img className="blog-sentences-list-img-2" src={flower} alt=''/>
          </div>
          <div className="blog-sentences-list-ol">
            <ol className="blog-sentences-list-bg-ol">
              {
                sentencesToDisplay.map((ele, index) => {
                  return <li key={index}>{ele}</li>;
                })
              }
            </ol>
          </div>
          <div className="blog-sentences-list-pagination">
            <Pagination simple current={sentencesCurrent} pageSize={sentencesSize} total={sentences.length}
                        onChange={changeSentences}/>
          </div>
        </div>
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
)(Sentences);
