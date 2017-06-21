<template>
	<div ref="hotBody">
		<div class="loading" v-if="loading">Loading...</div>
		<div class="rang-king-list">
			<banner></banner>
			<div class="title">
				<h6>热歌推荐</h6>
			</div>
			<ul class="songList">
			<li v-for="(item,index) in DataList" key="index">
				<dl>
					<dt>{{ index+1 }}</dt>
					<dd>
						<p>{{ item.songname }}</p>
						<span>{{ item.singername }}</span>
					</dd>
				</dl>
			</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import banner from '@/components/banner'
	import BScroll from 'better-scroll'
	
	export default {
		data() {
			return {
				loading: false,
				DataList: []
			}
		},
		created() {
			this.fetchData()
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData(){
				this.loading = true;
				
				this.$http.get(this.$site + this.$route.meta.id).then(response => {
					this.DataList = response.data.showapi_res_body.pagebean.songlist;
					this.loading = false;
					this.$nextTick(() => {
						new BScroll(this.$refs.hotBody, {})
					})
				}, response => {
					console.log("请求超时")
				})
			},
		},
		components:{
			banner
		}
	}
</script>
