<template>
    <div class="app-banner-list clearfix">
        <div class="member-list fl">
            <ul class="list">
                <li class="item right">
                    <a href="javascript:;" class="link">
                        <i class="icon"></i>
                        选购手机
                    </a>
                </li>
                <li class="item right">
                    <a href="javascript:;" class="link">
                        <i class="icon"></i>
                        选购手机
                    </a>
                </li>
                <li class="item">
                    <a href="javascript:;" class="link">
                        <i class="icon"></i>
                        选购手机
                    </a>
                </li>
                <li class="item right top">
                    <a href="javascript:;" class="link">
                        <i class="icon"></i>
                        选购手机
                    </a>
                </li>
                <li class="item right top">
                    <a href="javascript:;" class="link">
                        <i class="icon"></i>
                        选购手机
                    </a>
                </li>
                <li class="item top">
                    <a href="javascript:;" class="link">
                        <i class="icon"></i>
                        选购手机
                    </a>
                </li>
            </ul>
        </div>
        <div class="banner-list fl">
            <div class="banner-item">
                <a href="javascript:;" class="link">
                    <img src="../../lib/images/banner/6.jpg">
                </a>
            </div>
            <div class="banner-item ml">
                <a href="javascript:;" class="link">
                    <img src="../../lib/images/banner/7.jpg">
                </a>
            </div>
            <div class="banner-item ml">
                <a href="javascript:;" class="link">
                    <img src="../../lib/images/banner/8.jpg">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                bannerList: ['','../../lib/images/banner/6.jpg',
                    '../../lib/images/banner/6.jpg'],
            }
        }
    }
</script>

<style lang="stylus">
    .app-banner-list
        margin: 14px 0 26px
        .member-list
            width: 234px
            padding: 3px
            font-size: 12px
            text-align: center
            background: #5f5750
            .item
                display: block
                position: relative
                float: left
                width: 70px
                height: 82px
                padding: 0 3px
                .link
                    display: block
                    padding-top: 18px
                    text-overflow: ellipsis
                    white-space: nowrap
                    overflow: hidden
                    color: rgba(255,255,255,0.7)
                    transition: color .2s
                    .icon
                        display: block
                        height: 24px
                        margin-bottom: 4px
                        font-size: 24px
                        line-height: 24px
                    &:hover
                        color: #fff
                &.right::after
                    position: absolute
                    content: ""
                    background: #665e57
                    top: 6px
                    right: 0
                    width: 1px
                    height: 70px
                &.top::before
                    top: -1px
                    left: 6px
                    width: 64px
                    height: 1px
                    position: absolute
                    content: ""
                    background: #665e57
        .banner-list
            width: 978px
            margin-left: 8px
            .banner-item
                float: left
                width: 316px
                height: 170px
                &.ml
                    margin-left: 15px;
                .link
                    display: block
                    img
                        width: 316px
                        height: 170px
</style>