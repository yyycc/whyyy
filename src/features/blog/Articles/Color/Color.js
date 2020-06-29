import React from 'react';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';

/*
 * @name: RGBA色与16进制色互转
 * @description: RGBA色与16进制色转换原理、方法、快速转换
 * @route: /blog/articles/javaScript/color
 * @route2: /css/color
 */
export default function Color() {
  const { toHex } = code;
  return (
    <div className="blog-color">
      <h2 id="js-1">1. css颜色</h2>
      <p>css中表示颜色可以用RGB也可以用16进制，也经常碰到两种互转的情况。</p>
      <p>最近做题也碰到过这样的编程题，这边就记录下来，也省的下次再百度啦</p>
      <p>让我的博客越来越万能吧～～</p>

      <h2 id="js-2">2. 原理</h2>
      <p>先说一下互转的原理，其实就是10进制和16进制互转：</p>
      <p>比如 #ffffff可以看作是ff、ff、ff，每一个转成是进制就是255、255、255，即rgb(255,255,255)，而rgba中的a则表示透明度范围是[0,1]。</p>
      <p>另外，16进制简写规则，满足一定条件就可以简写：</p>
      <p>#FF33AA可以简写成#F3A(每两位都重复)</p>

      <h2 id="js-3">3. 互转</h2>
      <p>这边贴一下代码之前写的一个rgb2hex的代码，题目要求是这样的</p>
      <p><strong>将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff</strong></p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;1. rgb 中每个 , 后面的空格数量不固定</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;2. 十六进制表达式使用六位小写字母</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;3. 如果输入不符合 rgb 格式，返回原始输入</p>
      <PreFormat content={toHex}/>
      <p>对输入的校验比较多，真正转换的代码其实就是 <pre>Number(arr[i]).toString(16)</pre></p>
      <a href='/css/color' target="_blank" rel="noopener norefferrer">看具体效果请戳这里<i
        className='fa fa-arrow-left'> </i></a>
    </div>
  );
}
