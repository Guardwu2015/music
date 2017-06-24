<template>
	<div ref="hotBody">
		<loading class="loading" v-if="loading"></loading>
		<div class="rang-king-list">
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
	import loading from '@/components/loading'
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
			loading
		}
	}
</script>
