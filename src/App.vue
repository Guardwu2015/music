<template>
  <div id="app">
		<v-header></v-header>
		<v-nav v-on:setDir="routeDir"></v-nav>
		<transition :name="thisDir">
			<router-view class="app-body"></router-view>
		</transition>
		<play></play>
  </div>
</template>

<script>
import vHeader from '@/components/header'
import vNav from '@/components/nav'
import play from '@/components/playBar'

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
		play
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
