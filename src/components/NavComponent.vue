<template>
    <nav class="fixed bottom-0 w-full mx-auto bg-white border-t z-40">
        <div class="flex justify-between items-center lg:w-6/12 md:w-8/12 w-full mx-auto px-8 pb-5">
            <router-link to="/" class="flex flex-col py-6 items-center gap-1">
                <span class="text-lg lg:text-2xl" :class="getPageClass('home')"><i class="fas fa-home"></i></span>
                <span class="hidden md:inline-block text-xs font-medium" :class="getPageClass('home')">Home</span>
            </router-link>

            <router-link to="insight" class="flex flex-col py-6 items-center gap-1">
                <span class="text-lg lg:text-2xl" :class="getPageClass('insight')"><i class="fas fa-chart-simple"></i></span>
                <span class="hidden md:inline-block text-xs font-medium" :class="getPageClass('insight')">Insight</span>
            </router-link>

            <router-link to="create-transaction" class="flex flex-col py-6 items-center">
                <div class="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <span class="text-lg lg:text-2xl text-white"><i class="fas fa-plus"></i></span>
                </div>
            </router-link>

            <router-link to="transaction" class="flex flex-col py-6 items-center gap-1">
                <span class="text-lg lg:text-2xl" :class="getPageClass('transaction')"><i class="fas fa-arrow-right-arrow-left"></i></span>
                <span class="hidden md:inline-block text-xs font-medium" :class="getPageClass('transaction')">Transaction</span>
            </router-link>

            <router-link to="profile" class="flex flex-col py-6 items-center gap-1">
                <span class="text-lg lg:text-2xl text-gray-300" :class="getPageClass('profile')"><i class="fas fa-user"></i></span>
                <span class="hidden md:inline-block text-xs font-medium text-gray-300" :class="getPageClass('profile')">Profile</span>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavComponent",
    methods: {
        getPageClass(nav) {
            let name = this.$route.name

            if (nav == name) return 'text-gray-900'
            else return 'text-gray-300'
        }
    }
}
</script>

<style scoped>

</style>