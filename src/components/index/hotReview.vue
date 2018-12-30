<template>
    <div class="hot-review content">
        <div class="review-header">
            <h2 class="title">热门产品</h2>
        </div>
        <div class="review-content">
            <ul class="list clearfix">
                <li class="item" v-for="item of 4">
                    <div class="item-img">
                        <a href="#" class="link"><img src=""></a>
                    </div>
                    <p class="review">
                        <a href="#" class="link">非常好用，孩子使用防止沉迷于电话影响学习。做工很好，定位基本准确，通话清晰。如果加入时间显示就更完美...</a>
                    </p>
                    <p class="author"> 来自于 18291588119 的评价 </p>
                    <div class="info">
                        <h3 class="title">
                            <a href="#" class="link">米兔定位电话</a>
                        </h3>
                        <span>|</span>
                        <p class="price">159元</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus">
    .hot-review
        background-color: #f5f5f5
        position: relative
        margin-bottom: 22px
        .review-header
            position: relative
            height: 58px
            .title
                font-size: 22px
                font-weight: 200
                line-height: 58px
        .review-content
            .list
                width: 1240px
                height: 415px
                .item
                    position: relative
                    float: left
                    width: 296px
                    height: 415px
                    margin-left: 14px
                    margin-bottom: 14px
                    background: #fff
                    transition: all .2s linear
                    &:hover
                        box-shadow: 0 15px 30px rgba(0,0,0,0.1)
                        transform: translate3d(0, -2px, 0)
                    &:first-child
                        margin-left: 0
                    .item-img
                        width: 296px
                        height: 220px
                        margin: 0 0 28px
                        .link
                            display: block
                            img
                                width: 296px
                                height: 220px
                    .review
                        height: 72px;
                        margin: 0 28px 22px
                        font-size: 14px
                        line-height: 24px
                        font-weight: 400
                        overflow: hidden
                        .link
                            display: block
                            color: #333
                    .author
                        position: relative
                        height: 18px
                        margin: 0 28px 8px
                        padding: 0 10px 0 0
                        font-size: 12px
                        color: #b0b0b0
                    .info
                        margin: 0 30px
                        font-size: 14px
                        text-overflow: ellipsis
                        white-space: nowrap
                        overflow: hidden
                        .title
                            display: inline-block;
                            font-weight: 400
                            max-width: 170px
                            vertical-align: bottom
                            text-overflow: ellipsis
                            white-space: nowrap
                            overflow: hidden
                            .link
                                color: #333
                        &>span
                            color: #b0b0b0
                            margin: 0 5px
                        .price
                            display: inline;
                            color: #ff6700
</style>