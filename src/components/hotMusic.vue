<template>
	<div ref="hotBody">
		<loading class="loading" v-if="loading"></loading>
		<div class="rang-king-list">
			<ul class="songList" :class="{active:loading}">
				<li v-for="(item,index) in DataList" key="index">
					<dl v-tap="{methods:getSong, index:index}">
						<dt>
							<span><i class="icon-audio-play"></i></span>
							<img :src="item.albumpic_small"/>
						</dt>
						<dd>
							<p>{{ item.songname }}</p>
							<span>{{ item.singername }}</span>
						</dd>
					</dl>
					<div class="more">
						<i class="icon-list-more"></i>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import loading from '@/components/loading'
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
			fetchData() {
				this.loading = true;
				//获取当前id下面歌曲数据
				this.$http.get(this.$site + this.$route.meta.id).then(response => {
					this.DataList = response.data.showapi_res_body.pagebean.songlist;
					this.loading = false;
					//当获取数据渲染成功后在初始化滚动条
					this.$nextTick(() => {
						new BScroll(this.$refs.hotBody, {})
					})
				}, response => {
					console.log("请求超时")
				})
			},
			getSong(params) {
				//建立一个对象
				let obj = {};
				//用来存贮点击播放的歌曲
				obj.list = this.DataList[params.index];
				//每次点击歌曲都会往playList进行push 所以他的id刚好对应playList的长度
				obj.id = this.$store.state.playList.length;
				//将点击播放的歌曲提交到临时播放列表
				this.$store.commit("newPlay",obj);
			}
		},
		components: {
			loading
		}
	}
</script>