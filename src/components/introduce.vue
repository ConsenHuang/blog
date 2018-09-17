<template>
  <div class="wrap">
    <div class="title">
      作者介绍
    </div>
    <div class="content">
      <img src="/static/img/i2.jpeg"/>
      <div class="word">
       <div> 一盏茶</div>
       <div>一轮明月</div>
        <div> 一个开始怀旧的少年</div>
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
  .word{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      color: #777777;
      font-size: 12px;
      line-height: 20px;
  }
  .content{
    border: 1px solid black;
    border-top: 0;
    height: 300px;
  }
  .content img{
    width: 214px;
    height: 233px;
    margin-top: 6px;
  }
  .wrap{
    width: 236px;
    height: 380px;
    margin-top: -20px;
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
</style>
