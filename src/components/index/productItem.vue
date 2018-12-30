<template>
    <li class="product-item">
        <router-link :to="{path:'/product/'+phoneInfo.sid}" class="link">
            <div class="item-img">
                <img :src="phoneInfo.poster">
            </div>
            <div class="title">{{phoneInfo.sname}} {{phonePrice.edition}}</div>
            <div class="subtitle">{{phoneInfo.stitle}}</div>
            <div class="price">
                <span>{{phonePrice.price}}元</span>&nbsp;
                <del>{{phonePrice.original_price}}元</del>
            </div>
            <div class="flags" :style="{background:`${phonePrice.active.indexOf('新')==-1?'#e53935':'#83c44e'}`}">{{phonePrice.active}}</div>
        </router-link>
    </li>
</template>

<script>
    export default {
        props:['phoneInfo','phonePrice']
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
</style>