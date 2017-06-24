<template>
	<div>
		<audio v-if="playList[playID]" :src="playList[playID].url" controls="" autoplay="" ref="audio"></audio>
	
		<div id="play-bar">
			<dl class="play-bar-container">
				<dt class="play-bar-image">
	  				<img v-if="playID != null" :src="playList[playID].albumpic_small" />
	  				<img src="../assets/images/logo.png" v-else />
	  			</dt>
				<dd class="play-bar-text" v-if="playID != null">{{ playList[playID].songname }}</dd>
				<dd class="play-bar-text" v-else>随便听听</dd>
			</dl>
			<div class="play-bar-button">
				<div class="icon" v-if="!isplay" v-tap="{methods:play}"><img src="../assets/images/play.png"/></div>
				<div class="icon" v-if="isplay" v-tap="{methods:pause}"><img src="../assets/images/pause.png"/></div>
				<div class="icon"><img src="../assets/images/list.png"/></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			play(){
				if(this.playID){
					this.$store.commit("ksPlay");
					this.$refs.audio.play()
				}
			},
			pause(){
				if(this.playID){
					this.$store.commit("ksPlay")
					this.$refs.audio.pause()
				}
			}
		},
		computed: {
			playID() {
				return this.$store.state.playID
			},
			playList() {
				return this.$store.state.playList
			},
			isplay(){
				return this.$store.state.isplay
			}
		},
		updated(){
			let _this=this
			this.$refs.audio.onended = function(){
				_this.$store.commit("nextMusic")
			};
		}
	}
</script>

<style>

</style>