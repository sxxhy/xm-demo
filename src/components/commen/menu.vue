<template>
    <div class="app-menu">
        <ul class="menu-list">
            <li class="menu-item" v-for="(item,index) of  menuList">
                <a href="javascript:;" class="item-link" @mouseenter="getMenuContent(index+1)">{{item}}
                    <i class="icon"></i>
                </a>
                <div class="item-content clearfix" ref="menuContent">
                    <ul class="content-list" v-for="list of menuContent">
                        <li class="content-list-item" v-for="item of list">
                            <a href="javascript:;" class="item-link">
                                <img :src="item.p_img_url" class="thumb" width="40px" height="40px">
                                <span class="text">{{item.p_name}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                menuList: ['手机 电话卡','电视 盒子','笔记本 平板','家电 插线板','出行 穿戴','智能 路由器','电源  配件','健康 儿童','耳机 音箱','生活 箱包'],
                menuContent: [],
            }
        },
        methods:{
            getMenuContent(menuId){
                this.$http.get('indexmenu?menuId='+menuId).then(res=>{
                    if (res.body.code == 1) {
                        var widthNum = Math.ceil(res.body.data.length/6);
                        this.$refs.menuContent[menuId-1].style.width = widthNum * 248 + 'px';
                        var menuContent = [];
                        for (var i = 0; i < widthNum; i++) {
                            var arr1 = res.body.data.splice(0,6);
                            menuContent[i] = arr1
                        }
                        this.menuContent = menuContent;
                    }
                })
            }
        }
    }
</script>

<style lang="stylus">
    .app-menu
        position: absolute
        width: 234px
        height: 460px
        font-size: 14px
        z-index: 21
        top: 0
        left: 0
        .menu-list
            height: 420px
            color: #fff
            background: rgba(0, 0, 0, 0.6)
            padding: 20px 0
            .menu-item
                &:hover
                    background: #ff6700
                    .item-content
                        display: block
                .item-link
                    position: relative
                    display: block
                    padding-left: 30px
                    height: 42px
                    line-height: 42px
                    color: #FFF
                    overflow: hidden
                    text-overflow: ellipsis
                    white-space: nowrap
                    .icon
                        color: rgba(255,255,255,0.5)
                        position: absolute
                        top: 12px
                        right: 20px
                        font-size: 16px
                        line-height: 16px
                .item-content
                    display: none
                    position: absolute
                    left: 234px
                    overflow: hidden
                    top: 0
                    z-index: 25
                    height: 458px
                    width: 992px
                    border: 1px solid #e0e0e0
                    border-left: 0
                    background-color: #fff
                    box-shadow: 0 8px 16px rgba(0,0,0,0.18)
                    .content-list
                        width: 248px
                        float: left
                        height: 458px
                        padding: 2px 0
                        .content-list-item
                            position: relative
                            float: left
                            width: 265px
                            height: 76px
                            .item-link
                                display: block
                                padding: 18px 20px
                                line-height: 40px
                                color: #333
                                transition: all .2s
                                &:hover
                                    color: #ff6700
                                .thumb
                                    margin-right: 12px
                                    vertical-align: middle
</style>