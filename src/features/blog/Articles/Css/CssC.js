import React from 'react';
import code from './code';
import { PreFormat } from '../../Components/PreFormat/PreFormat';

export default function CssC() {
  const { codes, scaleYCss, scaleYHtml } = code;
  return (
    <div className="blog-css-c">
      <h2 id="css-1-1">1. 0.5px的线</h2>
      <p>0.5px的线怎么画是我在某一次面试的时候，面试官问的问题,当时没有回答出来，因为从来没想过这个问题。。。</p>
      <p>为什么需要0.5px？其实我也不知道，可能是因为1px太丑了吧。。。</p>
      <p>进入正题，如何实现呢？方法有几个</p>
      <h3 id="css-1-1-1">1.1. 设置height</h3>
      <p>方法1非常的简单，一句话就可以实现</p>
      <PreFormat content={codes[5]}/>
      <p>但是呢，这个在chrome浏览器上就没有效果，safari上可以。</p>
      <h3 id="css-1-1-2">1.2. 缩放</h3>
      <p>css代码</p>
      <PreFormat content={scaleYCss}/>
      <p>html代码</p>
      <PreFormat content={scaleYHtml}/>
      <p>这里transform的scale缩放方法，在Y轴上缩小为原来的0.5，实现0.5px的效果，粗细还是挺明显的。</p>
      <h3 id="css-1-1-3">1.3. 渐变</h3>
      <p>利用background的linear-gradient属性</p>
      <PreFormat content={codes[6]}/>
      <p>第一个参数是渐变的方向，后面的都是颜色,transparent表示完全透明，就得到了一个1px，但是一是看不见的0.5px的线</p>
      <a href='/css/half' target="_blank" rel="noopener norefferrer">看具体效果请戳这里<i
        className='fa fa-arrow-left'> </i></a>
      <p>网上还有很多用伪类的方法，我不是很了解伪类，所以这边就没有写</p>
      <h2 id="css-1-2">2. 0.5px的边框</h2>
      <p>0.5px的边框用缩放的方式就可以实现</p>
      <PreFormat content={codes[7]}/>
    </div>
  );
}
