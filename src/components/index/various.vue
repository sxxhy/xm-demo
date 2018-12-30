<template>
    <div class="various content">
        <div class="various-header">
            <h2 class="title">内容</h2>
        </div>
        <div class="various-content">
            <ul class="list clearfix">
                <li class="item" v-for="item of 4">
                    <h2 class="title">图书</h2>
                    <div class="slide">
                        <ul class="slide-list">
                            <li class="slide-item fl" v-for="item of 4">
                                <h4 class="title">
                                    <a href="#">哈利·波特与被诅咒的孩子</a>
                                </h4>
                                <p class="subtitle">
                                    <a href="#">“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！ </a>
                                </p>
                                <p class="price">
                                    <a href="#">29.37元</a>
                                </p>
                                <div class="item-img">
                                    <a href="#"><img src=""></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="spot">
                        <ul class="spot-list">
                            <li class="spot-item active" v-for="item of 4">
                                <span class="spot-slide"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="switch">
                        <a href="javascript:;" class="prev icon"></a>
                        <a href="javascript:;" class="next icon"></a>
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
    .various
        background-color: #f5f5f5
        position: relative
        margin-bottom: 22px
        .various-header
            margin-top: 10px
            position: relative
            height: 58px
            line-height: 58px
            .title
                font-size: 22px
                font-weight: 200
                height: 58px
        .various-content
            .list
                width: 1240px
                height: 420px
                text-align: center
                .item
                    position: relative
                    float: left
                    width: 296px
                    height: 374px
                    padding: 45px 0 0
                    margin-bottom: 14px
                    margin-left: 14px
                    border-top: 1px solid #ffac13
                    background: #fff
                    transition: all .2s linear
                    &:hover
                        box-shadow: 0 15px 30px rgba(0,0,0,0.1)
                        transform: translate3d(0, -2px, 0)
                        .switch
                            .prev,.next
                                opacity: 1
                    &:first-child
                        margin-left: 0
                    .title
                        margin: 0 10px 18px
                        font-size: 16px
                        font-weight: 400
                    .slide
                        height: 340px
                        overflow: hidden
                        .slide-list
                            width: 1184px
                            height: 340px
                            margin-left: 0px
                            transition: margin-left 0.5s ease
                            overflow: hidden
                            .slide-item
                                width: 296px
                                height: 340px
                                .title
                                    margin: 0 20px 5px
                                    font-size: 20px
                                    font-weight: 400
                                    line-height: 1.25
                                    a
                                        display: block;
                                        text-overflow: ellipsis
                                        white-space: nowrap
                                        overflow: hidden
                                        color: #333
                                .subtitle
                                    margin: 0 48px 10px
                                    height: 40px
                                    font-size: 12px
                                    line-height: 20px
                                    overflow: hidden
                                    color: #b0b0b0
                                    a
                                        color: #b0b0b0
                                .price
                                    height: 21px
                                    margin: 0 10px 15px
                                    a
                                        color: #333
                                .item-img
                                    width: 216px
                                    height: 154px
                                    margin: 0 auto
                                    a
                                        display: block
                                        height: 154px
                                        img
                                            width: 216px
                                            height: 154px
                    .spot
                        position: absolute
                        bottom: 15px
                        left: 0
                        width: 296px
                        .spot-list
                            .spot-item
                                display: inline-block
                                width: 10px
                                height: 10px
                                padding: 10px
                                margin: 0 2px
                                cursor: pointer
                                &:hover
                                    .spot-slide
                                        background-color: #ff6700
                                &.active
                                    cursor: default
                                    .spot-slide
                                        border-color: #ff6700
                                        background-color: transparent
                                .spot-slide
                                    display: block
                                    width: 6px
                                    height: 6px
                                    border: 2px solid #f5f5f5
                                    border-radius: 6px
                                    text-align: left
                                    overflow: hidden
                                    background-color: #b0b0b0
                                    transition: all .5s
                    .switch
                        .prev,.next
                            width: 20px
                            height: 24px
                            padding: 12px 0
                            font-size: 18px
                            line-height: 24px
                            position: absolute
                            top: 50%
                            margin-top: -20px
                            opacity: 0
                            transition: all .6s
                            display: inline-block
                            color: #fafafa
                            background-color: rgba(66,66,66,0.2)
                        .prev
                            left: 0
                        .next
                            right: 0
</style>