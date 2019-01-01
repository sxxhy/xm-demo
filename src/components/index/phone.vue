<template>
    <div class="app-phone">
        <phone-container></phone-container>
    </div>
</template>

<script>
    import PhoneContainer from './Container'
    export default {
        components:{
            PhoneContainer
        }
    }
</script>

<style lang="stylus">
    .app-phone
        background: #f5f5f5
</style>
