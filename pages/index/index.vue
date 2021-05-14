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
		methods: {
           async getSwipers(){
				let result = await myRequestGet("/api/getlunbo");
				
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
