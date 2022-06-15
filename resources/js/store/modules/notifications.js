
const state = {
    notifications: [],
}

const getters = {
    getNotifications (state) {
        return state.notifications
    }
}

const mutations = {
    ADD_NOTIFICATION (state, notification = null){
        if (!notification){
            state.notifications = []
        } else {
            state.notifications.push({
                type: notification.alert_type,
                message: notification.message,
                id: (Math.random().toString(36) + Date.now().toString(36)).slice(2) // Ставим уникальный id
            })
        }
    },
    REMOVE_NOTIFICATION (state, notificationToRemove){
        state.notifications = state.notifications.filter( notification => {
            return notification.id !== notificationToRemove.id
        })
    },
}

const actions = {
    removeNotification({ commit }, notification = null){
        commit('REMOVE_NOTIFICATION', notification)
    },
    setNotificationsState({ commit }, data = null){
        commit('ADD_NOTIFICATION')
    }
}

export default {
    state, actions, mutations, getters
}
