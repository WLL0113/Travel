<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input v-model="keyword" type="text" placeholder="输入城市/景点/游玩主题"/>
    </div>
      <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
      keyword: ''
    }
  },
  computed: {
    ...mapState(['city'])
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
      border-radius: .1rem
      background:#fff
      color:#ccc
    .header-right
      minwidth: 1.04rem
      padding: 0 .1rem
      float:right
      text-align:center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .22rem
</style>
