<template>
    <div class="hot-review content">
        <div class="review-header">
            <h2 class="title">{{title}}</h2>
        </div>
        <div class="review-content">
            <ul class="list clearfix">
                <li class="item" v-for="item of hots">
                    <div class="item-img">
                        <a :href="item.sourceUrl" class="link"><img :src="item.imageUrl"></a>
                    </div>
                    <p class="review">
                        <a href="#" class="link">{{item.review}}</a>
                    </p>
                    <p class="author"> 来自于 {{item.author}} 的评价 </p>
                    <div class="info">
                        <h3 class="title">
                            <a href="#" class="link">{{item.name}}</a>
                        </h3>
                        <span>|</span>
                        <p class="price">{{item.price}}元</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: '热评产品',
                hots: [
                    {sourceUrl: 'http://www.mi.com/carair/', imageUrl: 'https://i1.mifile.cn/a4/xmad_15094337975564_BSRIq.jpg', review: '外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价比高。附图，给客服妹子一个大...', author: 'showen', name: '米家车载空气净化器（USB车充版） 灰色', price: '389'},
                    {sourceUrl: 'http://www.mi.com/dianfanbao/', imageUrl: 'https://i1.mifile.cn/a4/54e35fdd-bc68-4a89-bad7-c9c3bb2fc6fe', review: '包装很让人感动，式样也很可爱，做出的饭全家人都爱吃，超爱五星！手机控制还是不太熟练，最主要是没有连接...', author: '18291588119', name: '米家压力IH电饭煲', price: '850'},
                    {sourceUrl: 'http://www.mi.com/locatephone/', imageUrl: 'https://i1.mifile.cn/a4/97d80b35-152e-4934-af34-402251458e16', review: '非常好用，孩子使用防止沉迷于电话影响学习。做工很好，定位基本准确，通话清晰。如果加入时间显示就更完美...', author: '18291588119', name: '米兔定位电话', price: '159'},
                    {sourceUrl: 'http://www.mi.com/powerstrip/', imageUrl: 'https://i1.mifile.cn/a4/aa6b038a-2946-4549-acff-17c58e701556', review: '东西真心不错，用过最好用的插线板，做工外观没得挑剔，3个USB接口很实用，充电快，建议不包邮的应该在...', author: '18291588119', name: '小米插线板', price: '49'}
                ]
            }
        },
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
