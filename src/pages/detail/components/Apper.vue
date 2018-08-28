<template>
  <div class="apper">
    <div class="title"><span class="iconfont bfront">&#xe825;</span>景区公告</div>
    <div class="content"> <p>1.除法定节假日，故宫博物院实行周一闭馆。</p>
                          <p>2.如遇天安门广场戒严，请从故宫两侧（东华门或西华门），沿故宫城墙步行至午门验票！</p>
    </div>
    <div class="back"  @click="handleClick">
      <span class="iconfont bfront">&#xe638;</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailApper',
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
 .apper
    z-index: 99
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    background: #fff
    opacity: 0.9
  .title
    font-size .40rem
    color: #ff8300
    text-align: center
    padding-bottom: 1rem
    margin-top: 2rem
    .bfront
      margin-left: -.2rem
      padding-right: .2rem
      font-size: .45rem
  .content
    line-height: .5rem
    color: #333
    padding: 0 1rem
    text-align: left
  .back
    position: relative
    top: 4rem
    width: .7rem
    height: .7rem
    margin: auto
    border-radius: .5rem
    background: rgba(0, 0, 0, .8)
    font-size: .24rem
    text-align: center
    color: #fff
    .bfront
      line-height: .7rem
      padding-right: .03rem
</style>
