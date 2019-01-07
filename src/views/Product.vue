<template>
    <div class="product-detail">
        <xm-header class="header-box" :nav-banner="navBannerStyle"></xm-header>

    </div>
</template>

<script>
    export default {
        name: "product",
        data(){
            return {
                navBannerStyle:'visible',
            }
        },
        methods:{
            getUrl(){
                console.log(this.$route)
            }
        },
        created(){
            this.getUrl();
        }
    }
</script>

<style scoped lang="stylus">

</style>
