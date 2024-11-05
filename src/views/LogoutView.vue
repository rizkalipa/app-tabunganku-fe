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
            this.$router.push({ name: 'login' })
        }
    },
    mounted() {
        this.logout()
    }
}
</script>

<style scoped>

</style>