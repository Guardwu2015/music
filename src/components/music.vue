<template>
  <div class="music">
  	
  	<div>最叼的</div>
  	<input type="text" v-model="singer"/>
  	<button @click="query">搜索</button>
  	<ul>
  		<li v-for="item in seach.songs" @click="palyMusic( item.audio )">
  			<p>{{ item.name }}</p>
  			<img :src="item.album.picUrl" width="100"/>
  		</li>
  	</ul>
  	<video controls="" autoplay="" name="media" :src="mp3url"></video>
  </div>
</template>

<script>

	
export default {
  name: 'hello',
  data () {
    return {
    	singer:'',
    	mp3url:'',
      seach:{}
    }
  },
  methods:{
  	query(){
  		if(this.singer!=""){
  			this.$http.get('/search/get/?type=1&s='+this.singer).then(response => {
		  		this.seach=response.data.result
		  		console.log(this.seach)
				}, response => {

				})
  		}
  	},
  	palyMusic(url){
  		this.mp3url=url
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
