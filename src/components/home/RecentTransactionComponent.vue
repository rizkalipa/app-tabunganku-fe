<template>
    <!-- Recent Transaction -->
    <section class="mb-16">
        <div class="flex justify-between items-center mb-7">
            <h3 class="text-base md:text-lg font-semibold">Recent Expenses</h3>
            <button class="text-gray-500 text-sm">See All</button>
        </div>

        <transition active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
            <div v-if="!isLoading">
                <div v-for="(item, index) in recentTransactions" :key="index" class="flex items-center mb-3 justify-between p-4 bg-gray-50 rounded-2xl">
                    <div class="flex items-center gap-4">
                        <div class="w-9 md:w-12 h-9 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <span class="text-sm md:text-lg"><i class="fas fa-receipt"></i></span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-sm md:text-lg">{{ item.notes }}</h4>
                            <p class="text-xs sm:text-sm text-gray-500">{{ item.format_date }}</p>
                        </div>
                    </div>
                    <span class="font-semibold text-gray-900 text-sm">{{ $helper.currency(item.amount) }}</span>
                </div>
            </div>
            <div v-else class="flex items-center justify-between p-4 border border-gray-200 rounded-2xl">
                <div class="flex items-center gap-4">
                    <div class="w-9 md:w-12 h-9 md:h-12 shimmer-background rounded-full flex items-center justify-center"></div>
                    <div>
                        <div class="w-[250px;] p-3 rounded shimmer-background mb-2"></div>
                        <div class="w-[200px;] p-3 rounded shimmer-background"></div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import {getTransaction} from "@/service/TransactionService";
import {mapMutations, mapState} from "vuex";

export default {
    name: "RecentTransactionComponent",
    data() {
        return {
            isLoading: false,
        }
    },
    computed: {
        ...mapState('TransactionStore', ['recentTransactions'])
    },
    methods: {
        ...mapMutations('TransactionStore', ['setRecentTransactions']),
        async getData() {
            if (this.recentTransactions !== null) return
            this.isLoading = true

            try {
                let params = {
                    limit: 3
                }
                let res = await getTransaction(params)

                if (res && res.data && res.data.data) {
                    this.setRecentTransactions(res.data.data)
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