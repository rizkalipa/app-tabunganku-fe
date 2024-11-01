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
                        <h1 class="text-lg md:text-xl font-semibold">Nabilbilbillaa</h1>
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
        <NavComponent />
    </div>
</template>

<script setup>
    import NavComponent from "@/components/NavComponent.vue";
</script>

<style>

</style>