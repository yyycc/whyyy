import React, { Component } from 'react';

export default class Canvas extends Component {
  static propTypes = {};

  // 显示定义constructor时，必须调用super();
  // 且只有调用super()后才能使用this
  // super调用父类的构造函数返回子类的实例
  constructor() {
    super();
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      console.log(ctx);
      console.log(Object.getPrototypeOf(ctx));
      (function() {
        Object.getPrototypeOf(ctx).Triangle = function(x, y, r) {
          this.save();
          this.translate(x, y);
          this.rotate(r);
          this.beginPath();
          this.moveTo(0, 0);
          this.lineTo(10, 0);
          this.lineTo(0, 10);
          this.lineTo(-10, 0);
          this.closePath();
          this.fill();
          this.restore();
        };
        Object.getPrototypeOf(ctx).line = function(x, y, x1, y1) {
          this.save();
          this.beginPath();
          this.moveTo(x, y);
          this.lineTo(x1, y1);
          this.lineTo(x1 + x, y);
          this.stroke();
          this.restore();
        };
        Object.getPrototypeOf(ctx).lines = function(dict) {
          debugger;
          //数据源提取
          let len = dict.length;
          let xArr = [], yArr = [], tmp_yArr = [];
          for (let i = 0; i < len; i++) {
            xArr.push((i + 1) * 60);
            tmp_yArr.push(dict[i].y);
          }
          let tmp_minY = Math.min.apply(Math, tmp_yArr);//最小值
          let tmp_maxY = Math.max.apply(Math, tmp_yArr);//最大值
          if (tmp_maxY - tmp_minY <= 100) {
            for (let i = 0; i < len; i++) {
              yArr.push(tmp_yArr[i] - tmp_minY + 50);//与最小的做比较
            }
          } else {//如果相差太大会导致图表不美观
            for (let i = 0; i < len; i++) {
              yArr.push(tmp_yArr[i] / 500);
            }
          }
          let minY = Math.min.apply(Math, yArr);
          let maxY = Math.max.apply(Math, yArr);

          //画折线
          for (let i = 0; i < len; i++) {
            let x = xArr[i];
            let y = maxY - yArr[i] + minY;
            if (i === 0) {
              this.moveTo(x, y);
            } else {
              this.lineTo(x, y);
            }
          }
          this.stroke();

          //画点
          for (let i = 0; i < len; i++) {
            let x = xArr[i];
            let y = maxY - yArr[i] + minY;
            let xMemo = dict[i].x;
            let yMemo = '¥' + dict[i].y;
            this.beginPath();
            this.fillStyle = '#000';
            this.arc(x, y, 2, 0, 2 * Math.PI);//画点
            this.fill();
            this.fillText(yMemo, x + 3, y - 10);
            this.fillText(xMemo, x + 3, canvas.height - 10, 40);//画文字
          }
          this.fillText('1000', 40, 50);
        };
      })();

      let dict = [
        { x: '2015-04-24', y: 13400 },
        { x: '2015-04-25', y: 13380 },
        { x: '2015-04-26', y: 13370 },
        { x: '2015-04-27', y: 13370 },
        { x: '2015-04-28', y: 13380 },
      ];

      ctx.strokeStyle = '#7C8B8C';
      // ctx.line(90, 130, 320, 210);
      ctx.lines(dict);
      // ctx.Triangle(320, 210, -Math.PI * .4);

    }
  }

  render() {
    return (
      <div className="blog-canvas">
        <canvas ref={this.canvas} width="780" height="400">
          您的浏览器不支持canvas，请更换浏览器.
        </canvas>
      </div>
    );
  }
}
