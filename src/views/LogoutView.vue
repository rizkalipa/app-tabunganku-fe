<template>
    <div></div>
</template>

<script>
export default {
    name: "LogoutView",
    methods: {
        logout() {
            localStorage.clear()
            this.$store.commit('UserStore/setUserData', '')
            location.href = `${location.origin}`
        }
    },
    mounted() {
        this.logout()
    }
}
</script>

<style scoped>

</style>