<template>
	<div id="home-body">
		<div class="rang-king-list">
			<banner></banner>
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
		mounted() {
			this.$nextTick(() => {
				new BScroll(document.getElementById("home-body"), {})
			})
		},
//		methods: {
//			getSong: function(params) {
//				this.$http.get(this.$site + params.index).then(response => {
//					console.log(response.data)
//				}, response => {
//
//				})
//			},
//		},
		components:{
			banner
		}
	}
</script>
