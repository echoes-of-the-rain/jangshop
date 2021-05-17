<template>
	<view class="container">
		<swiper class="swiper" :indicator-dots="true" :circular="true" :autoplay="true" :interval="5000" :duration="1000">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<uni-grid :column="4">
			<uni-grid-item v-for="item in navs" :key="item.title">
				<view @click="itemClick(item)">
					<view :class="item.icons"></view>
					<text>{{item.title}}</text>
				</view>	
			</uni-grid-item>
			<!-- <uni-grid-item>
				<view class="iconfont icon-tupian"></view>
				<text>联系我们</text>
			</uni-grid-item>
			<uni-grid-item>
				<view class="iconfont icon-guanyuwomen"></view>
				<text>社区图片</text>
			</uni-grid-item>
			<uni-grid-item>
				<view class="iconfont icon-shipin"></view>
				<text>视频专区</text>
			</uni-grid-item> -->
		</uni-grid>
		
		<good-list :goods="goods"></good-list>

		<!-- <view class="hot_goods">
			<view class="tit">推荐商品</view>
			<view class="goods_list">
				<view class="goods_item" v-for="item in goods" :key="item.id">
					<image :src="item.img_url"></image>
					<view class="price">
						<text>{{item.sell_price}}</text>
						<text>{{item.market_price}}</text>
					</view>
					<view class="name">{{item.title}}</view>
				</view>
			</view>
		</view>-->
	</view> 
</template>

<script>
	import GoodList from '@/components/GoodList.vue'
	import {
		myRequestGet
	} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [{
						icons: "iconfont icon-ziyuan",
						title: "极客超市",
						path: "/pages/goods/goods"
					},
					{
						icons: "iconfont icon-tupian",
						title: "社区图片",
						path: "/pages/pics/pics"
					},
					{
						icons: "iconfont icon-guanyuwomen",
						title: "联系我们",
						path: "/pages/contact/contact"
					},
					{
						icons: "iconfont icon-shipin",
						title: "学习视频",
						path: "/pages/vedios/vedios"
					}
				]
			}
		},
		created() {
			this.getSwipers();
			this.getGoods();
		},
		methods: {
			async getSwipers() {
				let result = await myRequestGet("/api/getlunbo");
				console.log(result, "44444444")
				if (result.status === 0) {
					this.swipers = result.message;
				}
			},
			async getGoods() {
				let result = await myRequestGet("/api/getgoods");
				console.log(result, "55555")
				if (result.status === 0) {
					this.goods = result.message;
				}
			},
			itemClick(item){
				// console.log("3333333333",item.path)
				uni.navigateTo({
					url:item.path
				})
			}
		},
		components:{
			GoodList
		}
	}
</script>

<style lang="less">
	.container {
		.swiper {
			height: 422rpx;

			image {
				width: 100%;
			}
		}

		.uni-grid-item {
			text-align: center;

			.iconfont {
				background: pink;
				line-height: 90rpx;
				width: 90rpx;
				height: 90rpx;
				border-radius: 90px;
				margin: 10px auto;
				font-size: 16px;
			}

			text {
				font-size: 14px;
			}
		}
		// .hot_goods {
		//   background: #eee;
		//   .tit{
		//     border-top: 2px solid #eee;
		//     border-bottom: 2px solid #eee;
		//     margin-top: 20px;
		//     margin-bottom: 3px;
		//     color: blue;
		//     height: 50px;
		//     line-height: 50px;
		//     text-align: center;
		//     letter-spacing: 20px;
		//     background: #fff;
		//   }
		//   .goods_list {
		//     display: flex;
		//     padding: 0 15rpx;
		//     justify-content: space-between;
		//     overflow: hidden;
		//     flex-wrap: wrap;
		//     .goods_item {
		//       width: 355rpx;
		//       margin-bottom: 15rpx;
		//       background: #fff;
		//       padding: 10px;
		//       box-sizing: border-box;
		//       image{
		//         height: 150px;
		//         width: 100%;
		//         mix-width:160px;
		//         margin: 10px auto;
		//       }
		//       .price{
		//         font-size: 18px;
		//         color: red;
		//         padding: 8px 0;
		//         text:nth-child(2){
		//           color: #ccc;
		//           text-decoration: line-through;
		//           margin-left: 10px;
		//           font-size: 13px;
		//         }
		//       }
		//       .name {
		//         font-size: 14px;
		
		//       }
		//     }
		//   }
		// }
		
	}
</style>
