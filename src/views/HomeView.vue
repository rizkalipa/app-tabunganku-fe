<template>
    <div id="home-view">
        <div class="flex items-center justify-between">
            <div class="text-left">
                <p class="text-gray-500 text-xs md:text-sm">Good Morning</p>
                <h1 class="text-lg md:text-xl font-semibold">{{ userData.name }}</h1>
            </div>
            <router-link to="profile">
                <div class="w-12 h-12 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <span class="text-lg text-gray-500"><i class="far fa-user"></i></span>
                </div>
            </router-link>
        </div>

        <BalancePercentageComponent />

        <RecentSavingGoalComponent />

        <RecentTransactionComponent />
    </div>
</template>

<script>
import {mapState} from "vuex";
import BalancePercentageComponent from "@/components/home/BalancePercentageComponent.vue";
import RecentSavingGoalComponent from "@/components/home/RecentSavingGoalComponent.vue";
import RecentTransactionComponent from "@/components/home/RecentTransactionComponent.vue";

export default {
    name: 'HomeView',
    data() {
        return {
            isLoading: false
        }
    },
    components: {RecentTransactionComponent, RecentSavingGoalComponent, BalancePercentageComponent},
    computed: {
        ...mapState('UserStore', ['userData'])
    }
}
</script>

<style>
#home-view {
    --animate-duration: 0.2s;
}
</style>
