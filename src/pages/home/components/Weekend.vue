<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
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
  data () {
    return {
      weekendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/c2/2f36b1a2ff4976.jpg_r_640x214_d7471872.jpg',
        title: '丽江必游TOP10',
        desc: '爱巍峨雄伟的雪山，波澜壮阔的河川'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4f/a09503e4b9ee85.jpg_r_640x214_3c128df5.jpg',
        title: '昆明必游TOP10',
        desc: '走进春城，感受彩云之南'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/e2/2a63e38b84bc8e.jpg_r_640x214_679f0d37.jpg',
        title: '玩转主题乐园',
        desc: '乐园，与青春作伴'
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
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
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
