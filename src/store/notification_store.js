const NotificationStore = {
    namespaced: true,
    state: {
        isOpen: false,
        message: '',
        icon: ''
    },
    getters: {},
    mutations: {
        openNotification(state, value) {
            state.isOpen = true
            state.message = value.message
            state.icon = value.icon
        },
        closeNotification(state) {
            state.isOpen = false
            state.message = ''
            state.icon = ''
        }
    }
}

export default NotificationStore