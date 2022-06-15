const state = {
    games: [],
}

const getters = {
    getGames (state) {
        return state.games
    }
}

const mutations = {
    ADD_GAMES (state, games){
        //state.games.push(games)
        state.games = games
        console.log(state.games);
    },
    // ADD_GAME (state, game){
    //     state.games.push(game);
    // },
}

const actions = {
    async listGames({ commit }, page = 1){
        await axios.get('/api/games?page=' + page)
            //.get('/api/games')
            .then(response => {
                // this.games = response.data.data
                commit('ADD_GAMES', response.data.data)
                //console.log(response.data.data.data)
            })
            .catch(error => {
                console.log(error);
            })




        // axios.get('/api/games')
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    },

}

export default {
    state, actions, mutations, getters
}
