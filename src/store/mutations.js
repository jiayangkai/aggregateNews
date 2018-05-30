import {
	SET_CHANNEL,
	FETCH_LOADING,
	SET_CHANNELNEWS,
	SET_CHNNELINDEX,
  SET_CHNNELNAME,
  SET_COLLECTNEWS
} from './mutation_types.js'

export default {
    [SET_CHANNEL](state,data){
        state.channelarr = data
    },
    [FETCH_LOADING](state, data) {
		state.fetchLoading = data;
    },
    [SET_CHANNELNEWS](state, data) {
		state.channelNews = data;
    },
    [SET_CHNNELINDEX](state, data) {
		state.channelIndex = data;
    },
    [SET_CHNNELNAME](state, data) {
		state.channelName = data;
    },
    [SET_COLLECTNEWS](state, data) {
		state.collectionNews.push(data);
    }
}