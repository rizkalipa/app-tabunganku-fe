<template>
    <section>
        <!-- Transactions -->
        <transition active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
            <div v-if="!isLoading" class="">
                <div v-for="(item, index) in transactions" :key="index" class="mb-12">
                    <div class="flex justify-between items-center mb-7">
                        <h2 class="text-base font-semibold">{{ index }}</h2>
                        <button class="text-gray-500 text-sm">See All</button>
                    </div>

                    <div class="space-y-7">
                        <div v-for="(subItem, subIndex) in item" :key="subIndex" class="flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <div class="w-9 md:w-12 h-9 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-sm md:text-lg"><i class="fas fa-receipt"></i></span>
                                </div>
                                <div>
                                    <h4 class="w-[200px] font-semibold text-sm md:text-lg truncate">{{ subItem.expense_type }}</h4>
                                    <p class="text-xs sm:text-sm text-gray-500">27 July 2024 10:40 AM</p>
                                </div>
                            </div>
                            <span class="font-semibold text-gray-900 text-sm">{{ $helper.currency(subItem.amount) }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-xl mb-4">
                    <div class="flex items-center gap-4">
                        <div class="w-9 md:w-12 h-9 md:h-12 shimmer-background rounded-full flex items-center justify-center"></div>
                        <div>
                            <div class="w-[250px;] p-3 rounded shimmer-background mb-2"></div>
                            <div class="w-[200px;] p-3 rounded shimmer-background"></div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                    <div class="flex items-center gap-4">
                        <div class="w-9 md:w-12 h-9 md:h-12 shimmer-background rounded-full flex items-center justify-center"></div>
                        <div>
                            <div class="w-[250px;] p-3 rounded shimmer-background mb-2"></div>
                            <div class="w-[200px;] p-3 rounded shimmer-background"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import {getTransactionByDate} from "@/service/TransactionService";
import {mapMutations, mapState} from "vuex";

export default {
    name: "ListTransactionComponent",
    data() {
        return {
            isLoading: false,
        }
    },
    computed: {
        ...mapState('TransactionStore', ['transactions'])
    },
    methods: {
        ...mapMutations('TransactionStore', ['setTransactions']),
        async getData() {
            if (this.transactions !== null) return
            this.isLoading = true

            try {
                let params = {}
                let res = await getTransactionByDate(params)

                if (res && res.data && res.data.data) {
                    this.setTransactions(res.data.data)
                }
            } catch (e) {
                this.$helper.errorNotification(e.response.data.message)
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