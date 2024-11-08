const NotificationStore = {
    namespaced: true,
    state: {
        isOpen: false,
        isLoadingScreen: false,
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
        },
        setLoading(state, value) {
            state.isLoadingScreen = value
        }
    }
}

export default NotificationStore