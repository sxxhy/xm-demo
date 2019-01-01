<template>
    <li class="product-item">
        <a href="#" class="link">
            <div class="item-img">
                <img :src="listInfo.p_img_url">
            </div>
            <div class="title">{{listInfo.pname}}</div>
            <div class="subtitle">{{listInfo.p_title}}</div>
            <div class="price">
                <span>{{listInfo.p_price}}元</span>&nbsp;
                <del>{{listInfo.p_price+200}}元</del>
            </div>
            <div class="flags" v-if="listInfo.P_active"  :style="{background:`${listInfo.P_active.indexOf('新')==-1?'#e53935':'#83c44e'}`}">{{listInfo.P_active}}</div>
            <div class="comment">
                <a href="#" class="comment-content">
                    <span class="text">样子美观大方，加上优惠券这个壶太划算了，祝小米明年越...</span>
                    <span class="author"> 来自于 钟敏光 的评价 </span>
                </a>
            </div>
        </a>
    </li>
</template>

<script>
    export default {
        props: ['listInfo']
    }
</script>

<style lang="stylus">
    .product-item
        height: 260px
        padding: 20px 0
        position: relative
        float: left
        width: 234px
        margin-left: 14px
        margin-bottom: 14px
        transition: all .2s linear
        background-color: #fff
        &:hover
            box-shadow: 0 15px 30px rgba(0,0,0,0.1)
            transform: translate3d(0, -2px, 0)
            .link
                .comment
                    height: 76px
                    opacity: 1
        .link
            display: block
            .item-img
                width: 160px
                height: 160px
                margin: 0 auto 18px
                img
                    width: 160px
                    height: 160px
            .title
                margin: 0 10px 2px
                font-size: 14px
                font-weight: 400
                color: #333
                text-overflow: ellipsis
                white-space: nowrap
                overflow: hidden
            .subtitle
                margin: 0 10px 10px
                height: 18px
                font-size: 12px
                color: #b0b0b0
                text-overflow: ellipsis
                white-space: nowrap
                overflow: hidden
            .price
                margin: 0 10px 14px
                color: #ff6700
                del
                    color: #b0b0b0
            .flags
                background-color: #e53935
                position: absolute
                top: 0
                left: 50%
                width: 64px
                height: 20px
                margin-left: -32px
                font-size: 12px
                line-height: 20px
                color: #fff
            .comment
                position: absolute
                bottom: 0
                left: 0
                z-index: 3
                width: 234px
                height: 0
                overflow: hidden
                font-size: 12px
                background: #ff6700
                opacity: 0
                transition: all .2s linear
                .comment-content
                    display: block
                    padding: 8px 30px
                    color: #757575
                    .text
                        display: block
                        margin-bottom: 5px
                        color: #fff
                    .author
                        display: block
                        color: rgba(255,255,255,0.6)
                        text-overflow: ellipsis
                        white-space: nowrap
                        overflow: hidden
</style>
