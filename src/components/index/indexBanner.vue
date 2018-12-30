<template>
    <div class="index-banner">
        <a href="#" class="link">
            <img :src="bannerItem">
        </a>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props: ['bannerItem'],//用于接收img的路径
    }
</script>

<style lang="stylus">
    .index-banner
        width: 1226px
        margin: 28px auto 22px
        height: 120px
        .link
            display: block
            img
                width: 1226px
</style>