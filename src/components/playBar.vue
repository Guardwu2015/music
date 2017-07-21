<template>
	<div>
		<audio v-if="playList[playID]" :src="playList[playID].url" controls="" autoplay="" ref="audio" style="display: none;"></audio>
		
		<!-- 播放歌单区域 -->
		<div class="play-wrap" :class="{ active: isActive }">
			<div class="play-body">
				<!-- 关闭播放区域按钮 -->
				<div v-tap="{methods:musicAreaHide}" class="play-hide">
					<i class="icon-down"></i>
				</div>
				<!-- 专辑大图 -->
				<div class="cover blurFlash" :class="{ active : flash , show:isActive }">
					<img v-if="playID != null" :src="playList[playID].albumpic_big" />
				</div>
				<!-- 歌曲名字 -->
				<div class="songName" v-if="playID != null">{{ playList[playID].songname }}</div>
				<!-- 歌手名字 -->
				<div class="singername" v-if="playID != null">{{ playList[playID].singername }}</div>
				<!-- 歌曲控制器 -->
				<div class="play-handle">
					<!-- 歌曲播放进度条 -->
					<div class="progress-wrap">
						<div class="to">{{startTime}}</div>
						<div class="progress-bar"><span :style="width"></span></div>
						<div class="from">{{endTime}}</div>
					</div>
					<!-- 上一曲 -->
					<div class="prev" v-tap="{methods:prev}">
						<i class="icon-audio-prev"></i>
					</div>
					<!-- 播放 -->
					<div class="play" v-if="!isplay" v-tap="{methods:play}">
						<i class="icon-audio-plays"></i>
					</div>
					<!-- 暂停 -->
					<div class="pause" v-if="isplay" v-tap="{methods:pause}">
						<i class="icon-audio-pause"></i>
					</div>
					<!-- 下一曲 -->
					<div class="next" v-tap="{methods:next}">
						<i class="icon-audio-next"></i>
					</div>
				</div>
				
				<!-- 背景模糊区域 -->
				<div :style="{ width: img.width + 'px' ,height : img.height + 'px' }" class="blurFlash" :class="{ active : flash }" ref="blurFlash">
				<svg :width="img.width" :height="img.height" class="banner-svg" id="banner_svg">
					<defs>
						<filter id="f">
							<feImage id="svg_feImage" v-if="playID != null" xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="playList[playID].albumpic_big" x="0" y="0" :width="img.width" :height="img.height" preserveAspectRatio="xMidYMid slice"></feImage>
							<feGaussianBlur stdDeviation="30"></feGaussianBlur>
						</filter>
					</defs>
					<rect id="svg_rect" x="0" y="0" :width="img.width" :height="img.height" filter="url(#f)"></rect>
				</svg>
				</div>
				
			</div>
		</div>
		
		<!-- 歌曲播放列表 -->
		<div class="playSongWrap" :class="{ active: isLists }">
			<div class="playSongBody">
				<div v-if="playList.length != 0">
					<div class="playListTitle">播放列表({{ playList.length }})首</div>
					<div  class="playList" ref="playList">
						<ul>
							<li v-for="(item,index) in playList" :class="{ active:index == playID }">
								<div class="playListName" v-tap="{methods:getSong, index:index}">
									{{ item.songname }}<span> - {{ item.singername }}</span>
									<div class="movementWrap" v-if="index == playID">
										<div class="movement" :class="{ active :!isplay}">
									        <span><i></i></span>
									        <span><i></i></span>
									        <span><i></i></span>
									        <span><i></i></span>
									        <span><i></i></span>
									        <span><i></i></span>
									    </div>
								    </div>
								</div>
								<div class="colse" v-tap="{methods:deleteSong, index:index}"><i class="icon-close"></i></div>
							</li>
						</ul>
					</div>
				</div>
				<div v-if="playList.length == 0" class="playListNull">
					<p><i class="icon-undefined"></i></p>
					<span>播放列表空空如也</span>
				</div>
			</div>
			<div class="playListClose" v-tap="{methods:listHide}">关闭</div>
			<div class="closeSongBody" v-tap="{methods:listHide}"></div>
		</div>
		
		<!-- 底部播放模块 -->
		<div id="play-bar" :class="{ active: isActive||isLists}">
			<div class="progress-bar"><span :style="width"></span></div>
			<dl class="play-bar-container" v-tap="{methods:musicAreaShow}">
				<dt class="play-bar-image">
	  				<img v-if="playID != null" :src="playList[playID].albumpic_small" />
	  				<img src="../assets/images/logo.png" v-else />
	  			</dt>
				<dd class="play-bar-text" v-if="playID != null">
					<p>{{ playList[playID].songname }}</p>
					<span>{{ playList[playID].singername }}</span>
				</dd>
				<dd class="play-bar-text" v-else>
					随便听听
				</dd>
			</dl>
			<div class="play-bar-button">
				<div class="icon" v-if="!isplay" v-tap="{methods:play}">
					<i class="icon-audio-plays"></i>
				</div>
				<div class="icon" v-if="isplay" v-tap="{methods:pause}">
					<i class="icon-audio-pause"></i>
				</div>
				<div class="icon" v-tap="{methods:listShow}">
					<i class="icon-audio-list"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default {
		data() {
			return {
				isLists:false,
				isActive: false, //用于判断播放区域是否点开
				endTime:"00:00", //歌曲结束时间
				startTime:"00:00", //歌曲播放时间
				progress:"0%", //进度条初始
				width:{
					width:"0%"
				},
				img:{ //底部模糊图片宽度高度初始化
					width:null,
					height:null
				},
				flash:false, //用于判断切换歌单的时候渐隐
				flashTime:300, //歌曲切换背景切换的时间和css值保持
			}
		},
		created(){
			//页面初始化的时候获取屏幕尺寸 给到svg 底部模糊效果图
			this.img.width = window.screen.width ;
			this.img.height = window.screen.height ;
		},
		methods: {
			//播放按钮
			play() {
				// 播放之前判断vuex 中playID是否为初始值；如果不等于null；则开始播放
				if(this.playID != null) {
				// 播放暂停都会向vuex 提交isPlay 改变他的 true flash的变化；用于监听是否有歌曲在播放
					this.$store.commit("isPlay");
					this.$refs.audio.play()
				}
			},
			//暂停按钮
			pause() {
				if(this.playID != null) {
					this.$store.commit("isPlay")
					this.$refs.audio.pause()
				}
			},
			//在有歌曲播放的情况下才可以点开播放区域
			musicAreaShow() {
				if(this.playID != null) {
					this.isActive = true
				}
			},
			//在有歌曲播放的情况下才可以关闭播放区域
			musicAreaHide() {
				if(this.playID != null) {
					this.isActive = false
				}
			},
			//播放下一曲
			next() {
				this.flash = true 
				//点击下一曲播放给flash为true 会添加上class 实现切换歌曲时候的动画效果
				setTimeout(()=>{
					this.$store.commit("nextMusic")
					this.flash = false
				},this.flashTime)
				//定时器设置为500是因为css中的动画刚好是.5s 要动画播放完之后才告诉vuex播放下一首
			},
			//播放上一曲；同下一曲功能一样；本来可以封装成一个方法；由于用的vue-tap 他的方法写的不完善；最新版本已经可以实现传参数了
			prev() {
				this.flash = true
				setTimeout(()=>{
					this.$store.commit("prevMusic")
					this.flash = false
				},this.flashTime)
			},
			//弹出正在播放的列表歌曲
			listShow(){
				this.isLists = true;
				// 有歌曲存在的时候在初始化滚动条；不然会报错
				if(this.playList.length > 0){
					this.$nextTick(() => {
						new BScroll(this.$refs.playList, {})
					})					
				}
			},
			//关闭正在播放的列表
			listHide(){
				this.isLists = false;
			},
			//从正在播放的列表中点播歌曲
			getSong(params) {
				this.$store.commit("lsitPlay",params.index);
			},
			//从正在播放的列表中删除歌曲
			deleteSong(params){
				this.$store.commit("deleteSong",params.index);
			}
			
		},
		computed: {
			//从vuex中拿到正在播放的歌曲id 
			playID() {
				return this.$store.state.playID
			},
			//从vuex中拿到正在播放的歌曲数组
			playList() {
				return this.$store.state.playList
			},
			//从vuex中拿到是否正在播放歌曲
			isplay() {
				return this.$store.state.isplay
			},
		},
		updated() {
			let _this = this
			//加这一层判断是为了当其他数据发生变化的时候;防止audio没有播放歌曲报错;
			if(this.playID != null) {
				//把audio存为一个变量可以防治没有歌曲播放的时候；获取他下面的属性值为undfined
				let audios = this.$refs.audio;
				
				//监听歌曲播放完之后播放下一曲
				audios.onended = ()=>{
					this.flash = true
					setTimeout(()=>{
						this.$store.commit("nextMusic")
						this.flash = false
					},this.flashTime)
				};
				
				//拿到歌曲播放的总时间长; 设置定时器用异步
				setTimeout(()=>{
					let t,m,s
					t = parseInt(audios.duration);
					//在没有获取歌源的时候歌曲时间会为NaN；增加判断防止页面布局乱掉
					if(isNaN(t)){
						t = 0
					}
					m = "0"+Math.floor(t/60);
					s = t-Math.floor(t/60)*60;
					s = s<10?"0"+s:s;
					_this.endTime = m+":"+s;
				},30)
				
				//每秒更新进度条以及开始时间
				setTimeout(()=>{
					let t,m,s,k;
					t = parseInt(audios.currentTime);
					m = Math.floor(t/60);
					m = m<10?"0"+m:m;
					s = t-Math.floor(t/60)*60;
					s = s<10?"0"+s:s
					
					_this.startTime = m+":"+s;
					
					setTimeout(()=>{
						let w;
						k = parseInt(audios.duration);
						w = (t/k*100).toFixed(2);
						_this.width.width = w+"%"
					},30)
				},1000);
			}else{
				//如果this.playID 为null 则初始化这些值
				this.endTime="00:00"; //歌曲结束时间
				this.startTime="00:00"; //歌曲播放时间
				this.progress="0%"; //进度条初始
				this.width.width="0%";
			}
			
		},
	}
	
</script>

<style>

</style>