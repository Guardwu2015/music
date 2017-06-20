<template>
	<div class="swiper-container" id="banner">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in Banner"><img :src="item" width="100%" /></div>
		</div>
		<div class="swiper-pagination swiper-pagination-white"></div>
	</div>
</template>

<script>
	let Banner = ['https://y.gtimg.cn/music/common/upload/t_musicmall_focus/110427.jpg', 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/110582.jpg', 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/110660.jpg', 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/110307.jpg', 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/110580.jpg', 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/109948.jpg', 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/109652.jpg', 'https://y.gtimg.cn/music/common/upload/mv_t_mv_focus/110647.jpg']

	export default {
		data() {
			return {
				Banner: Banner
			}
		},
		mounted() {
			this.$nextTick(() => {
				new Swiper('#banner', {
					autoplay: 3000,
					autoplayDisableOnInteraction: false,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					// Disable preloading of all images
					preloadImages: false,
					// Enable lazy loading
					lazyLoading: true
				});

			})
		},
	}
</script>