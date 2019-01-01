<template>
    <div class="product-container content">
        <input type="hidden" disabled v-model="lid" class="pcid">
        <div class="container-header">
            <h2 class="title">{{productList.name}}</h2>
            <div class="more">
                <ul class="list">
                    <li class="item" v-for="listItem of productList.list" @mouseenter="setListInfo($event)">{{listItem}}</li>
                </ul>
            </div>
        </div>
        <div class="product-content clearfix">
            <div class="advertice">
                <a href="#" class="link">
                    <img :src="leftBanner[0]">
                </a>
                <a href="#" class="link">
                    <img :src="leftBanner[1]">
                </a>
            </div>
            <div class="product-list">
                <ul class="list" v-for="(item,i) of productList.list">
                    <product-item v-for="item of listInfo.slice(0,listInfo.length-1)" :list-info="item"></product-item>
                    <li class="last-product fl">
                        <div class="item-img">
                            <a href="#" class="link">
                                <img :src="smallItem.p_img_url">
                            </a>
                        </div>
                        <h3 class="title"><a href="#">{{smallItem.p_title}}</a></h3>
                        <p class="price"><span>{{smallItem.p_price}}元</span></p>
                    </li>
                    <li class="browse-more fl">
                        <div class="more-icon">
                            <a href="#" class="link">
                                <i class="icon"></i>
                            </a>
                        </div>
                        <a href="#" class="more">
                            浏览更多
                            <small>家居</small>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductItem from './ProductItemHover';
    import '../../assets/js/productList';
    export default {
        data(){
            return{
                list: [],
                listInfo:[],
                smallItem:[],
            }
        },
        components:{
            ProductItem
        },
        methods:{
            getProductList(){
                let pcid = parseInt(this.lid)+1;
                this.$http.get('productlist?pcid='+pcid).then(res=>{
                    console.log(res);
                    this.list = res.body.data;
                    this.listInfo = res.body.data.slice(0,8);
                    this.smallItem = this.listInfo[7];
                })
            },
            setListInfo(e){
                let index = $(e.target).index();
                if (index != 0){
                    this.listInfo = this.list.slice(index*8,(index+1)*8);
                    this.smallItem = this.listInfo[this.listInfo.length-1];
                } else {
                    this.listInfo = this.list.slice(0,8);
                    this.smallItem = this.listInfo[7];
                }
            }
        },
        created(){
            this.getProductList()
        },
        mounted(){

        },
        props: ['productList','leftBanner','lid']
    }
</script>

<style lang="stylus">
    .product-container
        height: 686px
        margin-bottom: 8px
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
                .list
                    margin: 0
                    padding-top: 16px
                    font-size: 16px
                    .item
                        margin-left: 30px
                        display: inline-block;
                        padding: 0
                        border-bottom: 2px solid transparent
                        cursor: pointer
                        transition: border-color .5s
                        &:first-child
                            color: #ff6700
                            border-bottom: 2px solid #ff6700
        .product-content
            .advertice
                width: 234px
                float: left
                height: 614px
                margin-right: 14px
                .link
                    display: block
                    height: 300px
                    margin-bottom: 14px
                    position: relative
                    float: left
                    width: 234px
                    transition: all .2s linear
                    &:last-child
                        margin-bottom: 0
                    img
                        height: 300px
                        width: 234px
                    &:hover
                        box-shadow: 0 15px 30px rgba(0,0,0,0.1)
                        transform: translate3d(0, -2px, 0)
            .product-list
                width: 978px
                float: left
                text-align: center
                .list
                    height: 614px
                    width: 992px
                    margin: 0 0 -14px -14px
                    display: none
                    &:first-child
                        display: block
                    .last-product,.browse-more
                        height: 93px
                        padding-top: 50px
                        position: relative
                        width: 234px
                        text-align: left
                        margin-left: 14px
                        margin-bottom: 14px
                        background-color: #fff
                        transition: all .2s linear
                        &:hover
                            box-shadow: 0 15px 30px rgba(0,0,0,0.1)
                            transform: translate3d(0, -2px, 0)
                    .last-product
                        .item-img
                            position: absolute
                            right: 20px
                            top: 32px
                            width: 80px
                            height: 80px
                            .link
                                display: block
                                img
                                    width: 80px
                                    height: 80px
                        .title
                            margin: -10px 110px 5px 30px
                            font-size: 14px
                            font-weight: 400
                            white-space: nowrap
                            overflow: hidden
                            text-overflow: ellipsis
                            a
                                color: #333
                        .price
                            margin: 0 110px 0 30px
                            font-size: 12px
                            color: #ff6700
                    .browse-more
                        .more-icon
                            position: absolute
                            right: 35px
                            top: 48px
                            width: 48px
                            height: 48px
                            font-size: 40px
                            .link
                                display: block
                                color: #ff6700
                        .more
                            display: block
                            margin: 0 110px 0 30px
                            font-size: 18px
                            color: #333
                            small
                                display: block
                                font-size: 12px
                                color: #757575
</style>
