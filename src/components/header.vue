<template>
	<div class="top-bar" :class="{ active: isfocus }">
		<div class="top-wrap">
			<div class="top-nav">
				<span>音乐馆</span>
			</div>
			<div class="search-wrap" :class="{ active: isfocus }">
				<label for="search-input" v-show="!isfocus"><i class="icon-search"></i> 搜索</label>
				<input type="search" id="search-input" ref="search" @focus="inputFocus" @keyup.enter="search" v-model="keyword" :value="keyword" />
				<span :class="{ active: isfocus }" v-tap="{methods:cancel}">取消</span>
			</div>
		</div>
		<transition name="fade">
			<div class="search-mark" v-if="isfocus">
				<div v-if="loading">loading...</div>
				<ul v-if="data">
					<li v-for="(item,index) in data.contentlist" key="index">
						<dl>
							<dt>{{ index+1 }}</dt>
							<dd>
								<p>{{ item.songname }}</p>
								<span>{{ item.singername }}</span>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
  		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isfocus:false,
				loading:false,
				keyword:"",
				data:null,
			}
		},
		methods:{
			inputFocus(){
				this.isfocus = true
			},
			cancel(){
				this.isfocus = false
				this.$refs.search.blur()
				this.keyword = ""
				this.data = null
			},
			search(){
				this.loading = true;
				this.$http.get(this.$querys+"&page=1&keyword="+ this.keyword ).then(response => {
					this.loading = false;
					this.$refs.search.blur()
					this.data=response.data.showapi_res_body.pagebean
					console.log(response.data.showapi_res_body.pagebean)
//					this.$nextTick(() => {
//						new BScroll(this.$refs.hotBody, {})
//					})
				}, response => {
					console.log("请求超时")
				})
				
			}
		}
	}
</script>
