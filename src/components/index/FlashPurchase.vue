<template>
    <div class="app-flash content">
        <div class="flash-header">
            <h2 class="flash-title">小米闪购</h2>
            <div class="more">
                <a href="javascript:;" class="link prev disabled">
                    <i class="icon"></i>
                </a>
                <a href="javascript:;" class="link next">
                    <i class="icon"></i>
                </a>
            </div>
        </div>
        <div class="flash-content clearfix">
            <div class="flash-active fl">
                <div class="time">{{hour}}:00 场</div>
                <img src="../../assets/images/flash.png">
                <div class="distance">距离结束还有</div>
                <div class="count-down clearfix">
                    <div class="fl box">00</div>
                    <div class="fl spot">:</div>
                    <div class="fl box">00</div>
                    <div class="fl spot">:</div>
                    <div class="fl box">00</div>
                </div>
            </div>
            <div class="product-content fl">
                <ul class="list clearfix" ref="flash">
                    <li class="item" v-for="(item,i) of flashList" :style="{'border-top-color':flashColor[i]}">
                        <a href="#">
                            <div class="item-img">
                                <img :src="item.f_img" width="160px" height="160px">
                            </div>
                            <div class="item-title">{{item.f_title}}</div>
                            <p class="item-subtitle">{{item.f_subtitle}}</p>
                            <div class="price">
                                <span>{{item.f_price}} 元</span>&nbsp;
                                <del>{{item.f_original_price}}元</del>
                            </div>
                            <div class="flags" v-if="item.f_active">{{item.f_active}}</div>
                        </a>
                        <a href="#">
                            <div class="bgc"></div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../assets/js/flash';
    export default {
        data(){
            return {
                flashList: [],
                flashColor: ['#ffac13','#83c44e','#2196f3','#e53935','#00c0a5','#ffac13','#83c44e','#2196f3','#e53935','#00c0a5','#ffac13','#83c44e','#2196f3','#e53935','#00c0a5'],//上边框颜色
                hour:'',//时间
                countDown:new Date()//倒计时
            }
        },
        methods:{
            getFlashContent(){
                var timeId = new Date().getHours();
                if (timeId < 12 || timeId>20) {
                    this.hour='00';
                    timeId = 18;
                } else {
                    this.hour = timeId+2;
                }
                if (timeId % 2 != 0&&timeId>=12&&timeId<=18) {
                    timeId = timeId +1;
                    this.hour = timeId;
                }
                this.$http.get('flash?timeId='+timeId).then(res=>{
                    console.log(res);
                    this.flashList = res.body.data;
                    this.$refs.flash.style.width = (this.flashList.length) * (234+14) + 'px';
                })
            }
        },
        created() {
            this.getFlashContent();
        }
    }
</script>

<style lang="stylus">
    .app-flash
        position: relative
        .flash-header
            position: relative
            height: 58px
            .flash-title
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
        .flash-content
            position: relative
            overflow: hidden
            height: 340px
            .flash-active
                border-top: 1px solid #e53935
                width: 234px
                height: 340px
                background: #f1eded;
                text-align: center;
                box-sizing: border-box
                .time
                    margin-top: 54px
                    font-size: 21px
                    color: #ef3a3b
                img
                    margin: 25px auto
                .distance
                    color: rgba(0,0,0,0.54)
                    font-size: 15px
                .count-down
                    width: 168px
                    margin: 28px auto 0
                    .box
                        width: 46px
                        height: 46px
                        background: #605751
                        color: #fff
                        font-size: 24px
                        line-height: 46px
                    .spot
                        width: 15px
                        float: left
                        height: 46px
                        line-height: 46px
                        color: #605751
                        font-size: 28px
            .product-content
                width: 992px
                height: 340px
                overflow: hidden
                .list
                    margin-left: 0px
                    transition: margin-left 0.5s ease
                    .item
                        border-top: 1px solid #ffac13
                        position: relative
                        float: left
                        width: 234px
                        height: 300px
                        padding-top: 39px
                        text-align: center
                        margin-left: 14px
                        .item-img
                            width: 160px
                            margin: 0 auto 22px
                        .item-title
                            margin: 0 20px 3px
                            font-size: 14px
                            font-weight: 400
                            text-overflow: ellipsis
                            white-space: nowrap
                            overflow: hidden
                            color: #212121
                        .item-subtitle
                            height: 18px
                            margin: 0 20px 12px
                            font-size: 12px
                            text-overflow: ellipsis
                            white-space: nowrap
                            overflow: hidden
                            color: #b0b0b0
                        .price
                            span:first-child
                                color: #ff6709
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
                            text-align: center
                            color: #fff
                        .bgc
                            background: rgba(0,0,0,0.02)
                            position: absolute
                            left: 0
                            top: 0
                            right: 0
                            bottom: 0
</style>
