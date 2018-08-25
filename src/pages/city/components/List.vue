<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <div class="button-list">
          <div class="button-wrapper">
              <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div
              class="button-wrapper"
              v-for="item of hot"
              :key="item.id"
            >
                <div class="button">{{item.name}}</div>
            </div>
          </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key">
          <div class="title border-topbottom">{{key}}</div>
            <div class="item-list ">
              <div
                class="item border-bottom"
                v-for="innerItem of item"
                :key="innerItem.id"
              >{{innerItem.name}}</div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default{
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.list
  position: absolute
  overflow:hidden
  top: 1.59rem
  right: 0
  bottom: 0
  left: 0
.title
  line-height: .54rem
  font-size: .24rem
  background: #eee
  padding-left: .2rem
  color: #666
.button-list
  overflow: hidden
  padding: .1rem .6rem .1rem .1rem
  .button-wrapper
    float: left
    width: 33.33%
    .button
      margin: .1rem
      text-align: center
      padding: .1rem 0
      border: .02rem solid #ccc
      border-radius: .02rem
.item-list
  .item
    line-height: .44rem
    padding: .2rem
</style>
