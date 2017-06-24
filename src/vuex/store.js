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
		newPlay(state,obj) {
			state.playList = obj.list;
			state.isplay = true;
			if(obj.id){
				state.playID = obj.id;
			}else{
				state.playID = 0;
			}
		},
		ksPlay(state){
			state.isplay = !state.isplay;
		},
		nextMusic(state){
			if(state.playID > state.playList.length){
				state.playID = 0
			}else{
				state.playID++
				console.log(state.playID)
			}
		}
	}

})

export default store