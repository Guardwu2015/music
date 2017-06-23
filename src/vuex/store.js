import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		playList: [],
		playID: null,
	},
	mutations: {
		newPlay(state,obj) {
			state.playList = obj.list;
			if(obj.id){
				state.playID = obj.id;
			}else{
				state.playID = 0;
			}
		}
	}

})

export default store