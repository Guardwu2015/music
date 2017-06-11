<template>
  <div id="app">
		<div id="search-bar">
			<input type="text" class="search-input" placeholder="搜索 歌曲/专辑/歌手" />
		</div>
  	<div id="app-body">
  		<div>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  			<p>123</p>
  		</div>
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
export default {
  name: 'app',
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
