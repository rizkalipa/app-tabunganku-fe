<template>
    <div class="relative overflow-hidden relative">
        <component :is="component" />

        <NotificationComponent />
    </div>
</template>

<script>
    import DefaultLayout from "@/layout/DefaultLayout.vue";
    import AuthLayout from "@/layout/AuthLayout.vue";
    import NotificationComponent from "@/components/NotificationComponent.vue";
    import {mapState} from "vuex";

    export default {
        components: {NotificationComponent, DefaultLayout, AuthLayout},
        computed: {
            ...mapState('NotificationStore', ['isOpen']),
            component() {
                if (this.$route.meta.layout) return this.$route.meta.layout
                return 'DefaultLayout'
            }
        }
    }
</script>

<style>
    html {
        -ms-touch-action: manipulation;
        touch-action: manipulation;
    }
</style>