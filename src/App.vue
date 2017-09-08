<template>
  <div id="app" :class="{active:isMax}">
    <!--<v-header></v-header>-->
    <!--<v-nav v-on:setDir="routeDir"></v-nav>-->
    <!--<transition :name="thisDir">-->
    <!--<router-view class="app-body"></router-view>-->
    <!--</transition>-->
    <!--<play></play>-->
    <div class="app-wrap" :class="{active:isMax}">
      <keep-alive>
        <router-view class="app-view"></router-view>
      </keep-alive>
      <nav class="nav-view">
        <router-link to="/Home">
          <i class="icon-home"></i>
          <span>音乐资料库</span>
        </router-link>
        <router-link to="/Hot">
          <i class="icon-love"></i>
          <span>为你推荐</span>
        </router-link>
        <router-link to="/Browse">
          <i class="icon-music"></i>
          <span>浏览</span>
        </router-link>
        <router-link to="/Search">
          <i class="icon-search"></i>
          <span>搜索</span>
        </router-link>
      </nav>
    </div>
    <music-bar @MaxMusicShowEv="MaxMusicShowEv" @MusicAreaHide="MusicAreaHide"></music-bar>
  </div>
</template>

<script>
  import musicBar from '@/components/musicBar';

  export default {
    name: 'app',
    data(){
      return {
        isMax:false
      }
    },
    methods:{
      //进入全屏模式
      MaxMusicShowEv(){
        this.isMax = true;
      },
      //退出全屏模式
      MusicAreaHide(){
        this.isMax = false;
      }
    },
    components:{
      musicBar
    }
  }
</script>

<style lang="less">
  @import url("./assets/style/custom.less");
</style>
