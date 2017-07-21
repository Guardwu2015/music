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
			let playList = state.playList; //获取vuex的播放列表
			let isList = false; //用于判断点播的歌曲是否存在歌曲列表
			let isId = null; //用于记录存在的歌曲id
			
			console.log(playList)
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
				state.playID = 0;
			}else{
				state.playID++;
			}
		},
		//播放上一首歌曲
		prevMusic(state){
			state.isplay = true;
			if(state.playID <= 0){
				state.playID = state.playList.length-1;
			}else{
				state.playID--;
			}
		},
		//添加至下一首播放
		nextSong(state,obj){
			let playList = state.playList; //获取vuex的播放列表；
			let isList = false; //用于判断点播的歌曲是否存在歌曲列表；
			let isId = null; //用于记录存在的歌曲id；
			//先判断是否有歌曲id 正在播放；如果列表为空；则从0开始播放；
			if(obj.id == 0 && state.playID == null){
				console.log(1)
				state.playID = 0;
				state.playList.push(obj.list);
				state.isplay = true;
			}else{
				//如果正在播放的歌曲id不为null；则判断该歌曲是否已经存在于vuex播放列表，如果存在则返回他的位置；
				
				for(let i=0; i<playList.length; i++){
					if(playList[i] == obj.list){
						isList = true;
						isId = i;
					}
				};
				//如果添加的歌曲存在；则先删除之后在添加；
				if(isList){
					let i = 0;
					//如果添加的歌曲存在；则判断他是否正在播放；如果正在播放则不做处理；
					if(isId == state.playID){
						return false;
					}
					//如果添加的歌曲没有在播放；则判断他原来的位置是前还是后；因为等会删除该歌曲的时候坐标会变化；
					if(isId < obj.id){
						i = -1;
					}
					// 由于需要删除的歌曲在播放歌曲的前面；删除之后位置会发生变化；所以播放的id也要减；
					state.playID--
					playList.splice(isId,1);
					playList.splice(obj.id+i,0,obj.list)
				}else{
					playList.splice(obj.id,0,obj.list)
				}
			}
		},
		
	}

})

export default store