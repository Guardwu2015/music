<template>
	<div id="app-body">
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
	
	const RANGKING = [
		["26", "热歌"],
		["4", "流行榜"],
		["3", "欧美"],
		["5", "内地"],
		["6", "港台"],
		["16", "韩国"],
		["17", "日本"],
		["27", "新歌"],
		["28", "网络歌曲"],
		["32", "音乐人"],
		["26", "K歌金曲"]
	]

	export default {
		data() {
			return {
				rangKing: RANGKING
			}
		},
		mounted() {
			this.$nextTick(() => {
				new BScroll(document.getElementById("app-body"), {})
			})
		},
		methods: {
			getSong: function(params) {
				this.$http.get(this.$site + params.index).then(response => {
					console.log(response.data)
				}, response => {

				})
			},
		},
		components:{
			banner
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>