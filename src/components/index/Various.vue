<template>
    <div class="various content">
        <div class="various-header">
            <h2 class="title">{{title}}</h2>
        </div>
        <div class="various-content">
            <ul class="list clearfix">
                <li class="item" v-for="item of contents">
                    <h2 class="title">{{item.title}}</h2>
                    <div class="slide">
                        <ul class="slide-list">
                            <li class="slide-item fl" v-for="item of item.list">
                                <h4 class="title">
                                    <a :href="item.sourceUrl">{{item.title}}</a>
                                </h4>
                                <p class="subtitle">
                                    <a href="#">{{item.desc}}</a>
                                </p>
                                <p class="price">
                                    <a href="#">{{item.price}}</a>
                                </p>
                                <div class="item-img">
                                    <a href="#"><img :src="item.imgUrl"></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="spot">
                        <ul class="spot-list">
                            <li class="spot-item active" v-for="item of contents[0].list">
                                <span class="spot-slide"></span>
                            </li>
                        </ul>
                    </div>
                    <div class="switch">
                        <a href="javascript:;" class="prev icon"></a>
                        <a href="javascript:;" class="next icon"></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                currPage: 0,
                title: '内容',
                contents: [
                    {
                        title: '图书',
                        type: 'book',
                        list: [
                            {sourceUrl: 'http://www.duokan.com/book/115222', title: '哈利·波特与被诅咒的孩子', desc: '“哈利·波特”第八个故事中文版震撼来袭！特别彩排版剧本！ ', price: '27.39', imgUrl: 'https://i1.mifile.cn/a4/5e5da924-84e3-4959-9e25-5891cdf30757', type: 0},
                            {sourceUrl: 'http://www.duokan.com/special/7812', title: '好吗好的', desc: '畅销作家大冰2016年新书！讲给你听，好吗好的！', price: '17.99', imgUrl: 'https://i1.mifile.cn/a4/61e1385e-54de-48f3-8717-5e4f4b1cdd14', type: 1},
                            {sourceUrl: 'http://www.duokan.com/list/1-1?from=xiaomi', desc1: '海量好书，享受精品阅读时光', desc2: '漂亮的中文排版，千万读者选择！', btnTxt: '前往多看阅读', price: '限时优惠', imgUrl: '//s01.mifile.cn/i/index/more-duokan.jpg', type: 2}
                        ]
                    },
                    {
                        title: 'MIUI主题',
                        type: 'theme',
                        list: [
                            {sourceUrl: 'http://zhuti.xiaomi.com/detail/4ecf4ebb-7cba-4142-96aa-6b8deb2426ef', title: '新世纪福音战士OL', desc: 'EVA手游正版授权，同名主题，高能来袭！', price: '免费', imgUrl: 'http://i3.mifile.cn/a4/7d47dde1-60fb-4ff3-8fa1-364cfc452457', type: 1},
                            {sourceUrl: 'http://zhuti.xiaomi.com/detail/d6277519-ca46-420c-ab09-060f6d293f94', title: '世界就在这里', desc: '“青春的世界里，每一刻都要用尽全力欢呼”', price: '免费', imgUrl: 'http://i3.mifile.cn/a4/b2c8ca37-4ba8-4af8-b87e-91847980a278', type: 1},
                            {sourceUrl: 'http://zhuti.xiaomi.com/detail/13df18d4-e52c-4a61-82e3-97014f21bd77', title: '不悔剑三', desc: '精品剑网三同人主题 浪漫武侠 共闯天涯', price: '3米币', imgUrl: 'http://i3.mifile.cn/a4/10af68f9-3012-48bb-85b1-ad3b0646dfdb', type: 1},
                            {sourceUrl: 'http://zhuti.xiaomi.com/?from=mi', desc1: '众多个性主题、百变锁屏与自由桌面', desc2: '让你的手机与众不同！', btnTxt: '前往MIUI主题市场', price: '限时优惠', imgUrl: '//s01.mifile.cn/i/index/more-duokan.jpg', type: 2}
                        ]
                    },
                    {
                        title: '游戏',
                        type: 'game',
                        list: [
                            {sourceUrl: 'http://ljm.mi.com/?channel=meng_1084_1_android', title: '老九门', desc: '盗墓笔记前传上线', price: '免费', imgUrl: 'http://i3.mifile.cn/a4/6032cb36-587f-4366-89ef-aefed2546552', type: 1},
                            {sourceUrl: 'http://game.xiaomi.com/miyou/index.html', title: '米柚手游模拟器', desc: '在电脑上玩遍小米所有手游', price: '免费', imgUrl: '//i3.mifile.cn/a4/T1czW_BXCv1R4cSCrK.png', type: 1},
                            {sourceUrl: 'http://game.xiaomi.com/app-appdetail--app_id__581412.html', title: '剑侠情缘', desc: '玩剑侠情缘手游，领666壕礼！！', price: '免费', imgUrl: 'http://i3.mifile.cn/a4/010948ae-bd48-49c6-af12-4ec8c4a0c829', type: 1},
                            {sourceUrl: 'http://game.xiaomi.com/index.php?c=index&a=run', desc1: '免费下载海量的手机游戏', desc2: '天天都有现金福利赠送', btnTxt: '前往小米游戏商店', price: '限时优惠', imgUrl: '//s01.mifile.cn/i/index/more-game.jpg', type: 2}
                        ]
                    },
                    {
                        title: '应用',
                        type: 'app',
                        list: [
                            {sourceUrl: 'http://app.mi.com/subject/168797', title: '2015年度应用', desc: '2015年度应用', price: '免费', imgUrl: '//i3.mifile.cn/a4/T1YyJgBCYv1R4cSCrK.png', type: 1},
                            {sourceUrl: 'http://app.mi.com/subject/168798', title: '2015年度游戏', desc: '2015年度游戏', price: '免费', imgUrl: '//i3.mifile.cn/a4/T1eaxgB4Ev1R4cSCrK.png', type: 1},
                            {sourceUrl: 'http://app.mi.com/subject/167924', title: '小米应用', desc: '小米出品 必属精品', price: '免费', imgUrl: '//i3.mifile.cn/a4/T15VZvB5Kv1R4cSCrK.png', type: 1},
                            {sourceUrl: 'http://app.mi.com/?from=mi', desc1: '帮助小米手机和其他安卓手机用户', desc2: '发现好用的安卓应用', btnTxt: '前往小米应用商店', price: '限时优惠', imgUrl: '//s01.mifile.cn/i/index/more-app.jpg', type: 2}
                        ]
                    }]
            }
        },
        methods:{

        }
    }
