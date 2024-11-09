<template>
    <!-- Saving Goals -->
    <section class="mb-8">
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-base md:text-lg font-semibold">Saving Goals</h3>
            <button class="text-gray-500 text-sm">See All</button>
        </div>

        <div class="flex gap-4 mb-6">
            <button class="bg-gray-900 text-white px-4 py-2 rounded-full text-xs w-[150px]">Progress</button>
            <button class="text-gray-500 px-4 py-2 rounded-full text-xs w-[150px] border">Completed</button>
        </div>

        <transition enter-active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
            <div
                v-if="!isLoading"
                class="flex flex-nowrap gap-4 overflow-x-scroll hide-scroll-bar pb-5
                  [&::-webkit-scrollbar]:h-2
                  [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-track]:bg-gray-100
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-gray-200"
            >

                <div v-for="(item, index) in recentGoals" :key="index" class="inline-block">
                    <div class="p-4 w-[300px] md:w-[350px] rounded-2xl border border-gray-200">
                        <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                            <span class="text-lg"><i class="fas fa-laptop"></i></span>
                        </div>
                        <h4 class="font-semibold mb-2 text-base text-nowrap truncate">{{ item.name }}</h4>
                        <div class="flex justify-between text-sm text-gray-500 mb-2">
                            <span>0</span>
                            <span class="text-gray-500">{{ $helper.currency(item.max_amount) }}</span>
                        </div>
                        <div class="w-full h-2 bg-gray-100 rounded-full mt-5">
                            <div class="w-1/2 h-full bg-emerald-400 rounded-full"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div v-else class="flex gap-4">
                <div class="inline-block">
                    <div class="p-4 w-[250px] md:w-[350px] rounded-2xl border border-gray-200">
                        <div class="shimmer-background w-10 h-10 rounded-full flex items-center justify-center mb-3"></div>
                        <div class="w-full mt-8">
                            <div class="w-full p-3 mx-auto rounded shimmer-background mb-2"></div>
                            <div class="w-6/12 p-3 rounded shimmer-background"></div>
                        </div>
                    </div>
                </div>
                <div class="inline-block">
                    <div class="p-4 w-[250px] md:w-[350px] rounded-2xl border border-gray-200">
                        <div class="shimmer-background w-10 h-10 rounded-full flex items-center justify-center mb-3"></div>
                        <div class="w-full mt-8">
                            <div class="w-full p-3 mx-auto rounded shimmer-background mb-2"></div>
                            <div class="w-6/12 p-3 rounded shimmer-background"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import {getSavingGoals} from "@/service/SavingGoalService";
import {mapMutations, mapState} from "vuex";

export default {
    name: "RecentSavingGoalComponent",
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        ...mapState('GoalStore', ['recentGoals'])
    },
    methods: {
        ...mapMutations('GoalStore', ['setRecentGoals']),
        async getData() {
            if (this.recentGoals !== null) return
            this.isLoading = true

            try {
                let params = {
                    limit: 5,
                    status: ''
                }
                let res = await getSavingGoals(params)

                if (res && res.data && res.data.data) {
                    this.setRecentGoals(res.data.data)
                }
            } catch (e) {
                console.log(e.response.data.message)
            }

            this.isLoading = false
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>

</style>