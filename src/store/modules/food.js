import axios from 'axios'

const state = {
    mainDish: [],
    sideDish: [],
    otherDish: [],
};

const getters = {
    mainDish: (state) => state.mainDish,
    sideDish: (state) => state.sideDish,
    otherDish: (state) => state.otherDish
}

const actions = {
    async fetchFoods({
        commit
    }) {
        const response = await axios.get('http://jz.jec.ac.jp/innovative/menu.php');
        for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].m_category === "主菜") {
                this.state.mainDish = response.data;
                console.log(this.state.mainDish);
            } else if (response.data[i].m_category === "副菜") {
                console.log(response.data[i].m_name);
            } else if (response.data[i].m_category === "ごはん" || response.data[i].category === "デザート") {
                console.log(response.data[i].m_name);
            }
        }
    }
}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
};