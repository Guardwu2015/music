<template>
  <div id="app">
		<v-header></v-header>
		<v-nav v-on:setDir="routeDir"></v-nav>
		<transition :name="thisDir">
			<router-view class="app-body"></router-view>
		</transition>
  	<div id="play-bar">
  		<dl class="play-bar-container">
  			<dt class="play-bar-image">
  				<img src="./assets/images/logo.png"/>
  			</dt>
  			<dd class="play-bar-text">vue muisc</dd>
  		</dl>
  		<div class="play-bar-button"></div>
  	</div>
  	<music></music>
  </div>
</template>

<script>
import vHeader from '@/components/header'
import vNav from '@/components/nav'
import music from '@/components/musicPlay'

export default {
  name: 'app',
  data(){
  	return {
  		thisDir:'left'
  	}
  },
	components:{
		vHeader,
		vNav,
		music
	},
	methods:{
		routeDir(data){
			this.thisDir = data
		}
	}
}
</script>

<style lang="less">
	@import url("./assets/style/custom.less");
</style>
