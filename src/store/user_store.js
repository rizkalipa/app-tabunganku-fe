const UserStore = {
    namespaced: true,
    state: {
        userData: null
    },
    getters: {
        getUser(state) {
            return state.userData
        }
    },
    mutations: {
        setUserData(state, value) {
            state.userData = value
        }
    },
    actions: {},
}

export default UserStore
