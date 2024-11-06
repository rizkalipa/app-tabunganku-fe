<template>
    <div id="transaction-view">
        <section class="mb-16">
            <div class="mb-8">
                <div class="flex justify-between items-center">
                    <h1 class="text-xl font-semibold">Expenses</h1>

                    <button class="flex items-center gap-2 px-4 py-1 rounded-full border border-gray-900">
                        <span class="text-sm">Today</span>
                        <span class="text-sm"><i class="fas fa-caret-down"></i></span>
                    </button>
                </div>
            </div>

            <div class="mb-8">
                <BarChartComponent />
            </div>

            <div class="mb-8">
                <div class="flex justify-between items-center mb-7">
                    <h2 class="text-xl font-semibold">Today</h2>
                </div>

                <div class="space-y-7">
                    <div class="border-b border-gray-100">
                        <div class="flex items-start gap-4">
                            <div class="w-9 md:w-16 h-9 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <span class="text-sm md:text-lg"><i class="fas fa-receipt"></i></span>
                            </div>
                            <div class="inline-block w-10/12">
                                <h4 class="font-semibold text-base md:text-lg">Bills</h4>
                                <p class="text-xs sm:text-sm text-gray-500">27 July 2024 10:40 AM</p>

                                <div class="my-4">
                                    <p class="text-sm">Note :</p>
                                    <p class="text-sm">Bill for house electricity.</p>

                                    <span class="font-semibold text-gray-900 text-lg">-$200</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between border-b border-gray-100">
                        <div class="flex items-start gap-4">
                            <div class="w-9 md:w-16 h-9 md:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                <span class="text-sm md:text-lg"><i class="fas fa-utensils"></i></span>
                            </div>
                            <div class="inline-block w-10/12">
                                <h4 class="font-semibold text-base md:text-lg">Foods & Drinks</h4>
                                <p class="text-xs sm:text-sm text-gray-500">27 July 2024 1:20 PM</p>

                                <div class="my-4">
                                    <p class="text-sm">Note :</p>
                                    <p class="text-sm">Buy hokben with gofood for lunch.</p>

                                    <span class="font-semibold text-gray-900 text-lg">-$12</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-start gap-4">
                            <div class="w-9 md:w-16 h-9 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                <span class="text-sm md:text-lg"><i class="fas fa-bus"></i></span>
                            </div>
                            <div class="inline-block w-10/12">
                                <h4 class="font-semibold text-base md:text-lg">Transportation</h4>
                                <p class="text-xs sm:text-sm text-gray-500">27 July 2024 1:20 PM</p>

                                <div class="my-4">
                                    <p class="text-sm">Note :</p>
                                    <p class="text-sm">Topup flash when use transjakarta to office.</p>

                                    <span class="font-semibold text-gray-900 text-lg">-$5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BarChartComponent from "@/components/BarChartComponent.vue";

export default {
    name: "TransactionView",
    components: {BarChartComponent}
}
</script>

<style scoped>
    #transaction-view {
        --animate-duration: 0.2s;
    }
</style>