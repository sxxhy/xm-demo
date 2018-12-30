<template>
    <div class="home-video content">
        <div class="container-header">
            <h2 class="title">视频</h2>
            <div class="more">
                <a href="#" class="link">
                    查看更多
                    <i class="icon"></i>
                </a>
            </div>
        </div>
        <div class="video-content">
            <ul class="video-list clearfix">
                <li class="video-item fl" v-for="item of 4">
                    <div class="item-img">
                        <a href="#" class="link">
                            <img src="">
                            <span class="play"><i class="icon"></i></span>
                        </a>
                    </div>
                    <h3 class="title">
                        <a href="#">一团火</a>
                    </h3>
                    <p class="subtitle">小米创业8年内部纪录片（手机篇）</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {

    }
</script>

<style lang="stylus">
        .home-video
            .container-header
                position: relative
                height: 58px
                .title
                    margin-top: 10px
                    font-size: 22px
                    font-weight: 200
                    height: 58px
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
            .video-content
                .video-list
                    width: 1240px
                    height: 285px
                    text-align: center
                    .video-item
                        position: relative
                        width: 296px
                        height: 285px
                        margin-left: 14px
                        margin-bottom: 14px
                        background: #fff
                        transition: all .2s linear
                        &:first-child
                            margin-left: 0
                        &:hover
                            box-shadow: 0 15px 30px rgba(0,0,0,0.1)
                            transform: translate3d(0, -2px, 0)
                        .item-img
                            position: relative
                            width: 296px
                            height: 180px
                            margin: 0 0 28px
                            .link
                                display: block
                                height: 180px
                                &:hover
                                    .play
                                        border-color: #ff6700
                                        background-color: #ff6700
                                img
                                    width: 296px
                                    height: 180px
                                .play
                                    position: absolute;
                                    left: 20px
                                    bottom: 10px
                                    width: 32px
                                    height: 20px
                                    border: 2px solid #fff
                                    border-radius: 12px
                                    background-color: rgba(0,0,0,0.6)
                                    transition: all .2s
                                    overflow: hidden
                                    .icon
                                        font-size: 16px
                                        line-height: 20px
                                        color: #fff
                        .title
                            margin: 0 0 6px
                            font-size: 14px
                            font-weight: 400
                            a
                                color: #333
                                &:hover
                                    color: #ff6700
                        .subtitle
                            height: 18px
                            margin: 0
                            font-size: 12px
                            color: #b0b0b0
</style>