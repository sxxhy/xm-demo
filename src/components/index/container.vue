<template>
    <div class="phone-container content">
        <div class="container-header">
            <h2 class="title">手机</h2>
            <div class="more">
                <a href="#" class="link">
                    查看更多
                    <i class="icon"></i>
                </a>
            </div>
        </div>
        <div class="phone-content clearfix">
            <div class="advertice">
                <a href="#" class="link">
                    <img src="../../lib/images/pc_index/1.jpg">
                </a>
            </div>
            <div class="phone-list">
                <ul class="list">
                    <product-item v-for="(item,i) of result1" :phone-info="item" :phone-price="result2[i]" :key="item.sid"></product-item>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import productItem from './productItem'
    export default {
        data(){
            return{
                result1:[],
                result2:[]
            }
        },
        methods:{
            getPhoneInfo(){
                this.$http.get('getphoneinfo').then(res=>{
                    console.log(res);
                    this.result1=res.body.result1;
                    this.result2=res.body.result2
                })
            }
        },
        created(){
            this.getPhoneInfo()
        },
        components:{
            productItem
        }
    }
</script>

<style lang="stylus">
.app-phone
    margin-bottom: 8px
    .phone-container
        height: 686px
        .container-header
            position: relative
            height: 58px
            .title
                font-size: 22px
                font-weight: 200
                line-height: 58px
            .more
                position: absolute
                top: 0
                right: 0
                .link
                    font-size: 16px
                    color: #424242
                    line-height: 58px
                    transition: all .4s
                    &:hover
                        color: #ff6700
                    .icon
                        font-size: 18px
                        vertical-align: -2px
        .phone-content
            .advertice
                width: 234px
                float: left
                height: 614px
                margin: 0 14px -14px 0
                .link
                    display: block
                    height: 614px
                    position: relative
                    float: left
                    width: 234px
                    transition: all .2s linear
                    img
                        height: 614px
                        width: 234px
                    &:hover
                        box-shadow: 0 15px 30px rgba(0,0,0,0.1)
                        transform: translate3d(0, -2px, 0)
            .phone-list
                width: 978px
                float: left
                text-align: center
                .list
                    height: 614px
                    width: 992px
                    margin: 0 0 -14px -14px

</style>