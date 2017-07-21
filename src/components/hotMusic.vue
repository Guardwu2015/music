<template>
	<div ref="hotBody">
		<loading class="loading" v-if="loading"></loading>
		<div class="rang-king-list">
			<ul class="songList" :class="{active:loading}">
				<li v-for="(item,index) in DataList" key="index">
					<dl v-tap="{methods:getSong, index:index}" class="songTile">
						<dt>
							<span><i class="icon-audio-play"></i></span>
							<img :src="item.albumpic_small"/>
						</dt>
						<dd>
							<p>{{ item.songname }}</p>
							<span>{{ item.singername }}</span>
						</dd>
					</dl>
					<div class="more" v-tap="{methods:showPushSong, index:index}">
						<i class="icon-list-more"></i>
					</div>
				</li>
			</ul>
		</div>
		<div class="pushSongWrap" :class="{ active: pushLists }" ref="pushWrap">
			<div class="playSongBody">
				<div class="playList" ref="playList">
					<dl class="songTile">
						<dt>
							<img :src="obj.albumpic_small"/>
						</dt>
						<dd>
							<p>{{ obj.songname }}</p>
							<span>{{ obj.singername }}</span>
						</dd>
					</dl>
					<ul>
						<li v-tap="{methods:playSong}"><i class="icon-audio-plays"></i>播放</li>
						<li v-tap="{methods:nextSong}"><i class="icon-audio-next"></i>下一首播放</li>
						<li v-tap="{methods:pushSong}"><i class="icon-audio-list"></i>加入歌单</li>
					</ul>
				</div>
			</div>
			<div class="playListClose" v-tap="{methods:listHide}">取消</div>
			<div class="closeSongBody" v-tap="{methods:listHide}"></div>
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
				DataList: [],
				pushLists: false,
				obj:{}
			}
		},
		created() {
			this.fetchData();
			
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
			},
			//弹出more更多菜单；
			showPushSong(params){
				this.pushLists = true;
				this.obj = this.DataList[params.index];
				//解决菜单弹出滑动页面依然可以滑动滚动条；
				this.$nextTick(() => {
					this.$refs.pushWrap.addEventListener('touchmove',function(e){
						e.stopPropagation()
					})
				})
			},
			listHide(){
				this.pushLists = false ;
			},
			//从更多菜单中播放歌曲;原理同从搜索栏中播放歌曲；
			playSong(){
				let obj = {}
				obj.list = this.obj;
				obj.id = this.$store.state.playList.length;
				this.$store.commit("newPlay",obj);
				this.listHide()
			},
			//从更多菜单中添加至下一首播放
			nextSong(){
				let playID = this.$store.state.playID;
				if(playID == null){
					playID = 0;
				}else{
					playID = playID +1;
				}
				let obj = {};
				obj.list = this.obj;
				obj.id = playID;
				this.$store.commit("nextSong",obj);
				this.listHide()
			},
			//从更多菜单中添加至歌单
			pushSong(){
				
			}
			
		},
		components: {
			loading
		}
	}
</script>