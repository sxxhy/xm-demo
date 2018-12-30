<template>
	<div class="header">
		<div class="header-top">
			<div class="content">
				<div class="header-left">
					<router-link class="nav-item" to="#">小米商城</router-link><span>|</span>
					<router-link class="nav-item" to="#">MIUI</router-link><span>|</span>
					<router-link class="nav-item" to="#">IoT</router-link><span>|</span>
					<router-link class="nav-item" to="#">云服务</router-link><span>|</span>
					<router-link class="nav-item" to="#">金融</router-link><span>|</span>
					<router-link class="nav-item" to="#">有品</router-link><span>|</span>
					<router-link class="nav-item" to="#">小爱开放平台</router-link><span>|</span>
					<router-link class="nav-item" to="#">政企服务</router-link><span>|</span>
					<router-link class="nav-item" to="#">资质证照</router-link><span>|</span>
					<router-link class="nav-item" to="#">协议规则</router-link><span>|</span>
					<router-link class="nav-item download-app" to="#">
						下载app
						<span class="download">
							<i class="down"></i>
							<img src="../../lib/images/header/download.png" width="90px" height="90px">
							<span>小米商城APP</span>
						</span>
					</router-link><span>|</span>
					<router-link class="nav-item" to="#">Select Region</router-link><span>|</span>
				</div>
				<div class="car fr">
					<router-link to="#" class="car-link">
						<i class="icon"></i>
						购物车
						<div class="cart-content">
							<div class="cart-tip">购物车中还没有商品，赶紧选购吧！</div>
						</div>
					</router-link>
				</div>
				<div class="header-right">
					<router-link class="login-item" to="#">登录</router-link><span>|</span>
					<router-link class="login-item" to="#">注册</router-link><span>|</span>
					<router-link class="login-item" to="#">消息通知</router-link>
				</div>
			</div>
		</div>
		<div class="header-nav clearfix">
			<div class="nav-content content clearfix">
				<div class="logo fl">
					<img src="../../lib/images/register/milogo.png" width="55px" height="55px" alt="logo" title="小米商城">
				</div>
				<div class="nav fl">
					<ul class="nav-list">
						<li class="navBanner">
							<a href="#" class="nav-link">全部商品分类</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link link-item" @mouseenter="getNavContent(1)">小米</a>
							<div class="nav-menu">
								<div class="content">
									<ul class="menu-list clearfix">
										<li class="menu-item" v-for="item of list">
											<div class="menu-img">
												<a href="#">
													<img :src="item.p_img_url" width="160px" height="110px">
												</a>
											</div>
											<div class="menu-title">
												<a href="#">{{item.p_name}}</a>
											</div>
											<p class="menu-price">{{item.p_price}}元起</p>
											<div class="flags">
												<div class="flags-text" v-if="item.p_active">{{item.p_active}}</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link link-item" @mouseenter="getNavContent(2)">红米</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link link-item" @mouseenter="getNavContent(3)">电视</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link link-item" @mouseenter="getNavContent(4)">笔记本</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link link-item" @mouseenter="getNavContent(5)">家电</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link link-item" @mouseenter="getNavContent(6)">新品</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link link-item" @mouseenter="getNavContent(7)">路由器</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link link-item" @mouseenter="getNavContent(8)">智能硬件</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link last-link">服务</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link last-link">社区</a>
						</li>
					</ul>
				</div>
				<div class="search fr">
					<div class="search-input">
						<input type="search" class="search-text">
						<button class="search-btn"><i class="icon"></i></button>
					</div>
					<div class="search-tip"></div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import '../../lib/js/header';
    export default {
        data(){
			return {
				navList:['红米','电视','笔记本','家电','新品','路由器','智能硬件'],//导航列表
				pcid: 1,
				list: [],
			}
		},
		methods:{
			getNavContent(num){
				this.$http.get('indexnav?nid='+num).then(res=>{
					var list = res.body.data.slice(0,6);
					this.list = list;
				})
			}
		},
		created(){
			
		}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.header-top
		position: relative;
		z-index: 30;
		height: 40px;
		font-size: 12px;
		color: #b0b0b0;
		background: #333;
		.header-left
			float: left
			.nav-item
				color: #b0b0b0;
				line-height: 40px;
				display: inline-block;
				&.download-app
					position: relative
				&:hover
					color: #fff
					.download
						display: block
				.download
					width: 124px
					position: absolute
					text-align: center
					top: 40px
					left: 50%
					padding: 18px 0px 14px
					background: rgb(255, 255, 255)
					margin-left: -55px
					box-shadow: rgb(170, 170, 170) 0px 1px 5px
					display: none
					.down
						width: 0;
						height: 0;
						border-width: 0 10px 10px;
						border-style: solid;
						border-color: transparent transparent #fff;
						position: absolute;
						top: -10px;
						left: 50px;
					span
						display: block;
						text-align: center;
						font-size: 14px;
						color: #333;
						line-height: 1;
			span
				color: #424242
				margin: 0 .5em
		.header-right
			float: right
			.login-item
				color: #b0b0b0
				line-height: 40px
				display: inline-block
				padding: 0 5px
				&:last-child
					padding: 0 10px
				&:hover
					color: #fff
		.car
			width: 120px
			margin-left: 15px
			position: relative
			height: 40px
			background: #424242
			text-align: center
			line-height: 40px
			a.car-link
				color: #b0b0b0
				display: block
				position: relative
				&:hover
					color: #ff6700
					background-color: #fff
					.k-ion-ios-cart 
						color: #ff6700
					.cart-content
						height: 100px
				.cart-content
					height: 0
					overflow: hidden
					position: absolute
					right: 0
					top: 40px
					z-index: 31
					width: 316px
					color: #424242
					background: #fff
					box-shadow: 0 2px 10px rgba(0,0,0,0.15)
					cursor: default
					transition: height .2s
					.cart-tip
						margin: 25px 20px 20px
	.header-nav
		z-index: 20
		height: 100px 
		color: #333
		.nav-content
			.logo
				width: 62px
				margin-top: 22px
				cursor: pointer
			.nav
				.nav-list
					.nav-link
						display: block
						padding: 29px 10px 38px
						color: #333
						&:hover
							color: #ff6700
					font-size: 16px
					z-index: 10;
					float: left;
					width: 820px;
					height: 88px;
					margin: 0;
					padding: 12px 0 0 30px;
					.navBanner
						position: relative 
						float: left 
						width: 127px
						padding-right: 15px
						display: list-item
						visibility: hidden
						height: 100%
					.nav-item
						float left
						display: list-item
						height: 100%
			.search
				width: 296px
				margin-top: 25px
				.search-input
					position: relative
					width: 296px
					height: 50px
					&:hover
						.search-text,.search-btn
							border: 1px solid #b0b0b0
					.search-text
						position: absolute
						top: 0
						right: 51px
						z-index: 1
						width: 223px
						height: 48px
						padding: 0 10px
						border: 1px solid #e0e0e0
						font-size: 14px
						line-height: 48px
						transition: all .2s
						box-sizing: content-box
						&.focus
							border: 1px solid #ff6700
					.search-btn
						position: absolute
						right: 0
						top: 0
						z-index: 2
						width: 52px
						height: 50px
						border: 1px solid #e0e0e0
						font-size: 24px
						line-height: 24px
						background: #fff
						color: #616161
						transition: all .2s
						&:hover
							background: #ff6700
							color: #fff
							border: 1px solid #ff6700
						&.focus
							border: 1px solid #ff6700
		.nav-menu
			display: none
			height: 229px
			box-shadow: 0 3px 4px rgba(0,0,0,0.18)
			transition: box-shadow .2s
			position: absolute
			top: 140px
			left: 0
			z-index: 24
			width: 100%
			border-top: 1px solid #e0e0e0
			background-color: #fff
			.content
				position: relative
				.menu-list
					font-size: 12px
					.menu-item
						position: relative
						float: left
						width: 180px
						padding: 35px 12px 0
						text-align: center
						&:after
							position: absolute
							left: 0
							top: 35px
							z-index: 1
							width: 1px
							height: 100px
							content: ""
							background-color: #e0e0e0
						&:first-child:after
							content: ''
							width: 0
							height: 0
						.menu-img
							width: 160px
							height: 110px
							margin: 0 auto 16px
							a
								display: block
								&>img
									width: 160px
									height: 110px
						.menu-title
							line-height: 20px
							overflow: hidden
							white-space: nowrap
							text-overflow: ellipsis
							a
								color: #333
						.menu-price
							line-height: 20px
							color: #ff6700
						.flags
							position: absolute
							top: -1px
							left: 0
							z-index: 1
							width: 100%
							font-size: 12px
							.flags-text
								display: inline-block
								height: 18px
								padding: 1px 20px
								border: 1px solid #ff6700
								color: #ff6700
</style>