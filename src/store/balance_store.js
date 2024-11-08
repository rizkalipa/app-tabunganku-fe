const BalanceStore = {
    namespaced: true,
    state: {
        balance: null,
        percentage: {
            income: null,
            expense: null,
            left: null
        }
    },
    mutations: {
        setBalance(state, value) {
            state.balance = value
        },
        setPercentage(state, value) {
            state.percentage = value
        }
    },
    actions: {}
}

export default BalanceStore