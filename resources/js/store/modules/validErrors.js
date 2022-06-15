
const state = {
    errors: [],
}

const getters = {
    getErrors (state) {
        return state.errors
    },
}

const mutations = {
    SET_ERRORS_STATE(state, data = null){
        state.errors = data
    },
}

const actions = {
    setErrorsState({ commit }, data = null){
        commit('SET_ERRORS_STATE', data)
    }
}

export default {
    state, actions, mutations, getters
}
