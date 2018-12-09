import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
        va1:{},
	},
	mutations:{
        updateVal(state, value) {
            state.va1 = value.va1;
        }
	},
	getters:{

	}
});
export default store;
