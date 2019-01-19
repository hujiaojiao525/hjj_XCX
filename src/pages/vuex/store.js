import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
        va1:{},
        inputValue: '',
    },
	mutations:{
        updateInputValue(state, value) {
            state.inputValue = value.inputValue;
        }
	},
	getters:{

	}
});
export default store;
