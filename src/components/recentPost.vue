<template>
  <div class="wrap">
    <div class="title">
      最新文章
    </div>
    <div class="content">
      <div v-for="item in 4" :key="item" class="item clearfix">
        <div class="left">
          <img class="img" src="/static/img/test.png" />
        </div>
        <div class="right">
          <p class="next_world fen_lei">如何添加一个分类</p>
          <p class="next_world">发布日期 ：2018-9-15</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  .img{
    width: 50px;
    height: 35px;
  }
  .content{
    border: 1px solid black;
    border-top: 0;
    height: 300px;
    padding: 6px;
  }
  .wrap{
    width: 236px;
    height: 380px;
  }
  .title{
    background: rgba(0,0,0,0.6);
    padding: 0 0 0 10px;
    height: 28px;
    line-height: 28px;
    background-color: #333333;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    text-decoration: none;
    color: #fff;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-radius: 3px;
  }
  .left{
    margin-left: 6px;
  }
  .item{
    max-width: 99.8%;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
    padding-top: 10px;
  }
  .right{
    width: 70%;
    line-height: 20px;
    text-align: left;
  }
  .fen_lei{
    font-weight: bold;
    font-size: 12px;
    color: black;
    margin-bottom: 10px;
  }
</style>
