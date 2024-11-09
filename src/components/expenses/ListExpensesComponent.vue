<template>
    <div>
        <transition active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
            <div v-if="!isLoading">
                <div v-for="(item, index) in expenseTransactions" :key="index" class="mb-8">
                    <div class="flex justify-between items-center mb-7">
                        <h2 class="text-base font-semibold">{{ index }}</h2>
                    </div>

                    <div class="space-y-7">
                        <div v-for="(item, index) in item" :key="index" class="border-b border-gray-100">
                            <div class="flex items-start gap-4">
                                <div class="w-9 md:w-16 h-9 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-sm md:text-lg"><i class="fas fa-receipt"></i></span>
                                </div>
                                <div class="inline-block w-10/12">
                                    <h4 class="font-semibold text-sm md:text-lg">{{ item.expense_type }}</h4>
                                    <p class="text-xs sm:text-sm text-gray-500">{{ item.format_date }}</p>

                                    <div class="my-4 border border-gray-200 rounded px-3 py-2">
                                        <p class="text-xs">Note :</p>
                                        <p class="text-xs">{{ item.notes }}</p>

                                        <p class="font-semibold text-gray-900 text-lg mt-3">
                                            <span class="text-gray-300">IDR</span>
                                            {{ $helper.currency(item.amount) }}
                                        </p>
                                    </div>
                                </div>
                            </div>
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
    </div>
</template>

<script>
import {getTransactionByDate} from "@/service/TransactionService";
import {mapMutations, mapState} from "vuex";

export default {
    name: "ListExpensesComponent",
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        ...mapState('TransactionStore', ['expenseTransactions'])
    },
    methods: {
        ...mapMutations('TransactionStore', ['setExpenseTransactions']),
        async getData() {
            if (this.expenseTransactions !== null) return
            this.isLoading = true

            try {
                let params = {}
                let res = await getTransactionByDate(params)

                if (res && res.data && res.data.data) {
                    this.setExpenseTransactions(res.data.data)
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