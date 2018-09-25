<template>
<div>
  <div class="bg_nav">
    <el-row  class="nav_top ">
      <el-col v-for="(item,index) in nav.nav" :key="index" :xs="24" :sm="2" :md="2" :lg="2" :xl="2">
        <li @click="go_to_part(item)" :title="item.value" v-pointer class="item_of_nav" >
          {{item.value}}
        </li>
      </el-col>
    </el-row>
  </div>
  <el-breadcrumb class="bread">
    <el-breadcrumb-item :to="{ path: '/' }">醉流年</el-breadcrumb-item>
    <el-breadcrumb-item>{{nav.currentNav.value}}</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'headerNav',
  data () {
    return {
    }
  },
  mounted () {
    console.log(this.nav)
  },
  methods: {
    go_to_part (item) {
      this.$store.dispatch('nav/updateNav', item)
    }
  },
  computed: {
    ...mapState(['nav'])
  }
}
</script>

<style scoped lang="scss">
  .bread{
    background: white;
    padding: 20px 0;
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
    min-width: 60px;
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
    color: lightskyblue;
    font-size: 14px;
  }
</style>
