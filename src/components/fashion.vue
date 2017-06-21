<template>
	<div>
		<div class="rang-king-list">
			<div class="title">
				<h6>热歌推荐</h6>
			</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
			<div>12312</div>
		</div>
	</div>
</template>

<script>
	import banner from '@/components/banner'
	import BScroll from 'better-scroll'

	export default {
		data() {
			return {
				rangKing: []
			}
		},
		created(){
//			this.$http.get(this.$site + i[0]).then(response => {
//				console.log(response.data)
//			}, response => {
//
//			})
		},
//		methods: {
//			getSong: function(params) {
//				
//			},
//		},
		components:{
			banner
		}
	}
</script>

