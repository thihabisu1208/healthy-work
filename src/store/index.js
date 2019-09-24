import Vuex from 'vuex'
import Vue from 'vue'
import food from './modules/food'

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        food
    }
})