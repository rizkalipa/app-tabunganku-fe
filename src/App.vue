<template>
    <div id="app" class="overflow-hidden">
        <div class="lg:w-6/12 md:w-8/12 w-full mx-auto mt-8 text-3xl tracking-wide px-5 lg:p-0 mb-44">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        <span class="text-lg text-gray-500"><i class="far fa-user"></i></span>
                    </div>
                    <div>
                        <p class="text-gray-500 text-xs md:text-sm">Good Morning</p>
                        <h1 class="text-lg md:text-xl font-semibold">Nabilakuuu</h1>
                    </div>
                </div>
                <div class="relative">
                    <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 flex items-center justify-center">
                        <span class="text-lg text-gray-500"><i class="far fa-bell"></i></span>
                    </div>
                    <div class="absolute top-2 right-2 md:right-3 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
            </div>

            <router-view/>
        </div>

        <!-- Bottom Navigation -->
        <nav class="fixed bottom-0 w-full mx-auto bg-white border-t">
            <div class="flex justify-between items-center lg:w-6/12 md:w-8/12 w-full mx-auto px-8 pb-10 pt-5">
                <button class="flex flex-col items-center gap-1">
                    <span class="text-base lg:text-2xl text-gray-900"><i class="fas fa-home"></i></span>
                    <span class="hidden md:inline-block text-xs font-medium text-gray-900">Home</span>
                </button>
                <button class="flex flex-col items-center gap-1">
                    <span class="text-base lg:text-2xl text-gray-400"><i class="fas fa-chart-simple"></i></span>
                    <span class="hidden md:inline-block text-xs font-medium text-gray-400">Insight</span>
                </button>
                <button class="flex flex-col items-center">
                    <div class="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                        <span class="text-base lg:text-2xl text-white"><i class="fas fa-plus"></i></span>
                    </div>
                </button>
                <button class="flex flex-col items-center gap-1">
                    <span class="text-base lg:text-2xl text-gray-400"><i class="fas fa-arrow-right-arrow-left"></i></span>
                    <span class="hidden md:inline-block text-xs font-medium text-gray-400">Transaction</span>
                </button>
                <button class="flex flex-col items-center gap-1">
                    <span class="text-base lg:text-2xl text-gray-400"><i class="fas fa-user"></i></span>
                    <span class="hidden md:inline-block text-xs font-medium text-gray-400">Profile</span>
                </button>
            </div>
        </nav>
    </div>
</template>

<style>

</style>
