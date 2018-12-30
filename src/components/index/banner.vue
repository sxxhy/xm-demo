<template>
    <div class="app-banner">
        <div class="banner-content">
            <a href="#" class="banner-img" v-for="item of banner">
                <img :src="item.img_url">
            </a>
        </div>
        <a href="javascript:;" class="slide-left"></a>
        <a href="javascript:;" class="slide-right"></a>
        <div class="slide-spot">
            <a href="javascript:;" class="spot-item" v-for="item of banner"></a>
        </div>
    </div>
</template>

<script>
    import '../../lib/js/banner';
    export default {
        data(){
            return {
                banner: [],
            }
        },
        methods:{
            getBanner(){
                this.$http.get('indexBanner').then(res=>{
                    this.banner = res.body.data;
                })
            }
        },
        created(){
            this.getBanner();
        }
    }
</script>

<style lang="stylus">
    .app-banner
        position: relative
        z-index: 10
        .banner-content
            position: relative
            height: 460px
            overflow: hidden
            .banner-img
                display: block
                position: absolute
                img
                    width: 100%
                    height: 460px
                    display: block
        .slide-left,.slide-right
            display: block
            background: url("../../lib/images/icon-slides.png")
            position: absolute
            z-index: 20
            width: 41px
            height: 69px
            top: 50%
            margin-top: -34px
        .slide-left
            background-position: -83px
            left: 234px
            &:hover
                background-position: 0
        .slide-right
            background-position: -124px
            right: 0
            &:hover
                background-position: -42px
        .slide-spot
            position: absolute
            width: 300px
            right: 30px
            bottom: 20px
            z-index: 20
            text-align: right
            .spot-item
                display: inline-block
                width: 6px
                height: 6px
                border-radius: 10px
                transition: all .2s
                border: 2px solid rgba(255,255,255,0.3)
                margin: 0 5px
                background: rgba(0,0,0,0.4)
                &:hover
                    background: rgba(255,255,255,0.4)
                    border-color: rgba(0,0,0,0.4)
                &.active
                    background: rgba(255,255,255,0.4)
                    border-color: rgba(0,0,0,0.4)
</style>