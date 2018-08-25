<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
  </div>
</template>

<script>
export default{
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  .search
    background: $bgColor
    padding: 0 .1rem
    height: .73rem
    font-size: .24rem
    .search-input
      box-sizing: border-box
      width:100%
      text-align: center
      padding: 0 .1rem
      height: .62rem
      line-height: .62rem
      border-radius: .09rem
      color: #666
</style>
