class Helper {
    currency(value = 0) {
        return Intl.NumberFormat('id-ID').format(value)
    }
}

export default new Helper()