<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    width: 100%
    line-height: .5rem
    font-size: .30rem
    font-weight: bold
    padding: .1rem 0
    text-indent:1em
    background: #eee
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
  .item-img
    width: 100%
  .item-info
    padding: .15rem

    .item-title
      line-height: .54rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
