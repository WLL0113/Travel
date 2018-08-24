<template>
  <div class="icons">
     <swiper>
      <swiper-slide v-for="(page, index) of pages"
                   :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id">
          <div class="icon-img">
            <img class="icon-img-size" :src="item.imgUrl">
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        desc: '夏日玩水'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '自然风光'
      }, {
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
        desc: '生活休闲'
      }, {
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        desc: '全部玩乐'
      }, {
        id: '007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
        desc: '其他'
      }, {
        id: '008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
        desc: '其他'
      }, {
        id: '009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
        desc: '其他'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    background: #ccc
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-size
          display: block
          margin: 0 auto
          height: 100%
        .icon-desc
          position: absolute
          left: 0
          right: 0
          text-align: center
          height: .44rem
          line-height: .44rem
          color: $darkTextColor
          ellipsis()
</style>
