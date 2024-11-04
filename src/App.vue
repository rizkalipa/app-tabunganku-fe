<template>
    <div id="app" class="overflow-hidden">
        <div class="lg:w-6/12 md:w-8/12 w-full mx-auto mt-8 text-3xl tracking-wide px-5 lg:p-0 mb-44">
            <router-view v-slot="{Component, route}">
                <transition
                    :enter-active-class="route.meta.enterClass"
                    :leave-active-class="route.meta.leaveClass"
                    mode="out-in"
                >
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>

        <!-- Bottom Navigation -->
        <NavComponent />
    </div>
</template>

<script setup>
    import NavComponent from "@/components/NavComponent.vue";
</script>

<style>
    #app {
        --animate-duration: 0.5s;
    }

    html {
        -ms-touch-action: manipulation;
        touch-action: manipulation;
    }
</style>