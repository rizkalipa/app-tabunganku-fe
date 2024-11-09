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

            <SumTransactionComponent />

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

        <ListTransactionComponent />
    </div>
</template>

<script>
import SumTransactionComponent from "@/components/insight/SumTransactionComponent.vue";
import ListTransactionComponent from "@/components/insight/ListTransactionComponent.vue";

export default {
    name: "InsightView",
    components: {ListTransactionComponent, SumTransactionComponent}
}
</script>

<style scoped>
    #insight-view {
        --animate-duration: 0.2s;
    }
</style>