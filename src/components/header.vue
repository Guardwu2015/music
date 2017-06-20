<template>
	<div class="top-bar" :class="{ active: isfocus }">
		<div class="top-wrap">
			<div class="top-nav">
				<router-link to="/" tag="span">音乐馆</router-link>
				<router-link to="/list" tag="span">巅峰榜</router-link>
			</div>
			<div class="search-wrap" :class="{ active: isfocus }">
				<label for="search-input" v-show="!isfocus">搜索</label>
				<input type="search" id="search-input" ref="search" @focus="inputFocus"/>
				<span :class="{ active: isfocus }" v-tap="{methods:cancel}">取消</span>
			</div>
		</div>
		<transition name="fade">
			<div class="search-mark" v-if="isfocus"></div>
  		</transition>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				isfocus:false
			}
		},
		methods:{
			inputFocus(){
				this.isfocus = true
			},
			cancel(){
				this.isfocus = false
				this.$refs.search.blur()
			}
		}
	}
</script>

<style>
</style>