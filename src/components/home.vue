<template>
  <div>
    <div class="wrap_home">
      <v-header></v-header>
      <v-vav></v-vav>
      <router-view/>
    </div>
    <canvas id="cas"></canvas>
  </div>
</template>

<script>
import headerBanner from '@/components/header'
import navHeader from '@/components/nav'
export default {
  name: 'home',
  data () {
    return {
      canvas: null,
      ctx: null,
      W: null,
      H: null
    }
  },
  components: {
    'v-header': headerBanner,
    'v-vav': navHeader
  },
  methods: {
    initCanvas () {
      var that = this
      var canvas, ctx
      that.canvas = canvas = document.getElementById("cas");
      that.ctx = ctx = canvas.getContext("2d");
      resize();
      window.onresize = resize;
      function resize() {
        that.W = canvas.width = document.body.clientWidth
        that.H = canvas.height = document.documentElement.scrollHeight
      }
      var RAF = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();
      // 鼠标活动时，获取鼠标坐标
      var warea = {x: null, y: null, max: 20000};
      window.onmousemove = function(e) {
        e = e || window.event;
        warea.x = e.clientX;
        warea.y = e.clientY + that.getScrollTop();
      };
      window.onmouseout = function(e) {
        warea.x = null;
        warea.y = null;
      };
      // 添加粒子
      // x，y为粒子坐标，xa, ya为粒子xy轴加速度，max为连线的最大距离
      var dots = [];
      for (var i = 0; i < 300; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var xa = Math.random() * 2 - 1;
        var ya = Math.random() * 2 - 1;
        dots.push({
          x: x,
          y: y,
          xa: xa,
          ya: ya,
          max: 6000
        })
      }
      // 延迟100秒开始执行动画，如果立即执行有时位置计算会出错
      setTimeout(function() {
        animate();
      }, 100);
      // 每一帧循环的逻辑
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 将鼠标坐标添加进去，产生一个用于比对距离的点数组
        var ndots = [warea].concat(dots);
        dots.forEach(function(dot) {
          // 粒子位移
          dot.x += dot.xa;
          dot.y += dot.ya;
          // 遇到边界将加速度反向
          dot.xa *= (dot.x > canvas.width || dot.x < 0) ? -1 : 1;
          dot.ya *= (dot.y > canvas.height || dot.y < 0) ? -1 : 1;
          // 绘制点
          ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);
          // 循环比对粒子间的距离
          for (var i = 0; i < ndots.length; i++) {
            var d2 = ndots[i];
            if (dot === d2 || d2.x === null || d2.y === null) continue;
            var xc = dot.x - d2.x;
            var yc = dot.y - d2.y;
            // 两个粒子之间的距离
            var dis = xc * xc + yc * yc;
            // 距离比
            var ratio;
            // 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
            if (dis < d2.max) {
              // 如果是鼠标，则让粒子向鼠标的位置移动
              if (d2 === warea && dis > (d2.max / 2)) {
                dot.x -= xc * 0.03;
                dot.y -= yc * 0.03;
              }
              // 计算距离比
              ratio = (d2.max - dis) / d2.max;
              // 画线
              ctx.beginPath();
              ctx.lineWidth = ratio / 2;
              ctx.strokeStyle = 'rgba(0,0,0,' + (ratio + 0.2) + ')';
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(d2.x, d2.y);
              ctx.stroke();
            }
          }
          // 将已经计算过的粒子从数组中删除
          ndots.splice(ndots.indexOf(dot), 1);
        });
        RAF(animate);
      }
    },
    getScrollTop () {
      var scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    cleanCanvas () {
      return new Promise(function (resolve, reject) {
        var that = this
        this.ctx.clearRect(20, 20, that.W, that.H)
        resolve()
      })
    }
  },
  mounted () {
    this.initCanvas()
    setInterval(() => {
      this.cleanCanvas().then(() => {
        this.initCanvas()
      })
    }, 1 * 60 * 1000)
  }
}
</script>

<style scoped lang="scss">

  #cas{
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
  }
  .wrap_home{
    position: relative;
    z-index: 1;
    max-width: 1024px;
    height: auto;
    margin: 0 auto;
  }
  .left_part{
    float: left;
    width: 770px;
    height: auto;
  }
  .right_part{
    float: right;
    width: 236px;
    height: auto;
  }
</style>