</script>

<style lang="stylus">
    .various
        background-color: #f5f5f5
        position: relative
        margin-bottom: 22px
        .various-header
            margin-top: 10px
            position: relative
            height: 58px
            line-height: 58px
            .title
                font-size: 22px
                font-weight: 200
                height: 58px
        .various-content
            .list
                width: 1240px
                height: 420px
                text-align: center
                .item
                    position: relative
                    float: left
                    width: 296px
                    height: 374px
                    padding: 45px 0 0
                    margin-bottom: 14px
                    margin-left: 14px
                    border-top: 1px solid #ffac13
                    background: #fff
                    transition: all .2s linear
                    &:hover
                        box-shadow: 0 15px 30px rgba(0,0,0,0.1)
                        transform: translate3d(0, -2px, 0)
                        .switch
                            .prev,.next
                                opacity: 1
                    &:first-child
                        margin-left: 0
                    .title
                        margin: 0 10px 18px
                        font-size: 16px
                        font-weight: 400
                    .slide
                        height: 340px
                        overflow: hidden
                        .slide-list
                            width: 1184px
                            height: 340px
                            margin-left: 0px
                            transition: margin-left 0.5s ease
                            overflow: hidden
                            .slide-item
                                width: 296px
                                height: 340px
                                .title
                                    margin: 0 20px 5px
                                    font-size: 20px
                                    font-weight: 400
                                    line-height: 1.25
                                    a
                                        display: block;
                                        text-overflow: ellipsis
                                        white-space: nowrap
                                        overflow: hidden
                                        color: #333
                                .subtitle
                                    margin: 0 48px 10px
                                    height: 40px
                                    font-size: 12px
                                    line-height: 20px
                                    overflow: hidden
                                    color: #b0b0b0
                                    a
                                        color: #b0b0b0
                                .price
                                    height: 21px
                                    margin: 0 10px 15px
                                    a
                                        color: #333
                                .item-img
                                    width: 216px
                                    height: 154px
                                    margin: 0 auto
                                    a
                                        display: block
                                        height: 154px
                                        img
                                            width: 216px
                                            height: 154px
                    .spot
                        position: absolute
                        bottom: 15px
                        left: 0
                        width: 296px
                        .spot-list
                            .spot-item
                                display: inline-block
                                width: 10px
                                height: 10px
                                padding: 10px
                                margin: 0 2px
                                cursor: pointer
                                &:hover
                                    .spot-slide
                                        background-color: #ff6700
                                &.active
                                    cursor: default
                                    .spot-slide
                                        border-color: #ff6700
                                        background-color: transparent
                                .spot-slide
                                    display: block
                                    width: 6px
                                    height: 6px
                                    border: 2px solid #f5f5f5
                                    border-radius: 6px
                                    text-align: left
                                    overflow: hidden
                                    background-color: #b0b0b0
                                    transition: all .5s
                    .switch
                        .prev,.next
                            width: 20px
                            height: 24px
                            padding: 12px 0
                            font-size: 18px
                            line-height: 24px
                            position: absolute
                            top: 50%
                            margin-top: -20px
                            opacity: 0
                            transition: all .6s
                            display: inline-block
                            color: #fafafa
                            background-color: rgba(66,66,66,0.2)
                            &:hover
                                background-color: rgba(66,66,66,0.6)
                        .prev
                            left: 0
                        .next
                            right: 0
</style>
