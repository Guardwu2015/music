<template>
	<div id="nav">
		<div class="swiper-wrapper">
			<router-link :to="item.path" tag="div" class="swiper-slide" key="index" v-for="(item,index) in rangking">{{ item.title }}</router-link>
		</div>
	</div>
</template>
<script>
	const RANGKING = [
		{
			title: "热歌",
			path: "/hotMusic"
		},
		{
			title: "流行榜",
			path: "/fashion"
		},
		{
			title: "欧美",
			path: "/europe"
		},
		{
			title: "内地",
			path: "/inland"
		},
		{
			title: "港台",
			path: "/hktw"
		},
		{
			id: "16",
			title: "韩国",
			path: ""
		},
		{
			id: "17",
			title: "日本",
			path: ""
		},
		{
			id: "27",
			title: "新歌",
			path: ""
		},
		{
			id: "28",
			title: "网络歌曲",
			path: ""
		},
		{
			id: "32",
			title: "音乐人",
			path: ""
		},
		{
			id: "26",
			title: "K歌金曲",
			path: ""
		}
	]

	export default {
		data() {
			return {
				rangking: RANGKING
			}
		},
		watch:{
			$route(to,from){
				if(to.meta.index < from.meta.index){
					this.$emit('setDir',"right");
				}else{
					this.$emit('setDir',"left");
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				new Swiper('#nav', {
					freeMode: true,
					slidesPerView: 'auto',
					freeModeSticky: true,
				});

			})
		},
	}
</script>