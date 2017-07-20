import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
	state: {
		playList: [],
		playID: null,
		isplay: false
	},
	mutations: {
		//点播push歌曲；
		newPlay(state,obj) {
			let playList = state.playList;
			let isList = false; //用于判断点播的歌曲是否存在歌曲列表
			let isId = null; //用于记录存在的歌曲id
			
			console.log(obj.list)
			//判断点播的歌曲是否存在正在播放的列表里面
			for(let i=0; i<playList.length; i++){
				if(playList[i] == obj.list){
					isList = true;
					isId = i
				}
			}
			
			// 判断点播的歌曲是否在歌曲列表
			if(isList){
				//如果在就从播放列表总播放歌曲；
				state.playID = isId;
			}else{
				//如果不再就将新的歌曲添加到播放列表；并播放
				state.playList.push(obj.list);
				if(obj.id){
					state.playID = obj.id;
				}else{
					state.playID = 0;
				}
			}
			state.isplay = true;
			
		},
		//从正在播放列表播放歌曲
		lsitPlay(state,iNow){
			state.playID = iNow;
			state.isplay = true;
		},
		//判断是否有歌曲正在播放
		isPlay(state){
			state.isplay = !state.isplay;
		},
		//播放下一首歌曲
		nextMusic(state){
			state.isplay = true;
			if(state.playID >= state.playList.length-1){
				state.playID = 0
			}else{
				state.playID++
			}
		},
		//播放上一首歌曲
		prevMusic(state){
			state.isplay = true;
			if(state.playID <= 0){
				state.playID = state.playList.length-1
			}else{
				state.playID--
			}
		}
	}

})

export default store