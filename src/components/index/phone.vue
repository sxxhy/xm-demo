<template>
    <div class="app-phone">
        <phone-container></phone-container>
    </div>
</template>

<script>
    import phoneContainer from './container'
    export default {
        components:{
            phoneContainer
        }
    }
</script>

<style lang="stylus">
    .app-phone
        background: #f5f5f5
</style>