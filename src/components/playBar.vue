<template>
	<div>
		<audio v-if="playList[playID]" :src="playList[playID].url" controls="" autoplay="" ref="audio"></audio>

		<div class="play-wrap" :class="{ active: isActive }">
			<div class="play-body">
				<div v-tap="{methods:musicAreaHide}" class="play-hide">
					<i class="icon-down"></i>
				</div>
				<div class="cover">
					<img v-if="playID != null" :src="playList[playID].albumpic_big" />
				</div>
				<div class="songName" v-if="playID != null">{{ playList[playID].songname }}</div>
				<div class="singername" v-if="playID != null">{{ playList[playID].singername }}</div>
				<div class="play-handle">
					<div class="progress-wrap">
						<div class="to">{{startTime}}</div>
						<div class="progress-bar"><span :style="width"></span></div>
						<div class="from">{{endTime}}</div>
					</div>
					<div class="prev" v-tap="{methods:prev}">
						<i class="icon-prev"></i>
					</div>
					<div class="play" v-if="!isplay" v-tap="{methods:play}">
						<i class="icon-play"></i>
					</div>
					<div class="pause" v-if="isplay" v-tap="{methods:pause}">
						<i class="icon-pause"></i>
					</div>
					<div class="next" v-tap="{methods:next}">
						<i class="icon-next"></i>
					</div>
				</div>
			</div>
		</div>
		
		
		<div id="play-bar" :class="{ active: isActive}">
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
					<i class="icon-play"></i>
				</div>
				<div class="icon" v-if="isplay" v-tap="{methods:pause}">
					<i class="icon-pause"></i>
				</div>
				<div class="icon" >
					<i class="icon-list"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive: false,
				endTime:"00:00",
				startTime:"00:00",
				progress:"0%",
				width:{
					width:"0%"
				}
			}
		},
		methods: {
			play() {
				if(this.playID) {
					this.$store.commit("isPlay");
					this.$refs.audio.play()
				}
			},
			pause() {
				if(this.playID) {
					this.$store.commit("isPlay")
					this.$refs.audio.pause()
				}
			},
			musicAreaShow() {
				if(this.playID) {
					this.isActive = true
				}
			},
			musicAreaHide() {
				if(this.playID) {
					this.isActive = false
				}
			},
			next() {
				this.$store.commit("nextMusic")
			},
			prev() {
				this.$store.commit("prevMusic")
			},
			
		},
		computed: {
			playID() {
				return this.$store.state.playID
			},
			playList() {
				return this.$store.state.playList
			},
			isplay() {
				return this.$store.state.isplay
			},
		},

		updated() {
			let _this = this

			this.$refs.audio.onended = function() {
				_this.$store.commit("nextMusic")
			};
			
			setTimeout(()=>{
				let t,m,s
				t = parseInt(_this.$refs.audio.duration);
				m = "0"+Math.floor(t/60);
				s = t-Math.floor(t/60)*60;
				s = s<10?"0"+s:s
				_this.endTime = m+":"+s;
			},30)
			
			setInterval(()=>{
				let t,m,s,k
				t = parseInt(_this.$refs.audio.currentTime);
				
				m = Math.floor(t/60);
				m = m<10?"0"+m:m;
				s = t-Math.floor(t/60)*60;
				s = s<10?"0"+s:s
				
				_this.startTime = m+":"+s;
				
				setTimeout(()=>{
					let w
					k = parseInt(_this.$refs.audio.duration);
					w = (t/k*100).toFixed(2);
					_this.width.width = w+"%"
				},30)
				
			},1000)
			
		},
	}
</script>

<style>

</style>