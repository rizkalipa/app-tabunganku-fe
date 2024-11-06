<template>
    <div id="home-view">
        <div class="flex items-center justify-between">
            <div class="text-left">
                <p class="text-gray-500 text-xs md:text-sm">Good Morning</p>
                <h1 class="text-lg md:text-xl font-semibold">{{ userData.name }}</h1>
            </div>
            <router-link to="profile">
                <div class="w-12 h-12 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <span class="text-lg text-gray-500"><i class="far fa-user"></i></span>
                </div>
            </router-link>
        </div>

        <!-- Balance Section -->
        <section class="my-16 px-7 md:px-12">
            <div class="text-center mb-8">
                <p class="text-gray-600 flex items-center justify-center gap-2 mb-8 text-lg md:text-xl">
                    Total Balance
                    <span class="text-md md:text-lg"><i class="far fa-eye"></i></span>
                </p>

                <transition enter-active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
                    <h2 v-if="!isLoading" class="relative text-4xl md:text-5xl lg:text-6xl font-bold">
                        <span class="text-gray-400 mr-1">IDR</span>
                        <span>10,000,000</span>
                    </h2>
                    <div v-else class="w-10/12 p-5 mx-auto rounded shimmer-background" ></div>
                </transition>
            </div>

            <!-- Progress Bars -->
            <div class="relative space-y-4 mb-8">
                <transition enter-active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
                    <div v-if="!isLoading" class="flex">
                        <div class="w-[50%] bg-emerald-400 p-5 rounded-lg mr-2"></div>
                        <div class="w-[20%] bg-rose-500 p-5 rounded-lg mr-2"></div>
                        <div class="w-[30%] bg-gray-300 p-5 rounded-lg"></div>
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
                    <p class="text-base text-gray-400">58%</p>
                </div>
                <div class="flex justify-between items-center mb-4">
                    <div class="flex items-center justify-center">
                        <div class="w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center mr-2"></div>
                        <p class="text-base">Expenses</p>
                    </div>
                    <p class="text-base text-gray-400">20%</p>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center justify-center">
                        <div class="w-4 h-4 rounded-full bg-gray-300 flex items-center justify-center mr-2"></div>
                        <p class="text-base">Left</p>
                    </div>
                    <p class="text-base text-gray-400">30%</p>
                </div>
            </div>
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

            <transition enter-active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
                <div
                    v-if="!isLoading"
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

        <!-- Recent Transaction -->
        <section class="mb-16">
            <div class="flex justify-between items-center mb-7">
                <h3 class="text-xl font-semibold">Recent Expenses</h3>
                <button class="text-gray-500 text-sm">See All</button>
            </div>

            <transition active-class="animate__animated animate__fadeInUp animate__slow" mode="out-in">
                <div v-if="!isLoading" class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
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
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: 'HomeView',
    data() {
        return {
            isLoading: true
        }
    },
    components: {},
    computed: {
        ...mapState('UserStore', ['userData'])
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 3000)
    }
}
</script>

<style>
#home-view {
    --animate-duration: 0.2s;
}
</style>
