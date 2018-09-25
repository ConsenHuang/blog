<template>
  <div class="wrap_home">
    <div class="content clearfix">
      <div class="left_part">
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <router-view/>
        </transition>
        <!--<v-item></v-item>-->
      </div>
      <div class="right_part">
        <v-introduce></v-introduce>
        <v-recentPost></v-recentPost>
      </div>
    </div>
    <el-pagination
      style="margin-bottom: 30px"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import headerBanner from '@/components/header'
import navHeader from '@/components/nav'
import introduce from '@/components/introduce'
import recentPost from '@/components/recentPost'
export default {
  name: 'home',
  components: {
    'v-header': headerBanner,
    'v-vav': navHeader,
    'v-introduce': introduce,
    'v-recentPost': recentPost
  }
}
</script>

<style scoped lang="scss">
  .wrap_home{
    background: white;
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
