<template>
	<view class="container">
		
	</view>
</template>

<script>
	import {myRequestGet} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				
			}
		},
		created(){
			this.getSwipers()
		},
		methods: {
           async getSwipers(){
				let result = await myRequestGet("/api/getlunbo");
				console.log(result,"44444444")
			}
		}
		
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
