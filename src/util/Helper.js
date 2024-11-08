import store from "@/store";

class Helper {
    currency(value = 0) {
        return Intl.NumberFormat('id-ID').format(value)
    }

    errorNotification(message = '', icon = '') {
        store.commit('NotificationStore/openNotification', {
            message,
            icon
        })
    }

    isLoadingScreen(value) {
        store.commit('NotificationStore/setLoading', value)
    }
}

export default new Helper()