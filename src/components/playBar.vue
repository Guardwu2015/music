<template>
	<div>
		<audio v-if="playList[playID]" :src="playList[playID].url" controls="" autoplay=""></audio>
	
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
				<div class="play"><img src="../assets/images/play.png"/></div>
				<div class="list"><img src="../assets/images/list.png"/></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			playID() {
				return this.$store.state.playID
			},
			playList() {
				return this.$store.state.playList
			}
		},
	}
</script>

<style>

</style>