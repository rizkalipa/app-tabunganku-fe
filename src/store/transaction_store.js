const TransactionStore = {
    namespaced: true,
    state: {
        transactions: null,
        expenseTransactions: null,
        recentTransactions: null,
        sumTransactions: {
            income: null,
            expense: null
        }
    },
    getters: {},
    mutations: {
        setTransactions(state, value) {
            state.transactions = value
        },
        setRecentTransactions(state, value) {
            state.recentTransactions = value
        },
        setSumTransactions(state, value) {
            state.sumTransactions = value
        },
        setExpenseTransactions(state, value) {
            state.expenseTransactions = value
        }
    },
    actions: {}
}

export default TransactionStore