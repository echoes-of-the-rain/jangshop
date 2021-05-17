<template>
	<view>
		<good-list :goods="goods"></good-list>
	</view>
</template>
<!-- /api/getgoods?pageindex=number -->
<script>
	import GoodList from '@/components/GoodList.vue'
	import {myRequestGet} from '@/utils/zgrequest.js'
	export default {
		data() {
			return {
				pageindex :1,
				goods:[],
				hasMore:true
			}
		},
		created(){
			this.getGoods()
		},
		methods: {
			async getGoods(){
				let result = await myRequestGet(`/api/getgoods?pageindex=${this.pageindex}`)
				if(result.status == 0 ){
					if( result.message.length){
						this.goods = [...this.goods,...result.message];
					}
					else{
						this.hasMore = false;
					}
				}
				
			}
		},
		components:{
			GoodList
		},
		onReachBottom(){
			console.log("到达底部")
			if(this.hasMore){
				this.pageindex++;
				this.getGoods();
			}	
		}
	}
</script>

<style>

</style>
