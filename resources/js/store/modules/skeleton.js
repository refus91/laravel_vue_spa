const state = {
    isLoading: false,
}

const getters = {
    getLoading (state) {
        return state.isLoading
    }
}

const mutations = {
    CHANGE_SKELETON_STATE (state){
        state.isLoading ? state.isLoading = false : state.isLoading = true
    },
}

const actions = {
    changeSkeletonTate({ commit }){
         commit('CHANGE_SKELETON_STATE')
    },
}

export default {
    state, actions, mutations, getters
}
