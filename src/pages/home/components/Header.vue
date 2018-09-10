<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
    </div>
      <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex' // vuex给了一个高级的api
export default {
  name: 'HomeHeader',
  data () {
    return {
      keyword: ''
    }
  },
  computed: { // mapState是指把vuex里的数据映射到这个组件的computed的计算书属性里,把city这个公用数据映射到，名字叫city的计算属性中
    ...mapState(['city']) // ...展开运算符,['city']数组
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display:flex
    line-height: $headerHeight
    background:$bgColor
    color:#fff
    .header-left
      width: .80rem
      float:left
      .back-icon
        text-align:center
        font-size: .35rem
        font-weight: bold
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      padding-left: .2rem
      margin-right: .05rem
      border-radius: .05rem
      background:#fff
      color:#ccc
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float:right
      text-align:center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .22rem
</style>
