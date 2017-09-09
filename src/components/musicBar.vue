<template>
  <div>
  <div class="music-controller" :class="{max:isActive}" ref="MaxMusic">
  <div class="music-bar" :class="{max:isActive}" ref="MusicBar">
    <audio v-if="playList[playID]" :src="playList[playID].url" controls="" autoplay="" ref="audio"
           style="width: 0px; height: 0px; overflow: hidden; opacity: 0"></audio>

    <!--&lt;!&ndash; 播放歌单区域 &ndash;&gt;-->
    <!--<div class="play-wrap" :class="{ active: isActive }">-->
    <!--<div class="play-body">-->
    <!--&lt;!&ndash; 关闭播放区域按钮 &ndash;&gt;-->
    <!--<div v-tap="{methods:musicAreaHide}" class="play-hide">-->
    <!--<i class="icon-down"></i>-->
    <!--</div>-->
    <!--&lt;!&ndash; 专辑大图 &ndash;&gt;-->
    <!--<div class="cover blurFlash" :class="{ active : flash , show:isActive }">-->
    <!--<img v-if="playID != null" :src="playList[playID].albumpic_big" />-->
    <!--</div>-->
    <!--&lt;!&ndash; 歌曲名字 &ndash;&gt;-->
    <!--<div class="songName" v-if="playID != null">{{ playList[playID].songname }}</div>-->
    <!--&lt;!&ndash; 歌手名字 &ndash;&gt;-->
    <!--<div class="singername" v-if="playID != null">{{ playList[playID].singername }}</div>-->
    <!--&lt;!&ndash; 歌曲控制器 &ndash;&gt;-->
    <!--<div class="play-handle">-->
    <!--&lt;!&ndash; 歌曲播放进度条 &ndash;&gt;-->
    <!--<div class="progress-wrap">-->
    <!--<div class="to">{{startTime}}</div>-->
    <!--<div class="progress-bar"><span :style="width"></span></div>-->
    <!--<div class="from">{{endTime}}</div>-->
    <!--</div>-->
    <!--&lt;!&ndash; 上一曲 &ndash;&gt;-->
    <!--<div class="prev" v-tap="{methods:prev}">-->
    <!--<i class="icon-audio-prev"></i>-->
    <!--</div>-->
    <!--&lt;!&ndash; 播放 &ndash;&gt;-->
    <!--<div class="play" v-if="!isplay" v-tap="{methods:play}">-->
    <!--<i class="icon-audio-plays"></i>-->
    <!--</div>-->
    <!--&lt;!&ndash; 暂停 &ndash;&gt;-->
    <!--<div class="pause" v-if="isplay" v-tap="{methods:pause}">-->
    <!--<i class="icon-audio-pause"></i>-->
    <!--</div>-->
    <!--&lt;!&ndash; 下一曲 &ndash;&gt;-->
    <!--<div class="next" v-tap="{methods:next}">-->
    <!--<i class="icon-audio-next"></i>-->
    <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash; 背景模糊区域 &ndash;&gt;-->
    <!--<div :style="{ width: img.width + 'px' ,height : img.height + 'px' }" class="blurFlash" :class="{ active : flash }" ref="blurFlash">-->
    <!--<svg :width="img.width" :height="img.height" class="banner-svg" id="banner_svg">-->
    <!--<defs>-->
    <!--<filter id="f">-->
    <!--<feImage id="svg_feImage" v-if="playID != null" xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="playList[playID].albumpic_big" x="0" y="0" :width="img.width" :height="img.height" preserveAspectRatio="xMidYMid slice"></feImage>-->
    <!--<feGaussianBlur stdDeviation="30"></feGaussianBlur>-->
    <!--</filter>-->
    <!--</defs>-->
    <!--<rect id="svg_rect" x="0" y="0" :width="img.width" :height="img.height" filter="url(#f)"></rect>-->
    <!--</svg>-->
    <!--</div>-->

    <!--</div>-->
    <!--</div>-->

    <!-- 歌曲播放列表 -->
    <!--<div class="playSongWrap" :class="{ active: isLists }">-->
    <!--<div class="playSongBody">-->
    <!--<div v-if="playList.length != 0">-->
    <!--<div class="playListTitle">播放列表({{ playList.length }})首</div>-->
    <!--<div  class="playList" ref="playList">-->
    <!--<ul>-->
    <!--<li v-for="(item,index) in playList" :class="{ active:index == playID }">-->
    <!--<div class="playListName" v-tap="{methods:getSong, index:index}">-->
    <!--{{ item.songname }}<span> - {{ item.singername }}</span>-->
    <!--<div class="movementWrap" v-if="index == playID">-->
    <!--<div class="movement" :class="{ active :!isplay}">-->
    <!--<span><i></i></span>-->
    <!--<span><i></i></span>-->
    <!--<span><i></i></span>-->
    <!--<span><i></i></span>-->
    <!--<span><i></i></span>-->
    <!--<span><i></i></span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="colse" v-tap="{methods:deleteSong, index:index}"><i class="icon-close"></i></div>-->
    <!--</li>-->
    <!--</ul>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div v-if="playList.length == 0" class="playListNull">-->
    <!--<p><i class="icon-undefined"></i></p>-->
    <!--<span>播放列表空空如也</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="playListClose" v-tap="{methods:listHide}">关闭</div>-->
    <!--<div class="closeSongBody" v-tap="{methods:listHide}"></div>-->
    <!--</div>-->

    <!-- 底部播放模块 -->
    <!--<div class="foot-bar" :class="{active:isActive}">-->
    <!--<dl class="play-bar-container" v-tap="{methods:musicAreaShow}">-->
    <!--<dt class="play-bar-image">-->
    <!--<img v-if="playID != null" :src="playList[playID].albumpic_small" />-->
    <!--<img src="../assets/images/cover.jpg" v-else />-->
    <!--</dt>-->
    <!--<dd class="play-bar-text" v-if="playID != null">-->
    <!--<p>{{ playList[playID].songname }}</p>-->
    <!--</dd>-->
    <!--<dd class="play-bar-text" v-else>-->
    <!--随便听听-->
    <!--</dd>-->
    <!--</dl>-->

    <!--</div>-->


    <!--迷你模式组件-->
    <div class="min-name" v-if="playID != null" v-tap="{methods:MaxMusicShowEv}">
      <p>{{ playList[playID].songname }}</p>
    </div>

    <div class="min-play-pause">
      <div class="icon" v-if="!isplay" v-tap="{methods:play}">
        <i class="icon-play"></i>
      </div>
      <div class="icon" v-if="isplay" v-tap="{methods:pause}">
        <i class="icon-pause"></i>
      </div>
    </div>

    <div class="min-next">
      <div class="icon" v-tap="{methods:next}">
        <i class="icon-next"></i>
      </div>
    </div>

    <!--封面组件-->
    <div class="cover-image Switch" v-tap="{methods:MaxMusicShowEv}" :class="{active:coverClass}">
      <img v-if="playID != null" :src="playList[playID].albumpic_big"/>
      <img src="../assets/images/cover.jpg" v-else/>
    </div>

    <!--全屏模式组件-->
    <div class="max-play-body">
      <!--关闭-->
      <div class="music-close" v-tap="{ methods:MusicAreaHide }" :class="{ active:pullDown }">
        <i></i>
        <i></i>
      </div>
      <!--进度条-->
      <div class="progress-wrap">
        <div class="progress-bar">
          <span :style="width">
            <i></i>
          </span>
        </div>
        <div class="progress-time">
          <div>{{startTime}}</div>
          <div>{{endTime}}</div>
        </div>
      </div>

      <div class="music-name">
        <!-- 歌曲 -->
        <p v-if="playID != null">
          {{ playList[playID].songname }}
        </p>
        <!-- 歌手名字 -->
        <span v-if="playID != null">
          {{ playList[playID].singername }}
        </span>
      </div>

      <!--按钮控制-->
      <div class="music-btn">
        <!-- 上一曲 -->
        <div class="prev" v-tap="{methods:prev}">
          <i class="icon-prev"></i>
        </div>
        <!-- 播放 -->
        <div class="play" v-if="!isplay" v-tap="{methods:play}">
          <i class="icon-play"></i>
        </div>
        <!-- 暂停 -->
        <div class="pause" v-if="isplay" v-tap="{methods:pause}">
          <i class="icon-pause"></i>
        </div>
        <!-- 下一曲 -->
        <div class="next" v-tap="{methods:next}">
          <i class="icon-next"></i>
        </div>
      </div>

      <div class="lyrics-row">
        <div class="subTitle">歌词</div>
        <div class="lyrics-btn">显示</div>
      </div>


    </div>
  </div>
  </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        pullDown:false,
        isLists: false,
        isActive: false, //用于判断播放区域是否点开
        endTime: "00:00", //歌曲结束时间
        startTime: "00:00", //歌曲播放时间
        progress: "0%", //进度条初始
        coverClass: false,
        width: {
          width: "0%"
        },
        MusicScroll: null,
      }
    },
    methods: {
      //播放
      play() {
        if (this.playID != null) {
          this.$store.commit("isPlay");
          this.$refs.audio.play();
          this.coverClass = false;
        }
      },
      //暂停
      pause() {
        if (this.playID != null) {
          this.$store.commit("isPlay")
          this.$refs.audio.pause();
          this.coverClass = true;
        }
      },
      //开启全屏
      MaxMusicShowEv() {
        if (this.playID != null) {
          this.isActive = true;
          this.$emit('MaxMusicShowEv')
        }

        //开启better-scroll
        this.$nextTick(() => {
          this.MusicScroll = new BScroll(this.$refs.MaxMusic, {
            probeType:2
          });

          //监听better-scroll 退出全屏
          this.MusicScroll.on('scroll', ({y}) => {
            if(y>10){
              this.pullDown = true;
            }else if(y<10){
              this.pullDown = false;
            }

            if(y>=30){
              this.MusicAreaHide();
              this.pullDown = false;
              this.$refs.MusicBar.style="";
            }
          });
          this.MusicScroll.on('touchEnd',({y})=>{
              this.pullDown = false;
          })

        })

      },
      //退出全屏
      MusicAreaHide() {
        if (this.playID != null) {
          this.isActive = false;
          this.$emit('MusicAreaHide');
          //禁用 better-scroll;
          this.MusicScroll.disable()
        }
      },
      //下一曲
      next() {
        this.$store.commit("nextMusic");
        this.coverClass = false;
      },
      //上一曲
      prev() {
        this.$store.commit("prevMusic")
        this.coverClass = false;
      },
      //弹出正在播放的列表歌曲
      listShow() {
        this.isLists = true;
        // 有歌曲存在的时候在初始化滚动条；不然会报错
//        if (this.playList.length > 0) {
//          this.$nextTick(() => {
//            this.scroll = new BScroll(this.$refs.playList, {})
//          })
//        }
      },
      //关闭正在播放的列表
      listHide() {
        this.isLists = false;
      },
      //从正在播放的列表中点播歌曲
      getSong(params) {
        this.$store.commit("lsitPlay", params.index);
      },
      //从正在播放的列表中删除歌曲
      deleteSong(params) {
        this.$store.commit("deleteSong", params.index);
//        this.scroll.refresh() //当数据更新；重新计算滚动条
      }

    },
    computed: {
      //从vuex中拿到正在播放的歌曲id
      playID() {
        return this.$store.state.playID
      },
      //从vuex中拿到正在播放的歌曲数组
      playList() {
        return this.$store.state.playList
      },
      //从vuex中拿到是否正在播放歌曲
      isplay() {
        return this.$store.state.isplay
      },
    },
    updated() {
      let _this = this
      //加这一层判断是为了当其他数据发生变化的时候;防止audio没有播放歌曲报错;
      if (this.playID != null) {
        //把audio存为一个变量可以防治没有歌曲播放的时候；获取他下面的属性值为undfined
        let audios = this.$refs.audio;

        //监听歌曲播放完之后播放下一曲
        audios.onended = () => {
          this.$store.commit("nextMusic")
        };

        //拿到歌曲播放的总时间长; 设置定时器用异步
        setTimeout(() => {
          let t, m, s
          t = parseInt(audios.duration);
          //在没有获取歌源的时候歌曲时间会为NaN；增加判断防止页面布局乱掉
          if (isNaN(t)) {
            t = 0
          }
          m = "0" + Math.floor(t / 60);
          s = t - Math.floor(t / 60) * 60;
          s = s < 10 ? "0" + s : s;
          _this.endTime = m + ":" + s;
        }, 30)

        //每秒更新进度条以及开始时间
        setTimeout(() => {
          let t, m, s, k;
          t = parseInt(audios.currentTime);
          m = Math.floor(t / 60);
          m = m < 10 ? "0" + m : m;
          s = t - Math.floor(t / 60) * 60;
          s = s < 10 ? "0" + s : s

          _this.startTime = m + ":" + s;

          setTimeout(() => {
            let w;
            k = parseInt(audios.duration);
            w = (t / k * 100).toFixed(2);
            _this.width.width = w + "%"
          }, 30)
        }, 1000);
      } else {
        //如果this.playID 为null 则初始化这些值
        this.endTime = "00:00"; //歌曲结束时间
        this.startTime = "00:00"; //歌曲播放时间
        this.progress = "0%"; //进度条初始
        this.width.width = "0%";
      }

    },
  }

</script>

<style>

</style>
