<template>
<div>
    <div class="search-history">
        <div class="history-content border-bottom">
            <div class="history-title border-bottom">
            <div class="title-left">搜索历史</div>
            <div class="iconfont delet">&#xe645; 清除</div></div>
            <div class="button-list">
                <div class="button">123</div>
                <div class="button">23456</div>
            </div>
        </div>
    </div>
    <div class="hot-search">
        <div class="search-content">
            <div class="search-title border-bottom">
            <div class="title-left">热门城市</div>
            <div class="iconfont change">&#xe653; 换一批</div>
            </div>
            <div class="hotsearch-list">
                <div class="hotsearch-type">
                        <div class="iconfont view">&#xe625;</div>
                </div>
                <div class="hotsearch-grounp">
                    <div class="item">13元爆款天天抢</div>
                    <div class="item">威威</div>
                    <div class="item">乌镇一日游</div>
                    <div class="item">上海</div>
                    <div class="item">威威</div>
                    <div class="item">乌镇一日游</div>
                </div>
            </div>
            <div class="hotsearch-list">
                <div class="hotsearch-type">
                        <div class="iconfont city">&#xe753;</div>
                </div>
                <div class="hotsearch-grounp">
                    <div class="item">上海</div>
                    <div class="item">舟山</div>
                    <div class="item">苏州</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SearchList'
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
    .history-content
        width: 100%
        height: 2rem
        font-size: .26rem
        margin-top: .05rem
        background: #fff
        .history-title
            display: flex
            height: 0.64rem
            line-height: 0.64rem
            padding: 0 .2rem
            color: #888
            background: #f0f5f6
            border-bottom: $headerBorder
            border-top: $headerBorder
            .title-left
                flex:1
                float: left
            .delet
                float: right
                font-size: .26rem
        .button-list
            display: flex
            align-items: center
            height: 1.3rem
            .button
                margin-left: .2rem
                padding: 0 .15rem
                font-size: .28rem
                height: .6rem
                line-height: .6rem
                text-align: center
                border: .02rem solid rgb(201, 204, 205)
                border-radius: .1rem
    .search-content
        width: 100%
        background: #fff
        font-size: .26rem
        .search-title
            display: flex
            height: 0.64rem
            line-height: 0.64rem
            padding: 0 .2rem
            color: #888
            background: #f0f5f6
            border-bottom: $headerBorder
            border-top: $headerBorder
            .title-left
                flex:1
                float: left
            .change
                float: right
                font-size: .26rem
        .hotsearch-list
            display: flex
            width: 100%
            align-items: center
            border-bottom: $headerBorder
            .hotsearch-type
                display: flex
                width: 10%
                height: 100%
                align-items: center
                justify-content: center
                padding: 0 .1rem
                border-right: $headerBorder
                .view
                    padding: .5rem 0
                    color: rgb(220, 229, 231)
                .city
                    padding: .1rem 0
                    color: rgb(220, 229, 231)
            .hotsearch-grounp
                display: flex
                width: 90%
                flex-wrap: wrap
                .item
                    min-width: 14%
                    max-width: 30%
                    margin: .2rem 0
                    padding: .12rem .25rem
                    font-size: .28rem
                    border-right: $dashedBorder
</style>
