<template>
  <div class="wrap">
    <div v-for="item in 6" :key="item" class="item_wrap clearfix">
        <div class="left_part">
          <div class="wrap_img">
            <img v-pointer class="img_item"  src="/static/img/test.png">
          </div>
        </div>
        <div class="right_part">
        <div v-pointer class="title">行走在文艺里的青年</div>
        <div class="wrap_next_world clearfix">
          <span class="next_world left">发布时间  :</span>
          <span class="next_world left content">2018-9-23</span>
          <span class="next_world left" style="margin-left: 20px">分类  :</span>
          <span class="next_world left content">心情</span>
          <span class="next_world right content">
            consenHuang
          </span>
          <span class="next_world right">
            作者  :
          </span>
        </div>
        <p class="centent_item">普通青年的空余时间，大部分都会交付给游戏，他们喜欢厮杀和战斗，来消磨无处释放的压力和精力，而文艺青年空闲时，会冲上一杯清爽的绿茶，抱着一本极文艺的书籍，慢慢地细细品味，整个身心都徜徉在美轮美奂的幻想里。普通青年的空余时间，大部分都会交付给游戏，他们喜欢厮杀和战斗，来消磨无处释放的压力和精力，而文艺青年空闲时，会冲上一杯清爽的绿茶，抱着一本极文艺的书籍，慢慢地细细品味，整个身心都徜徉在美轮美奂的幻想里。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .content{
    margin: 0 10px;
  }
  .centent_item{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: #777777;
    font-size: 12px;
    line-height: 16px;
  }
  .wrap_next_world{
    margin-top: 14px;
    margin-bottom: 4px;
  }

  .right_part{
    text-align: left;
    float: right;
    max-width: 580px
  }
  .title{
      color: #565656;
      font-size: 15px;
      line-height: 15px;
      transition: 0.5s;
  }
  .item_wrap:hover .title{
    color: cornflowerblue;
  }
  .ent.style {
    color: #565656;
    font-size: 15px;
    line-height: 15px;
  }
  .left_part{
    text-align: left;
    width: 190px;
    height: 124px;
    float: left;
  }
.img_item{
  text-align: left;
  width:174px;
  height:94px;
  transition: 0.5s;
  box-sizing: border-box;
}
  .wrap_img{
    width:174px;
    height:94px;
    overflow: hidden;
    transition: 0.3s;
  }
  .wrap_img:hover{
    box-shadow: 0 1px 3px rgba(0,0,0,.02), 0 16px 32px -4px rgba(0,0,0,.17);
    transform: translateY(-1px);
  }
</style>
