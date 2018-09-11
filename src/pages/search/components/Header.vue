<template>
    <div class="header border-bottom">
    <router-link to='/'>
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
    </router-link>
    <div class="header-input">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <span class="header-submit">搜索</span>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader',
  data () {
    return {
      keyword: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
    .header
        display: flex
        height: $headerHeight
        line-height: $headerHeight
        font-size: .28rem
        text-align: center
        background: #fff
        .header-left
            float:left
            .back-icon
                width: .8rem
                color: black
                font-size: .35rem
                font-weight: bold
        .header-input
            flex: 1
            height: $headerHeight
            line-height: $headerHeight
            .search-input
                box-sizing: border-box
                width: 100%
                padding: .1rem .6rem .1rem .2rem
                text-align: center
                border-radius: 1rem
                background: #eee
        .header-submit
            min-width: 1rem
            padding: 0 .1rem
            float:right
</style>
