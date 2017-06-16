<template>
  <div id="app">
		<div id="search-bar">
			<input type="text" class="search-input" placeholder="搜索 歌曲/专辑/歌手" />
		</div>
  	<div id="app-body">
  		<ul class="rang-king-list">
  			<li v-for="item in rangKing" key="index">{{ item[1] }}</li>
  		</ul>
  	</div>
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
import BScroll from 'better-scroll'

const RANGKING = [["26","热歌"],["4","流行榜"],["3","欧美"],["5","内地"],["6","港台"],["16","韩国"],["17","日本"],["27","新歌"],["28","网络歌曲"],["32","音乐人"],["26","K歌金曲"]]

export default {
  name: 'app',
  data(){
  	return {
  		rangKing:RANGKING
  	}
  },
  created(){
  	this.$http.get('/213-4?showapi_appid=39796&showapi_sign=3F28938D9E07B44E63B1AB0C166C6AF5&topid=5').then(response => {
		  		console.log(response.data)
				}, response => {

				})
  },
  mounted() {
	  this.$nextTick(() => {
	    this.scroll = new BScroll(document.getElementById("app-body"), {})
	  })
  }

}
</script>

<style lang="less">
	@import url("./assets/style/custom.less");
</style>
