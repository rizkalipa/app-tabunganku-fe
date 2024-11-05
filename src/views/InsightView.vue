<template>
    <div id="insight-view">
        <section class="mb-16">
            <div class="mb-8">
                <div class="flex justify-between items-center">
                    <h1 class="text-xl font-semibold">Insights</h1>

                    <button class="flex items-center gap-2 px-4 py-1 rounded-full border border-gray-900">
                        <span class="text-sm">Monthly</span>
                        <span class="text-sm"><i class="fas fa-caret-down"></i></span>
                    </button>
                </div>
            </div>

            <!-- Income & Expenses Cards -->
            <div class="flex-1 lg:flex bg-gray-50 rounded-xl py-2 px-2 mb-8">
                <div class="w-full p-4 rounded-2xl">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                            <span class="text-xl text-emerald-600"><i class="fas fa-arrow-down-long"></i></span>
                        </div>
                        <div>
                            <p class="text-gray-600 text-sm">Income</p>
                            <p class="text-xl font-semibold">$2,239.87</p>
                        </div>
                    </div>
                </div>

                <div class="w-full p-4 rounded-2xl bg-white rounded-2xl">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">
                            <span class="text-xl text-pink-600"><i class="fas fa-arrow-up-long"></i></span>
                        </div>
                        <div>
                            <p class="text-gray-600 text-sm">Expenses</p>
                            <p class="text-xl font-semibold">1,234.75</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chart -->
            <div class="py-4">
                <div class="relative h-48">
                    <!-- Y-axis labels -->
                    <div class="absolute left-0 -z-10 w-full h-full flex flex-col justify-between text-xs text-gray-400">
                        <div class="flex items-center gap-2">
                            <p>15K</p>
                            <hr class="w-full border-gray-200 border-dashed">
                        </div>
                        <div class="flex items-center gap-2">
                            <p>10K</p>
                            <hr class="w-full border-gray-200 border-dashed">
                        </div>
                        <div class="flex items-center gap-2">
                            <p>5K</p>
                            <hr class="w-full border-gray-200 border-dashed">
                        </div>
                        <div class="flex items-center gap-2">
                            <p>1K</p>
                            <hr class="w-full border-gray-200 border-dashed">
                        </div>
                        <div class="flex items-center gap-2">
                            <p>0K</p>
                            <hr class="w-full border-gray-200 border-dashed">
                        </div>
                    </div>

                    <!-- Chart bars -->
                    <div class="ml-8 h-full flex items-end justify-between">
                        <div class="w-6 md:w-8 h-[30%] bg-gray-200 rounded-full"></div>
                        <div class="w-6 md:w-8 h-32 bg-gray-200 rounded-full"></div>
                        <div class="w-6 md:w-8 h-40 bg-gray-200 rounded-full relative">
                            <!-- Highlighted value -->
                            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded-lg">
                                $10,509.09
                            </div>
                            <div class="absolute top-0 left-0 w-full h-1/3 bg-pink-400 rounded-t-full"></div>
                        </div>
                        <div class="w-6 md:w-8 h-28 bg-gray-200 rounded-full"></div>
                        <div class="w-6 md:w-8 h-20 bg-gray-200 rounded-full"></div>
                        <div class="w-6 md:w-8 h-16 bg-gray-200 rounded-full"></div>
                        <div class="w-6 md:w-8 h-12 bg-gray-200 rounded-full"></div>
                    </div>

                    <!-- X-axis labels -->
                    <div class="ml-8 flex justify-between mt-2 text-xs text-gray-400">
                        <p class="w-6 md:w-8 text-center">S</p>
                        <p class="w-6 md:w-8 text-center">M</p>
                        <p class="w-6 md:w-8 text-center">T</p>
                        <p class="w-6 md:w-8 text-center">W</p>
                        <p class="w-6 md:w-8 text-center">T</p>
                        <p class="w-6 md:w-8 text-center">F</p>
                        <p class="w-6 md:w-8 text-center">S</p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <!-- Transactions -->
            <div class="">
                <div class="mb-8">
                    <div class="flex justify-between items-center mb-7">
                        <h2 class="text-xl font-semibold">Today</h2>
                        <button class="text-gray-500 text-sm">See All</button>
                    </div>

                    <div class="space-y-7">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <div class="w-9 md:w-12 h-9 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-sm md:text-lg"><i class="fas fa-receipt"></i></span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-base md:text-lg">Bills</h4>
                                    <p class="text-xs sm:text-sm text-gray-500">27 July 2024 10:40 AM</p>
                                </div>
                            </div>
                            <span class="font-semibold text-gray-900 text-lg">-$200</span>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <div class="w-9 md:w-12 h-9 md:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <span class="text-sm md:text-lg"><i class="fas fa-utensils"></i></span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-base md:text-lg">Foods & Drinks</h4>
                                    <p class="text-xs sm:text-sm text-gray-500">27 July 2024 1:20 PM</p>
                                </div>
                            </div>
                            <span class="font-semibold text-gray-900 text-lg">-$12</span>
                        </div>
                    </div>
                </div>

                <div class="mb-6">
                    <div class="flex justify-between items-center mb-7">
                        <h2 class="text-xl font-semibold">Yesterday</h2>
                        <button class="text-gray-500 text-sm">See All</button>
                    </div>

                    <div class="space-y-7">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-4">
                                <div class="w-9 md:w-12 h-9 md:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <span class="text-sm md:text-lg"><i class="fas fa-bus"></i></span>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-base md:text-lg">Transportation</h4>
                                    <p class="text-xs sm:text-sm text-gray-500">27 July 2024 10:40 AM</p>
                                </div>
                            </div>
                            <span class="font-semibold text-gray-900 text-lg">-$200</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    name: "InsightView"
}
</script>

<style scoped>
    #insight-view {
        --animate-duration: 0.2s;
    }
</style>