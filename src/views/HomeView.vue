<template>
    <div>
        <!-- Balance Section -->
        <section class="my-16 px-7 md:px-12">
            <div class="text-center mb-8">
                <p class="text-gray-600 flex items-center justify-center gap-2 mb-8 text-lg md:text-xl">
                    Total Balance
                    <span class="text-md md:text-lg"><i class="far fa-eye"></i></span>
                </p>
                <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold">
                    <span class="text-gray-400">$</span>45,987.50
                </h2>
            </div>

            <!-- Progress Bars -->
            <div class="space-y-4 mb-8">
                <div class="flex">
                    <div class="w-[50%] bg-emerald-400 p-5 rounded-lg mr-2"></div>
                    <div class="w-[20%] bg-rose-500 p-5 rounded-lg mr-2"></div>
                    <div class="w-[30%] bg-gray-300 p-5 rounded-lg"></div>
                </div>
            </div>

            <div class="mb-8">
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center justify-center">
                        <div class="w-4 h-4 rounded-full bg-emerald-300 flex items-center justify-center mr-2"></div>
                        <p class="text-lg">Income</p>
                    </div>
                    <p class="text-xl text-gray-400">58%</p>
                </div>
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center justify-center">
                        <div class="w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center mr-2"></div>
                        <p class="text-lg">Expenses</p>
                    </div>
                    <p class="text-xl text-gray-400">20%</p>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center justify-center">
                        <div class="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center mr-2"></div>
                        <p class="text-lg">Left</p>
                    </div>
                    <p class="text-xl text-gray-400">30%</p>
                </div>
            </div>

<!--            <div>-->
<!--                <div class="flex items-center gap-4">-->
<!--                    <div class="flex-1">-->
<!--                        <div class="flex justify-between text-sm mb-1">-->
<!--                            <span>Income</span>-->
<!--                            <span>58%</span>-->
<!--                        </div>-->
<!--                        <div class="w-full h-2 bg-emerald-100 rounded-full">-->
<!--                            <div class="w-[58%] h-full bg-emerald-400 rounded-full"></div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="flex items-center gap-4">-->
<!--                    <div class="flex-1">-->
<!--                        <div class="flex justify-between text-sm mb-1">-->
<!--                            <span>Expenses</span>-->
<!--                            <span>32%</span>-->
<!--                        </div>-->
<!--                        <div class="w-full h-2 bg-pink-100 rounded-full">-->
<!--                            <div class="w-[32%] h-full bg-pink-400 rounded-full"></div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="flex items-center gap-4">-->
<!--                    <div class="flex-1">-->
<!--                        <div class="flex justify-between text-sm mb-1">-->
<!--                            <span>Left</span>-->
<!--                            <span>24%</span>-->
<!--                        </div>-->
<!--                        <div class="w-full h-2 bg-gray-100 rounded-full">-->
<!--                            <div class="w-[24%] h-full bg-gray-300 rounded-full"></div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </section>

        <!-- Saving Goals -->
        <section class="mb-8">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold">Saving Goals</h3>
                <button class="text-gray-500 text-sm">See All</button>
            </div>

            <div class="flex gap-4 mb-6">
                <button class="bg-gray-900 text-white px-6 py-2 rounded-full text-sm">Progress</button>
                <button class="text-gray-500 px-6 py-2 rounded-full text-sm border">Completed</button>
            </div>

            <div
                class="flex flex-nowrap gap-4 overflow-x-scroll hide-scroll-bar pb-5
                  [&::-webkit-scrollbar]:h-2
                  [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-track]:bg-gray-100
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-gray-200">
                <div class="inline-block">
                    <div class="p-4 w-[250px] md:w-[350px] rounded-2xl border border-gray-200">
                        <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                            <span class="text-lg"><i class="fas fa-plane"></i></span>
                        </div>
                        <h4 class="font-semibold mb-2 text-lg">Trip to Japan</h4>
                        <div class="flex justify-between text-sm text-gray-500 mb-2">
                            <span>$1k</span>
                            <span>$3k</span>
                        </div>
                        <div class="w-full h-2 bg-gray-100 rounded-full">
                            <div class="w-1/3 h-full bg-emerald-400 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div class="inline-block">
                    <div class="p-4 w-[250px] md:w-[350px] rounded-2xl border border-gray-200">
                        <div class="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                            <span class="text-lg"><i class="fas fa-laptop"></i></span>
                        </div>
                        <h4 class="font-semibold mb-2 text-lg">Macbook Pro M3</h4>
                        <div class="flex justify-between text-sm text-gray-500 mb-2">
                            <span>$400</span>
                            <span>$900</span>
                        </div>
                        <div class="w-full h-2 bg-gray-100 rounded-full">
                            <div class="w-1/2 h-full bg-emerald-400 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Recent Transaction -->
        <section class="mb-16">
            <div class="flex justify-between items-center mb-7">
                <h3 class="text-xl font-semibold">Recent Transaction</h3>
                <button class="text-gray-500 text-sm">See All</button>
            </div>

            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
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
        </section>
    </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>
