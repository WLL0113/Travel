<template>
  <div class="alist">
    <ul class="adetail">
      <li class="message border-bottom">
        <span class="iconfont front">&#xe774;</span>
        北京市
        <span class="iconfont last">&#xe62d;</span>
      </li>
      <li class="message border-bottom">
        <span class="iconfont front">&#xe67b;</span>查看景点简介及开放时间
        <span class="iconfont last">&#xe62d;</span>
      </li>
    </ul>
     <ul class="bdetail">

      <li class="line"></li>

      <li class="ainfo border-bottom">
        <span class="iconfont bfront">&#xe600;&#xe600;&#xe600;&#xe600;</span>
        <span class="iconfont blast"><span class="fonts">14条评论</span>&#xe62d;</span>
      </li>

      <li class="line"></li>

      <li class="binfo border-bottom" @click="handleClick">
        <span class="iconfont bfront">&#xe825; </span>
        <span class="text">1.除法定节假日，故宫博物院实行周一闭馆。2.如遇天安门广场戒严，请从故宫两侧（东华门或西华门），沿故宫城墙步行至午门验票！</span>
        <span class="iconfont blast">&#xe62d;</span>
      </li>

      <li class="line"></li>

    </ul>
    <detail-apper v-show="showAp" @close="handleClose"></detail-apper>
  </div>
</template>

<script>
import DetailApper from './Apper'

export default {
  name: 'DetailAList',
  components: {
    DetailApper
  },
  data () {
    return {
      showAp: false
    }
  },
  methods: {
    handleClick () {
      this.showAp = true
    },
    handleClose () {
      this.showAp = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .line
    height: .2rem
    background: #F0F0F0
  .adetail
    postion: absolute
    height: 1.6rem
    .message
      height: .8rem
      line-height: .8rem
      .front
        float: left
        padding: 0 .3rem
      .last
        float: right
        padding: 0 .3rem
  .bdetail
    postion: absolute
    .ainfo
      postion: relative
      height: .7rem
      line-height: .7rem
      .bfront
        float: left
        font-size: .23rem
        color: orange
        padding: 0 .3rem
      .blast
        float: right
        padding: 0 .3rem
        .fonts
          padding: 0 .2rem
          font-size: .25rem
    .binfo
      display: flex
      height: .7rem
      line-height: .7rem
      background: #fff5e5
      .bfront
        color: #ff8300
        float: left
        padding: 0 .3rem
      .text
        flex: 1
        line-height: .7rem
        color: #ff8300
        ellipsis()
      .blast
        float: right
        padding: 0 .3rem

</style>
