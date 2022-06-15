import { createStore } from 'vuex'
import Game from './modules/game'
import Auth from './modules/auth'
import Notifications from './modules/notifications'
import Skeleton from './modules/skeleton';
import ValidErrors from './modules/validErrors';


// Create a new store instance.
const store = createStore({
    modules: {
        Auth,
        ValidErrors,
        Game,
        Notifications,
        Skeleton
    }
})

export default store
