import Vue from "vue";
import Vuex from "vuex";
import inputModalStore from './modal/inputModalStore'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        inputModalStore : inputModalStore
    },
});