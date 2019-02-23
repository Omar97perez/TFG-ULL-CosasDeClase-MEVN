import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

new Vuex.Store({

    state: {
        preview: '',
    },
    getters: {
        preview: state => state.preview,
    },
    mutations: {
        ADD_PREVIEW(state, invId) { state.preview = invId },
    },
    actions: {
        addToPrev(context, invId) { context.commit('ADD_PREVIEW', invId); },
    },

});