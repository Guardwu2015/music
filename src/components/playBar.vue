<template>
	<div>
		<audio v-if="playList[playID]" :src="playList[playID].url" controls="" autoplay="" ref="audio"></audio>

		<div class="play-wrap" :class="{ active: isActive }">
			<div class="play-body">
				<div v-tap="{methods:musicAreaHide}">下</div>
				<div class="cover">
					<img v-if="playID != null" :src="playList[playID].albumpic_big" />
				</div>
				<div class="songName" v-if="playID != null">{{ playList[playID].songname }}</div>
				<div class="singername" v-if="playID != null">{{ playList[playID].singername }}</div>
				<div class="play-handle">
					<div class="prev" v-tap="{methods:prev}">上</div>
					<div class="play" v-if="!isplay" v-tap="{methods:play}"><img src="../assets/images/play.png" /></div>
					<div class="pause" v-if="isplay" v-tap="{methods:pause}"><img src="../assets/images/pause.png" /></div>
					<div class="next" v-tap="{methods:next}">下</div>
				</div>
				<div class="play-list-btn"></div>
			</div>
			<div class="bg-img">
				<img v-if="playID != null" :src="playList[playID].albumpic_big" />
				<img src="../assets/images/logo.png" v-else />
			</div>
		</div>

		<div id="play-bar" :class="{ active: isActive }">
			<dl class="play-bar-container" v-tap="{methods:musicAreaShow}">
				<dt class="play-bar-image">
	  				<img v-if="playID != null" :src="playList[playID].albumpic_small" />
	  				<img src="../assets/images/logo.png" v-else />
	  			</dt>
				<dd class="play-bar-text" v-if="playID != null">{{ playList[playID].songname }}</dd>
				<dd class="play-bar-text" v-else>随便听听</dd>
			</dl>
			<div class="play-bar-button">
				<div class="icon" v-if="!isplay" v-tap="{methods:play}"><img src="../assets/images/play.png" /></div>
				<div class="icon" v-if="isplay" v-tap="{methods:pause}"><img src="../assets/images/pause.png" /></div>
				<div class="icon"><img src="../assets/images/list.png" /></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive: false
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
			next(){
				this.$store.commit("nextMusic")
			},
			prev(){
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
		}
	}
</script>

<style>

</style>