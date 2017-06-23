<template>
	<div id="play-bar">
		<dl class="play-bar-container">
			<dt class="play-bar-image">
  				<img src="../assets/images/logo.png"/>
  			</dt>
			<dd class="play-bar-text">{{author}}</dd>
		</dl>
		<div class="play-bar-button"></div>
	</div>
</template>

<script>
	export default {
		computed: {
			author() {
				return this.$store.state.author
			}
		},
	}
</script>

<style>

</style>