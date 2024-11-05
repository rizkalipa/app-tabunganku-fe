<template>
    <div class="lg:w-6/12 md:w-8/12 w-full h-screen mx-auto text-3xl tracking-wide py-8 lg:p-0 relative">
        <router-view v-slot="{Component, route}">
            <transition
                :enter-to-class="route.meta.enterClass"
                mode="out-in"
            >
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
export default {
    name: "AuthLayout"
}
</script>

<style scoped>

</style>