<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div  ref="wrap_header" class="wrap_header grid-content bg-purple">
          <transition enter-active-class="animated zoomInLeft"
                      leave-active-class="animated zoomOutRight"
          >
            <div title="醉流年" v-show="show_title" class=" title_world">醉流年</div>
          </transition>
        <img class="banner" src="/static/img/header_2.png" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'headerBanner',
  data () {
    return {
      show_title: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.show_title = true
    }, 1000)
  }
}
</script>

<style scoped lang="scss">
.wrap_header{
  position: relative;
  width: 100%;
  height: 140px;
}
.banner{
  width: 100%;
  height: 100%;
  float:left;
}
  .title_world{
    width: 180px;
    height: 60px;
    font-family: gufeng;
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 60px;
    margin-left: -60px;
    margin-top: -30px;
  }
</style>
