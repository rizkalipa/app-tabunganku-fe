const GoalStore = {
    namespaced: true,
    state: {
        goals: null,
        recentGoals: null
    },
    getters: {},
    mutations: {
        setGoals(state, value) {
            state.goals = value
        },
        setRecentGoals(state, value) {
            state.recentGoals = value
        }
    },
    actions: {}
}

export default GoalStore