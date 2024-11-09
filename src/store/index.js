import { createStore } from 'vuex'
import UserStore from "@/store/user_store";
import NotificationStore from "@/store/notification_store";
import BalanceStore from "@/store/balance_store";
import TransactionStore from "@/store/transaction_store";
import GoalStore from "@/store/goal_store";

export default createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        UserStore,
        NotificationStore,
        BalanceStore,
        TransactionStore,
        GoalStore
    }
})
