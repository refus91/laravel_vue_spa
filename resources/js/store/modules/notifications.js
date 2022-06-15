import router from '../../router'

const state = {
    token:  localStorage.getItem('x_xsrf_token') || null,
    user_name: localStorage.getItem('name') || null,
    notifications: [],
    errorName: false,
    errorEmail: false,
    errorPassword: false,
    errorConfirmPassword: false,
}

const getters = {
    getToken (state) {
        return state.token
    },
    getUserName (state) {
        return state.user_name
    },
    getNotifications (state) {
        return state.notifications
    },
    getErrorName (state) {
        return state.errorName
    },
    getErrorEmail (state) {
        return state.errorEmail
    },
    getErrorPassword (state) {
        return state.errorPassword
    },
    getErrorConfirmPassword (state) {
        return state.errorConfirmPassword
    }
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
    ADD_NOTIFICATION (state, notification = null){
        if (!notification){
            state.notifications = []
            state.errorName = null
            state.errorEmail = null
            state.errorConfirmPassword = null
            state.errorPassword = null
        } else {
            state.notifications.push({
                type: notification.alert_type,
                message: notification.message,
                id: (Math.random().toString(36) + Date.now().toString(36)).slice(2) // Ставим уникальный id
            })
            state.errorEmail = !!(notification.errors && notification.errors.email)
            state.errorPassword = !!(notification.errors &&  notification.errors.password)
            state.errorConfirmPassword = !!(notification.errors &&  notification.errors.c_password)
            state.errorName = !!(notification.errors &&  notification.errors.name)
        }
    },
    REMOVE_NOTIFICATION (state, notificationToRemove){
        state.notifications = state.notifications.filter( notification => {
            return notification.id !== notificationToRemove.id
        })
    },
    RESET_ERROR_STATE(state){
        state.notifications = []
        state.errorName = null
        state.errorEmail = null
        state.errorConfirmPassword = null
        state.errorPassword = null
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
                router.push({name: 'games.index'})
            })
            .catch(error => {
                localStorage.clear()
                commit('SET_AUTH')
                commit('ADD_NOTIFICATION', error.response.data)
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
                router.push({name: 'games.index'})
            })
            .catch(error => {
                localStorage.clear()
                commit('SET_AUTH')
                commit('ADD_NOTIFICATION', error.response.data)
                console.log(error.response);
            })
    },
    async logout({ commit }) {
        localStorage.clear()
        commit('SET_AUTH')
        commit('ADD_NOTIFICATION')
        await axios.post('/api/logout')
        await router.push({name: 'login'})


         // await axios.post('/api/logout')
         //
         //    .then( res => {
         //        localStorage.clear()
         //        // commit('SET_AUTH', { token: null, user_name: null})
         //        // commit('ADD_NOTIFICATION', null)
         //        // console.log('successes' + res)
         //        // router.push({name: 'login'})
         //    })
         //    .catch(error => {
         //        console.log('error')
         //        console.log(error.response)
         //    })
    },
    removeNotification({ commit }, notification = null){
        commit('REMOVE_NOTIFICATION', notification)
    },
    resetErrorsState({ commit }){
        commit('RESET_ERROR_STATE')
    }
}

export default {
    state, actions, mutations, getters
}
