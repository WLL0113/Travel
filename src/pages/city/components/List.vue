<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <div class="button-list">
          <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
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
              @click="handleCityClick(item.name)"
            >
                <div class="button">{{item.name}}</div>
            </div>
          </div>
      </div>
      <div  class="area"
            v-for="(item,key) of cities"
            :key="key"
            :ref="key">
          <div class="title border-topbottom">{{key}}</div>
            <div class="item-list ">
              <div
                class="item border-bottom"
                :key="innerItem.id"
                v-for="innerItem of item"
                @click="handleCityClick(innerItem.name)"
              >{{innerItem.name}}</div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default{
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city' // 一个对象，vuex里面的公用数据city，映射到我这个计算属性里，名字叫currentCity
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city) // 把city传进去
      this.$router.push('/')
    },
    ...mapMutations(['changeCity']) // 有个一个mutation叫做changecity 我把这个mutation映射到组件里面名字叫做changecity的方法里
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
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
