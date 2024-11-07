<template>
    <!-- Balance Section -->
    <section class="my-16 px-7 md:px-12">
        <div class="text-center mb-8">
            <p class="text-gray-600 flex items-center justify-center gap-2 mb-8 text-lg md:text-xl">
                Total Balance
                <span class="text-md md:text-lg"><i class="far fa-eye"></i></span>
            </p>

            <transition enter-active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
                <h2 v-if="!isBalanceLoading" class="relative text-4xl md:text-5xl lg:text-6xl font-bold">
                    <span class="text-gray-400 mr-1">IDR </span>
                    <span>{{ formatBalance }}</span>
                </h2>
                <div v-else class="w-10/12 p-5 mx-auto rounded shimmer-background" ></div>
            </transition>
        </div>

        <!-- Progress Bars -->
        <div class="relative space-y-4 mb-8">
            <transition enter-active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
                <div v-if="!isPercentageLoading" class="flex">
                    <div v-show="formatPercentage.income !== '0%'" :style="{ width: formatPercentage.income }" class="bg-emerald-400 p-5 rounded-lg mr-2"></div>
                    <div v-show="formatPercentage.expense !== '0%'" :style="{ width: formatPercentage.expense }" class="bg-rose-500 p-5 rounded-lg mr-2"></div>
                    <div v-show="formatPercentage.left !== '0%'" :style="{ width: formatPercentage.left }" class="bg-gray-300 p-5 rounded-lg"></div>
                </div>
                <div v-else class="flex">
                    <div class="w-[60%] p-5 mx-auto rounded shimmer-background mr-2"></div>
                    <div class="w-[40%] p-5 mx-auto rounded shimmer-background"></div>
                </div>
            </transition>
        </div>

        <div class="relative mb-8">
            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full bg-emerald-300 flex items-center justify-center mr-2"></div>
                    <p class="text-base">Income</p>
                </div>
                <p class="text-base text-gray-400">{{ formatPercentage.income }}</p>
            </div>
            <div class="flex justify-between items-center mb-4">
                <div class="flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center mr-2"></div>
                    <p class="text-base">Expenses</p>
                </div>
                <p class="text-base text-gray-400">{{ formatPercentage.expense }}</p>
            </div>
            <div class="flex justify-between items-center">
                <div class="flex items-center justify-center">
                    <div class="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center mr-2"></div>
                    <p class="text-base">Left</p>
                </div>
                <p class="text-base text-gray-400">{{ formatPercentage.left }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import {getBalance, getBalancePercentage} from "@/service/DepositService";

export default {
    name: "BalancePercentageComponent",
    data() {
        return {
            isBalanceLoading: false,
            isPercentageLoading: false,
            balance: 0,
            percentage: {
                income: null,
                expense: null,
                left: null
            }
        }
    },
    computed: {
        formatBalance() {
            return new Intl.NumberFormat('id-ID').format(this.balance)
        },
        formatPercentage() {
            return {
                income: this.percentage.income ? `${this.percentage.income}%` : '0%',
                expense: this.percentage.expense ? `${this.percentage.expense}%` : '0%',
                left: this.percentage.left ? `${this.percentage.left}%` : '0%'
            }
        }
    },
    methods: {
        async getBalance() {
            this.isBalanceLoading = true

            try {
                let params = {}
                let res = await getBalance(params)

                if (res && res.data && res.data.data) {
                    let data = res.data.data
                    this.balance = parseFloat(data.amount)
                }
            } catch (e) {
                console.log(e.response.data.message)
            }

            this.isBalanceLoading = false
        },
        async getBalancePercentage() {
            this.isPercentageLoading = true

            try {
                let params = {}
                let res = await getBalancePercentage(params)

                if (res && res.data && res.data.data) {
                    this.percentage = res.data.data
                    console.log(this.percentage)
                }
            } catch (e) {
                console.log(e.response.data.message)
            }

            this.isPercentageLoading = false
        }
    },
    mounted() {
        this.getBalance()
        this.getBalancePercentage()
    }
}
</script>

<style scoped>

</style>