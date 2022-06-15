import router from '../../router'

const state = {
    token:  localStorage.getItem('x_xsrf_token') || null,
    user_name: localStorage.getItem('name') || null,
}

const getters = {
    getToken (state) {
        return state.token
    },
    getUserName (state) {
        return state.user_name
    },
}

const mutations = {
    SET_AUTH (state, data = null)  {
        if (!data){
            state.token = null
            state.user_name = null
        } else {
            state.token = data.token
            state.user_name = data.user_name
        }
    },
}

const actions = {
    async register({ commit }, data){
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/api/register',{ name: data.name, email: data.email, password: data.password, c_password: data.c_password })
            .then( res => {
                const token = res.config.headers['X-XSRF-TOKEN']
                const user_name = res.data.data.name
                localStorage.setItem('x_xsrf_token', token)
                localStorage.setItem('name', user_name)
                commit('SET_AUTH', { token: token, user_name: user_name})
                commit('ADD_NOTIFICATION')
                commit('SET_ERRORS_STATE')
                router.push({name: 'games.index'})
            })
            .catch(error => {
                localStorage.clear()
                commit('SET_AUTH')
                commit('ADD_NOTIFICATION', error.response.data)
                commit('SET_ERRORS_STATE', error.response.data.errors)
                console.log(error.response);
            })

    },
    async login({ commit }, data){
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/api/login',{ email: data.email, password: data.password })
            .then(res => {
                const token = res.config.headers['X-XSRF-TOKEN']
                const user_name = res.data.data.name
                localStorage.setItem('x_xsrf_token', token)
                localStorage.setItem('name', user_name)
                commit('SET_AUTH', { token: token, user_name: user_name})
                commit('ADD_NOTIFICATION')
                commit('SET_ERRORS_STATE')
                router.push({name: 'games.index'})
            })
            .catch(error => {
                localStorage.clear()
                console.log(error.response);
                commit('SET_AUTH')
                commit('ADD_NOTIFICATION', error.response.data)
                commit('SET_ERRORS_STATE', error.response.data.errors)
            })
    },
    async logout({ commit }) {
        localStorage.clear()
        commit('SET_AUTH')
        commit('ADD_NOTIFICATION')
        commit('SET_ERRORS_STATE')
        await axios.post('/api/logout')
        await router.push({name: 'login'})
    },
}

export default {
    state, actions, mutations, getters
}
