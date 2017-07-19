<template>
	<div class="top-bar" :class="{ active: isfocus }">
		<div class="top-wrap">
			<div class="top-nav">
				<span><i class="icon-list"></i></span>
				<span><i class="icon-user"></i></span>
			</div>
			<div class="search-wrap" :class="{ active: isfocus }">
				<label for="search-input" v-show="!isfocus"><i class="icon-search"></i> 搜索</label>
				<input type="search" id="search-input" ref="search" @focus="inputFocus" @keyup.enter="search" v-model="keyword" :value="keyword" />
				<span :class="{ active: isfocus }" v-tap="{methods:cancel}">取消</span>
			</div>
		</div>
		<div class="search-mark" :class="{ active: isfocus }">
			<loading v-if="loading"></loading>
			<div v-if="data">
				<p class="allNum">搜索<span>{{ data.w }}</span> 共<span>{{ data.allNum }}</span>条</p>
				<div ref="selist" class="search-list" :class="{ active: data }">
					<ul>
						<li v-for="(item,index) in data.contentlist" key="index">
							<div class="item-text">
								<p>{{ item.songname }}</p>
								<span>{{ item.singername }} · {{ item.albumname }}</span>
							</div>
							<div class="item-add">
								<div class="icon">
									<i class="icon-audio-play"></i>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import loading from "@/components/loading"
	import BScroll from 'better-scroll'

	export default {
		data() {
			return {
				isfocus: false,
				loading: false,
				keyword: "",
				data: null,
			}
		},
		methods: {
			inputFocus() {
				this.isfocus = true
			},
			cancel() {
				this.isfocus = false
				this.$refs.search.blur()
				this.keyword = ""
				this.data = null
			},
			search() {
				this.loading = true;
				this.$http.get(this.$querys + "&page=1&keyword=" + this.keyword).then(response => {
					this.loading = false;
					this.$refs.search.blur()
					this.data = response.data.showapi_res_body.pagebean
					console.log(response.data.showapi_res_body.pagebean)
					this.$nextTick(() => {
						new BScroll(this.$refs.selist, {})
					})
				}, response => {
					console.log("请求超时")
				})
			}
		},
		components: {
			loading
		}
	}
</script>