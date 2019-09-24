import axios from 'axios'

const state = {
    mainDish: [],
    sideDish: [],
    miniDish: [],
};

const getters = {
    mainDish: (state) => state.mainDish,
    sideDish: (state) => state.sideDish,
    miniDish: (state) => state.miniDish
}

const actions = {
    async fetchFoods({
        commit
    }) {
        const response = await axios.get('http://jz.jec.ac.jp/innovative/results.json');
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].category === "主菜") {
                commit('setMainDish', response.data[i].name);
                console.log(response.data[i].name);
            } else if (response.data[i].category === "副菜") {
                console.log(response.data[i].name);
            } else if (response.data[i].category === "ごはん" || response.data[i].category === "デザート") {
                console.log(response.data[i].name);
            }
        }
    }
}

const mutations = {
    setMainDish(state, food) {
        (state.mainDish = food)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};