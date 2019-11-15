import Vuex from 'vuex'
import Vue from 'vue'
import food from './modules/food'
import user from './modules/user'

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        food,
        user
    }
})