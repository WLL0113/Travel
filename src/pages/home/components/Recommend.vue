<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/d3/4d05733de42028e15b5eb8d66442f011.water.jpg_150x150_c9fa3528.jpg',
        title: '大峡谷温泉',
        desc: '西部大峡谷温泉是国家AAAA级旅游景区，位于云南省昭通市水富县，距四川省宜宾市区32公里、距水富县城4公里。金沙江流经该地区，沿江两岸山崖险峻，草木葱翠。'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/d3/4d05733de42028e15b5eb8d66442f011.water.jpg_150x150_c9fa3528.jpg',
        title: '大峡谷温泉',
        desc: '西部大峡谷温泉是国家AAAA级旅游景区，位于云南省昭通市水富县，距四川省宜宾市区32公里、距水富县城4公里。金沙江流经该地区，沿江两岸山崖险峻，草木葱翠。'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/d3/4d05733de42028e15b5eb8d66442f011.water.jpg_150x150_c9fa3528.jpg',
        title: '大峡谷温泉',
        desc: '西部大峡谷温泉是国家AAAA级旅游景区，位于云南省昭通市水富县，距四川省宜宾市区32公里、距水富县城4公里。金沙江流经该地区，沿江两岸山崖险峻，草木葱翠。'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    font-weight: bold
    width: 100%
    line-height: .5rem
    font-size: .30rem
    padding: .1rem 0rem .1rem .2rem
    background: #eee
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.5rem
      height: 1.5rem
      padding: .2rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .37rem
        margin-top: .24rem
        background: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
</style>
