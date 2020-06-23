import React, { Component } from 'react';
import tableCode from './tableCode';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';

export default class Number extends Component {

  render() {
    const { number, numberTitle, numberName } = tableCode;
    return (
      <div className="blog-number">
        <h2 id="javaScript-1">1. 0.1+0.2 != 0.3?</h2>
        <p>javaScript中是整数和浮点数都是采用64位双精度格式来存储的。</p>
        <ul>
          <li>第1位sign(1)，sign,符号位S，0代表正，1代表负</li>
          <li>第2-12位(11)，exponent，数字的指数E位数和方向：00000000001-01111111111[1-1023]是左移动（负指数），10000000001-11111111110[1025-2046]代表右移动（正指数）</li>
          <li>第13-64位(52)，mantissa，尾数M(超出的部分自动进一舍零)</li>
        </ul>
        <p>那么0.1是如何表示的呢</p>
        <p>首先现将0.1转成二进制(小数转二进制：*2取整): 0.00011001100110011001100110(0110循环)</p>
        <p>因为精度是52位，所以取52位</p>
        <p>换成指数表示法就是1.10011001100110(0110循环)左移四位</p>
        <p>所以S = 0, E = -4 + 1023 = 1019 = 01111111011, M = 1001100110011001100110011001100110011001,100110011010</p>
        <p>(超出部分进1，加上最后一位1，就是0，进1，倒数第二位0，所以最后两位是10)</p>
        <p>而这个数，再转化成10进制，是0.1000000000000000055511151231257827021181583404541015625000(5是小数点后18位)</p>
        <p>而0.1和0.2转化成二进制运算后再转成十进制就得到0.30000000000000004(4是小数点后17位)</p>
        <p>而javaScript精度是小数点后17位，之后会丢失。所以其实我们看到的0.1并不是0.1，而是经过精度舍弃的，如果你toPrecision(20)，就会发现，小数点后不全是0。</p>

        <h2 id="javaScript-2">2. Math的实例方法</h2>
        <p>(非数值会转为数值，转不了就NaN)</p>
        <SimpleTable titles={numberTitle} data={number} name={numberName}/>
      </div>
    );
  }
}
