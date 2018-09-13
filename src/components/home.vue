<template>
  <div class="wrap_home">
    <v-header></v-header>
    <v-vav></v-vav>
  </div>
</template>

<script>
import headerBanner from '@/components/header'
import navHeader from '@/components/nav'
export default {
  name: 'home',
  components: {
    'v-header': headerBanner,
    'v-vav': navHeader
  }
}
</script>

<style scoped lang="scss">
  .wrap_home{
    max-width: 1024px;
    height: auto;
    margin: 0 auto;
  }
</style>
