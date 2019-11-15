import axios from 'axios'

const state = {
    foods: []
};

const getters = {}

const actions = {
    getFood({
        commit
    }) {
        axios
            .get("http://jz.jec.ac.jp/innovative/menu.php")
            .then(response => {
                let foods = response.data;
                commit('SET_FOOD', foods);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

const mutations = {
    SET_FOOD(state, foods) {
        state.foods = foods;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};