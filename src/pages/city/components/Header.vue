<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    <div class="title">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  .header
    position: relative
    overflow:hidden
    height: $headerHeight
    line-height: $headerHeight
    font-size: .30rem
    color: #fff
    background: $bgColor

    .header-back
        position: absolute
        width: .80rem
        float:left
        text-align:center
        font-weight: bold
        color: #fff
    .title
      text-align: center
</style>
