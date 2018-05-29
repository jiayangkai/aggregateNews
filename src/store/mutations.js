import {
	GET_CHANNEL,
	FETCH_LOADING,
	GET_CHANNELNEWS,
	SET_CHNNELINDEX,
	SET_CHNNELNAME
} from './mutation_types.js'

export default {
    [GET_CHANNEL](state,data){
        state.channelarr = data
    },
    [FETCH_LOADING](state, data) {
		state.fetchLoading = data;
    },
    [GET_CHANNELNEWS](state, data) {
		state.channelNews = data;
    },
    [SET_CHNNELINDEX](state, data) {
		state.channelIndex = data;
    },
    [SET_CHNNELNAME](state, data) {
		state.channelName = data;
    }
}