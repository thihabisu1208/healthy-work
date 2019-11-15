import axios from 'axios';

const api = axios.create({
    baseURL: "http://jz.jec.ac.jp/innovative"
});


export default {
    state: {
        status: '',
        token: localStorage.getItem('token') || ''
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        }
    },
    actions: {
        login({
            commit
        }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                api.post('/e_login.php', user)
                    .then(resp => {
                        const user = resp.data.e_id
                        const token = resp.data.token
                        localStorage.setItem('token', token)
                        // Add the following line:
                        this.$http.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({
            commit
        }) {
            return new Promise((resolve) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    }
}