<template>
  <div class="app-home">
      <!--头部组件-->
      <xm-header></xm-header>
      <!--轮播及菜单组件-->
      <div class="menu-banner content">
          <!--轮播组件-->
          <xm-banner></xm-banner>
          <!--菜单组件-->
          <xm-menu></xm-menu>
          <!--广告列表-->
          <xm-banner-list></xm-banner-list>
    </div>
      <!--小米闪购组件-->
      <xm-flash-purchase></xm-flash-purchase>
      <!--广告组件-->
      <xm-index-banner :banner-item="indexBanner[0]"></xm-index-banner>
      <!--手机列表组件-->
      <div class="bg">
          <xm-index-phone></xm-index-phone>
          <!--商品分类信息组件-->
          <div class="content" v-for="(classItem,i) of classList" :id="classItem.id">
              <xm-index-banner :banner-item="indexBanner[i+1]"></xm-index-banner>
              <xm-home-electric :product-list="classItem" :left-banner="leftBanner[i]" :lid="i"></xm-home-electric>
          </div>
          <xm-index-banner :banner-item="indexBanner[indexBanner.length-1]"></xm-index-banner>
          <!--推荐商品组件-->
          <xm-recommend></xm-recommend>
          <!--热门评价组件-->
          <xm-hot-review></xm-hot-review>
          <!--内容组件-->
          <xm-various></xm-various>
          <!--主页视频组件-->
          <xm-home-video></xm-home-video>
      </div>
          <!--网页底部-->
          <xm-footer></xm-footer>

  </div>
</template>

<script>
import banner from '../components/index/banner';
import bannerList from '../components/index/bannerList';
import flashPurchase from '../components/index/FlashPurchase';
import indexPhone from '../components/index/phone';
import indexBanner from '../components/index/indexBanner';
import homeElectric from '../components/index/homeElectric';
import recommend from '../components/index/recommend';
import hotReview from '../components/index/hotReview';
import various from '../components/index/various';
import homeVideo from '../components/index/video';
  export default {
    data(){
      return{
          indexBanner: ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/7.jpg'],
          classList: [{id:'homeElectric',name: '家电',list: ['热门','电视影音','电脑','家居']},
                    {id:'intelligence',name: '智能',list: ['热门','出行','健康','酷玩','路由器']},
                    {id:'collocation',name: '搭配',list: ['热门','耳机音箱','电源','电池存储卡']},
                    {id:'parts',name: '配件',list: ['热门','保护套','贴膜','其他配件']},
                    {id:'periphery',name: '周边',list: ['热门','出行','居家','生活周边','箱包']}],
          leftBanner: [['img/9.jpg','img/10.jpg'],['img/11.jpg','img/12.jpg'],['img/13.jpg','img/14.jpg'],['img/15.jpg','img/16.jpg'],['img/17.jpg','img/18.jpg']]
      }
    },
    methods:{

    },
    components:{
      xmBanner: banner,
      xmBannerList: bannerList,
      xmFlashPurchase: flashPurchase,
      xmIndexPhone: indexPhone,
      xmIndexBanner: indexBanner,
      xmHomeElectric: homeElectric,
      xmRecommend: recommend,
      xmHotReview: hotReview,
      xmVarious: various,
      xmHomeVideo: homeVideo
    }
  }  
</script>
<style lang="stylus" scoped>
    .menu-banner
        position: relative
    .bg
        background-color: #f5f5f5
        padding-bottom: 60px
</style>