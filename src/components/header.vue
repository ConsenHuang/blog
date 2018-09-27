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

          <div class="banner">
            <img :class="{'fade':fade}" class="banner" :src="currentImg" />
            <img :class="{'fade':!fade}" class="banner" :src="currentImg2" />
          </div>

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
      imgs: [
        '/static/img/header_1.png',
        '/static/img/header_2.png',
        '/static/img/header_3.png',
        '/static/img/header_4.png'
      ],
      count: 0,
      show_title: false
    }
  },
  mounted () {
    console.log(this.imgs[0])
    setInterval(() => {
      this.count++
    }, 30000)
    setInterval(() => {
      this.show_title = !this.show_title
    }, 5000)
  },
  computed: {
    currentImg () {
      var that = this
      return this.imgs[(that.count % that.imgs.length)]
    },
    currentImg2 () {
      var that = this
      return this.imgs[((that.count % that.imgs.length) + 1) ? ((that.count % that.imgs.length) + 1) : 0]
    },
    fade () {
      if (this.count % 2 === 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="scss">
 .wrap_header .fade{
    opacity: 0;
  }
.wrap_header{
  position: relative;
  width: 100%;
  height: 140px;
}
.banner{
  opacity: 1;
  position: absolute;
  transition: 0.3s;
  width: 100%;
  height: 100%;
  left: 0;
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
    z-index: 9;
  }
</style>
