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
                <li class="video-item fl" v-for="item of videos" @click="evtPlayVideo(item)">
                    <div class="item-img">
                        <a :href="item.videoUrl" class="link" target="_blank">
                            <img :src="item.imgUrl">
                            <span class="play"><i class="icon"></i></span>
                        </a>
                    </div>
                    <h3 class="title">
                        <a href="#">{{item.title}}</a>
                    </h3>
                    <p class="subtitle">{{item.desc}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                title: '视频',
                videos: [{
                    videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1ODg5ODA0MA==',
                    imgUrl: 'http://i3.mifile.cn/a4/73d67577-cbc7-4bd0-8678-4b1e95f4f4dc',
                    title: '红米年度品牌视频',
                    desc: '一亿人喜爱你，是一种责任。'
                },
                    {
                        videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1OTg3NjQ4OA==',
                        imgUrl: 'http://i3.mifile.cn/a4/f7e434fb-8ce4-4442-bf78-0d66e409dfc3',
                        title: '小米笔记本Air最全介绍视频',
                        desc: '带独立显卡的轻薄笔记本'
                    },
                    {
                        videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTY1OTg4NjY0OA==',
                        imgUrl: 'http://i3.mifile.cn/a4/e2df3ad8-4147-44e1-8a54-b6bcafdc6c66',
                        title: '小米笔记本Air可靠性测试视频',
                        desc: '小米笔记本Air是如何炼成的？'
                    },
                    {
                        videoUrl: 'http://hd.mi.com/f/zt/hd/misc/youku.html?vid=XMTU2NDM3NjEzMg==',
                        imgUrl: 'http://i3.mifile.cn/a4/T1v3LgBTxv1RXrhCrK.jpg',
                        title: '小米Max 绝美外观视频',
                        desc: '6.44" 大屏黄金尺寸，看什么都震撼'
                    }]
            }
        },
        methods: {
            evtPlayVideo (opts) {
                let videoOpt = {
                    status: true,
                    title: opts.title,
                    videoUrl: opts.videoUrl
                };
                this.$dispatch('play', videoOpt)
            }
        },
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
