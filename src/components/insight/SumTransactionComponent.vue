<template>
    <section id="">
        <transition enter-active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
            <div v-if="!isLoading" class="flex-1 lg:flex bg-gray-50 rounded-xl py-2 px-2 mb-8">
                <div @click="changeTab('income')" class="w-full p-4 rounded-2xl cursor" :class="activeTab == 'income' ? 'bg-white' : ''">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                            <span class="text-xl text-emerald-600"><i class="fas fa-arrow-down-long"></i></span>
                        </div>
                        <div>
                            <p class="text-gray-600 text-sm">Income</p>
                            <p class="text-xl font-semibold"><span class="text-gray-300">IDR</span> {{ $helper.currency(formatSumTransaction.income) }}</p>
                        </div>
                    </div>
                </div>

                <div @click="changeTab('expense')" class="w-full p-4 rounded-2xl cursor" :class="activeTab == 'expense' ? 'bg-white' : ''">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">
                            <span class="text-xl text-pink-600"><i class="fas fa-arrow-up-long"></i></span>
                        </div>
                        <div>
                            <p class="text-gray-600 text-sm">Expenses</p>
                            <p class="text-xl font-semibold"><span class="text-gray-300">IDR</span> {{ $helper.currency(formatSumTransaction.expense) }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="flex-1 lg:flex bg-gray-50 rounded-xl py-2 px-2 mb-8">
                <div class="w-full p-4 rounded-2xl">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-2xl shimmer-background flex items-center justify-center"></div>
                        <div class="w-10/12">
                            <div class="w-5/12 p-3 rounded shimmer-background mb-2"></div>
                            <div class="w-full p-3 rounded shimmer-background mb-2"></div>
                        </div>
                    </div>
                </div>
                <div class="w-full p-4 rounded-2xl bg-white rounded-2xl">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-2xl shimmer-background flex items-center justify-center"></div>
                        <div class="w-10/12">
                            <div class="w-5/12 p-3 rounded shimmer-background mb-2"></div>
                            <div class="w-full p-3 rounded shimmer-background mb-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import {getSumTransaction} from "@/service/TransactionService";
import {mapMutations, mapState} from "vuex";

export default {
    name: "SumTransactionComponent",
    data() {
        return {
            isLoading: false,
            activeTab: 'expense'
        }
    },
    computed: {
        ...mapState('TransactionStore', ['sumTransactions']),
        formatSumTransaction() {
            return {
                income: this.sumTransactions.income ? this.sumTransactions.income : 0,
                expense: this.sumTransactions.expense ? this.sumTransactions.expense : 0
            }
        }
    },
    methods: {
        ...mapMutations('TransactionStore', ['setSumTransactions']),
        async getData() {
            if (this.sumTransactions.income !== null) return
            this.isLoading = true

            try {
                let params = {}
                let res = await getSumTransaction(params)

                if (res && res.data && res.data.data) {
                    this.setSumTransactions(res.data.data)
                }
            } catch (e) {
                this.$helper.errorNotification(e.response.data.message)
            }

            this.isLoading = false
        },
        changeTab(tab) {
            this.activeTab = tab
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style scoped>

</style>