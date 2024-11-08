<template>
    <div id="default-layout" class="relative lg:w-6/12 md:w-8/12 w-full mx-auto mt-8 text-3xl tracking-wide px-5 lg:p-0 mb-44">
        <router-view v-slot="{Component, route}">
            <transition
                :enter-active-class="route.meta.enterClass"
                :leave-active-class="route.meta.leaveClass"
                :name="route.meta.transitionName"
                mode="out-in"
            >
                <component :is="Component" />
            </transition>
        </router-view>
    </div>

    <!-- Bottom Navigation -->
    <NavComponent />

    <!-- Loading Page -->
    <LoadingScreenComponent v-if="isLoadingScreen" />
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
import LoadingScreenComponent from "@/components/LoadingScreenComponent.vue";
import {mapState} from "vuex";

export default {
    name: "DefaultLayout",
    components: {LoadingScreenComponent, NavComponent},
    computed: {
        ...mapState('NotificationStore', ['isLoadingScreen'])
    }
}
</script>

<style scoped>
    #default-layout {

    }
</style>