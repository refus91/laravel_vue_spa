import router from "../../router";

const state = {
    game: [],
    games: [],
    gameTypes: [],
    createComplete: false
}

const getters = {
    getGames (state) {
        return state.games
    },
    getGame (state) {
        return state.game
    },
    getTypes (state) {
        return state.gameTypes
    },
    getCreateStatus (state) {
        return state.createComplete
    },
}

const mutations = {
    ADD_GAMES (state, games = []){
        //state.games.push(games)
        state.games = games
    },
    ADD_GAME (state, game = []){
        //state.games.push(games)
        state.game = game
    },
    ADD_TYPES (state, types = []){
        //state.games.push(games)
        state.gameTypes = types
    },
    DELETE_GAME(state, gameID) {
        //let index = state.games.findIndex((game) => game.id == gameID);
        let index = state.games.data.map(game => game.id).indexOf(gameID)
        if (index > -1) {
            state.games.data.splice(index, 1)
        }
    },
    // UPDATE_GAME(state, game) {
    //     let index = state.games.data.map(game => game.id).indexOf(game.id)
    //     if (index > -1) {
    //         state.games[index] = game
    //     }
    // },
    CREATE_STATUS(state) {
        state.createComplete = !state.createComplete
    },
}

const actions = {
    async listGames({ commit }, page = 1){
        commit('CHANGE_SKELETON_STATE')
        await axios.get('/api/games?page=' + page)
            .then(response => {
                commit('CHANGE_SKELETON_STATE')
                commit('ADD_GAMES', response.data.data)
            })
            .catch(error => {
                console.log(error);
                commit('ADD_NOTIFICATION', error.response.data)
            })
    },
    async listTypes({ commit }){
        await axios.get('/api/types')
            .then(response => {
                commit('ADD_TYPES', response.data.data)
            })
            .catch(error => {
                console.log(error);
            })
    },
    async listGameByTypes({ commit }, data){
        commit('CHANGE_SKELETON_STATE')
        await axios.get('/api/types/'+ data.type +'?page=' + data.page)
            .then(response => {
                commit('CHANGE_SKELETON_STATE')
                commit('ADD_GAMES', response.data.data)
            })
            .catch(error => {
                console.log(error);
                commit('CHANGE_SKELETON_STATE')
                commit('ADD_GAMES')
                // commit('ADD_NOTIFICATION', error.response.data)
            })
    },
    async showGame({ commit }, data){
        await axios.get('/api/games/' + data.id)
            .then(response => {
                 commit('ADD_GAME', response.data.data)
            })
            .catch(error => {
                if (error.response.status === 404){
                    router.push({name: 'error_404'})
                } else {
                    console.log(error.response);
                    commit('ADD_NOTIFICATION', error.response.data)
                    router.push({name: 'games.index'})
                }
            })
    },
    async createGame({ commit }, data){
        await axios.post('/api/games',{ name: data.name, studio: data.studio, types: data.types })
            .then(response => {
                commit('ADD_NOTIFICATION',response.data)
                commit('SET_ERRORS_STATE')
                commit('CREATE_STATUS')
            })
            .catch(error => {
                console.log(error.response);
                commit('ADD_NOTIFICATION', error.response.data)
                commit('SET_ERRORS_STATE', error.response.data.errors)
            })
    },
    async changeCreateStatus({ commit }){
        commit('CREATE_STATUS')
    },
    async updateGame({ commit }, data){
        await axios.put('/api/games/' + data.id, { name: data.name, studio: data.studio, types: data.types })
            .then(response => {
                commit('ADD_NOTIFICATION',response.data)
                commit('SET_ERRORS_STATE')
            })
            .catch(error => {
                console.log(error.response);
                commit('ADD_NOTIFICATION', error.response.data)
                commit('SET_ERRORS_STATE', error.response.data.errors)
            })
    },
    async deleteGame({ commit },data) {
        await axios.delete('/api/games/' + data.id)
            .then(response => {
                commit('DELETE_GAME',data.id)
                commit('ADD_NOTIFICATION',response.data)
                if (data.editForm && data.editForm === true)
                    router.push({name: 'games.index'})
            })
            .catch(error => {
                console.log(error);
                commit('ADD_NOTIFICATION', error.response.data)
            })
    },
}

export default {
    state, actions, mutations, getters
}
