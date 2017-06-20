<template>
  <div id="app">
		<top></top>
		<router-view></router-view>
  	<div id="play-bar">
  		<dl class="play-bar-container">
  			<dt class="play-bar-image">
  				<img src="./assets/images/logo.png"/>
  			</dt>
  			<dd class="play-bar-text">vue muisc</dd>
  		</dl>
  		<div class="play-bar-button"></div>
  	</div>
  </div>
</template>

<script>
import top from '@/components/header'

export default {
  name: 'app',
	components:{
		top
	}
	
}
</script>

<style lang="less">
	@import url("./assets/style/custom.less");
</style>
