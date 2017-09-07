<template>
  <div>

    <div ref="home">
      <div class="home-scroll-wrap">
        <div class="p-d-lg" style="box-sizing: border-box">
          <div class="title">音乐资料库</div>
          <div class="subTitle">最近添加</div>
          <ul class="song-list">
            <li v-for="(item,index) in List" v-tap="{methods:getSong,id:item.id,name:item.name}">
              <img src="../assets/images/cover.jpg" alt="">
              <p>{{ item.name }}</p>
              <span>播放列表</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--弹出歌曲列表-->
    <div class="song-group" :class="{active:IsSong}">
      <div class="back-row">
        <div class="back" v-tap="{methods:closeSong}">
          <i class="icon-back"></i>
          <span>音乐资料库</span>
        </div>
      </div>
      <transition name="fade">
        <div ref="SongList" class="Song-scroll-wrap" v-if="SongList">
          <div>
            <div class="Song-header">
              <dl>
                <dt><img src="../assets/images/cover.jpg" alt=""></dt>
                <dd>
                  <p>{{ name }}</p>
                  <span>{{SongList.update_time}} 更新</span>
                  <div class="more"><i class="icon-more"></i></div>
                </dd>
              </dl>
            </div>
            <div class="Song-body">
              <ul>
                <li>
                  <dl>
                    <dt><i class="icon-play"></i></dt>
                    <dd>全部播放</dd>
                  </dl>
                </li>
                <li v-for="(item,index) in SongList.songlist" v-tap="{methods:playSong, index:index}">
                  <dl class="songTile">
                    <dt>
                      <img :src="item.albumpic_small"/>
                    </dt>
                    <dd>
                      <p>{{ item.songname }}</p>
                      <span>{{ item.singername }}</span>
                      <div class="add">
                        <i class="icon-add"></i>
                      </div>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  const SongData = [
    {
      'id': 3,
      'name': '欧美',
    },
    {
      'id': 4,
      'name': '流行榜',
    },
    {
      'id': 5,
      'name': '内地',
    },
    {
      'id': 6,
      'name': '港台',
    },
    {
      'id': 16,
      'name': '韩国',
    },
    {
      'id': 17,
      'name': '日本',
    },
    {
      'id': 26,
      'name': '热歌',
    },
    {
      'id': 27,
      'name': '新歌',
    },
    {
      'id': 28,
      'name': '网络歌曲',
    },
    {
      'id': 36,
      'name': 'K 歌金曲',
    },
  ];

  export default {
    data() {
      return {
        List: SongData,
        SongList: null,
        IsSong: false,
        name: null,
        scrollBar: null
      }
    },
    methods: {
      //获取歌曲数据
      getSong(params) {
        const {name, id} = params;
        const local = this.$local.fetch(name)
        this.IsSong = true;
        this.name = name;

        //判断本地是否有数据
        if(!this.isEmptyObject(local)){
          this.SongList = local;
          this.SongScroll();
          return;
        }

        //本地没有数据则请求数据并缓存数据
        this.$http.get(this.$site + id).then(response => {
          this.SongList = response.data.showapi_res_body.pagebean;
          this.$local.save(name,this.SongList);
          console.log(this.SongList);
          this.SongScroll()
        }, response => {
          console.log("请求超时")
        })
      },
      //关闭歌曲列表
      closeSong() {
        this.IsSong = false;
        this.SongList = null;
      },
      //判断json
      isEmptyObject(e){
        let t;
        for(t in e)
          return !1;
        return !0;
      },
      //歌曲滚动条
      SongScroll(){
        this.$nextTick(() => {
          this.scrollBar = new BScroll(this.$refs.SongList, {});
        })
      },
      //播放歌曲
      playSong(params){
          //建立一个对象
          let obj = {};
          //用来存贮点击播放的歌曲
          obj.list = this.SongList.songlist[params.index];
          //每次点击歌曲都会往playList进行push 所以他的id刚好对应playList的长度
          obj.id = this.$store.state.playList.length;
          //将点击播放的歌曲提交到临时播放列表
          this.$store.commit("newPlay",obj);
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll(this.$refs.home, {})
      })
    }
  }
</script>
