<template>
  <div>
  <div class="bg_nav hidden-sm-and-down">
    <el-row  class="nav_top ">
      <el-col v-for="(item,index) in navItem" :key="index" :xs="24" :sm="2" :md="2" :lg="2" :xl="2"> <li :title="item" v-pointer class="item_of_nav" >
        {{item}}
      </li></el-col>
    </el-row>
  </div>

  <div class="bg_nav_2 hidden-sm-and-up">
    <el-row  class="nav_top2 ">
      <el-col v-for="(item,index) in navItem" :key="index" :xs="24" :sm="24" :md="24" :lg="24" :xl="24"> <li :title="item" v-pointer class="item_of_nav2" >
        {{item}}
      </li></el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
export default {
  name: 'headerNav',
  data () {
    return {
      navItem: ['首页', '旅行', '心情', '美食', '关于']
    }
  }
}
</script>

<style scoped lang="scss">
  .bg_nav{
    /*background: #dbe6eb*/
  }
  .bg_nav_2{
    /*background: #000*/
  }
.nav_top{
  width: 100%;
  height: 36px;
  background: rgba(0,0,0,0.6);
}
  .nav_top2{
    width: 100%;
    height: 36px;
  }
  .item_of_nav{
    box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);
    padding: 0 25px 0 25px;
    min-width: 40px;
    text-align: center;
    color: #f2f2f2;
    font-size: 14px;
    text-space: 2px;
    transition: 0.3s;
    line-height: 36px;
  }
  .item_of_nav2{
    box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);
    padding: 0 25px 0 25px;
    min-width: 40px;
    text-align: center;
    color: #f2f2f2;
    font-size: 14px;
    text-space: 2px;
    transition: 0.3s;
    line-height: 36px;
    background: rgba(0, 0, 0, 0.6);
  }
  .item_of_nav:hover{
    box-shadow: inset 1px 1px 1px 1px #dbe6eb;
    color: #fff;
  }
</style>
