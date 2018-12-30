<template>
    <div class="app-recommend content">
        <div class="recommend-header">
            <h2 class="title">为你推荐</h2>
            <div class="more">
                <a href="javascript:;" class="link prev disabled">
                    <i class="icon"></i>
                </a>
                <a href="javascript:;" class="link next">
                    <i class="icon"></i>
                </a>
            </div>
        </div>
        <div class="recommend-content clearfix">
            <div class="product-content fl">
                <ul class="list clearfix" ref="recommend">
                    <li class="item fl" v-for="item of recommend">
                        <dl>
                            <dt>
                                <a href="#" class="link">
                                    <img :src="item.p_img_url">
                                </a>
                            </dt>
                            <dd class="recommend-title">
                                <a href="#"> {{item.pname}} </a>
                            </dd>
                            <dd class="price">{{item.p_price}}元</dd>
                            <dd class="recommend-tips">{{parseInt(Math.random()*1000)+1}}人好评</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../lib/js/recommend';
    export default {
        data(){
            return{
                recommend: [],
            }
        },
        methods:{
            recommendInfo(){
                this.$http.get('recommend').then(res=>{
                    this.recommend = res.body;
                    this.$refs.recommend.style.width = this.recommend.length*248 + 'px';
                })
            }
        },
        created(){
            this.recommendInfo();
        }
    }
</script>

<style lang="stylus">
    .app-recommend
        background-color: #f5f5f5
        position: relative
        .recommend-header
            position: relative
            height: 58px
            .title
                font-size: 22px
                font-weight: 200
                line-height: 58px
            .more
                position: absolute
                top: 24px
                right: 0
                .link
                    width: 24px
                    height: 16px
                    padding: 3px 5px
                    border: 1px solid #e0e0e0
                    font-size: 16px
                    line-height: 16px
                    color: #b0b0b0
                    transition: color .3s
                    text-align: center
                    &:hover
                        color: #ff6700
                    &.disabled
                        color: #e0e0e0
                        cursor: default
        .recommend-content
            height: 320px
            overflow: hidden
            position: relative
            width: 100%
            .list
                width: 4960px
                transition: margin-left 0.5s ease
                text-align: center
                font-size: 14px
                .item
                    transition: all 0.2s linear
                    margin-right: 14px
                    margin-bottom: 14px
                    width: 234px
                    height: 300px
                    background-color: #fff
                    position: relative
                    &:hover
                        box-shadow: 0 15px 30px rgba(0,0,0,0.1)
                        transform: translate3d(0, -2px, 0)
                    dt
                        padding: 40px 0 15px
                        height: 145px
                        .link img
                            width: 140px
                            height: 140px
                    .recommend-title
                        margin-bottom: 10px
                        height: 18px
                        text-overflow: ellipsis
                        white-space: nowrap
                        overflow: hidden
                        a
                            color: #333
                    .price
                        margin-bottom: 10px
                        color: #ff6700
                    .recommend-tips
                        color: #757575
</style>