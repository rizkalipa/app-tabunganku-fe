<template>
    <div>
        <section class="mb-16">
            <div class="mb-8">
                <div class="flex justify-center items-center">
                    <h1 class="text-xl font-semibold">Profile</h1>
                </div>
            </div>
        </section>

        <!-- Profile Info -->
        <section class="mb-8">
            <div class="flex flex-col items-center space-y-4">
                <div class="relative mb-8">
                    <div class="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center">
                        <span class="text-4xl text-gray-300"><i class="fas fa-user-circle"></i></span>
                    </div>
                    <button class="absolute bottom-0 right-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                        <span class="text-white text-sm"><i class="fas fa-camera"></i></span>
                    </button>
                </div>
                <div class="text-center">
                    <h2 class="text-xl font-semibold">Nabila</h2>
                    <p class="text-gray-500 text-sm">nabila@example.com</p>
                </div>
            </div>
        </section>

        <!-- Stats -->
        <section class="">
            <div class="grid grid-cols-3 gap-4 mb-8">
                <div class="text-center p-4 rounded-2xl bg-gray-50">
                    <p class="text-2xl font-semibold">24</p>
                    <p class="text-gray-500 text-sm">Goals</p>
                </div>
                <div class="text-center p-4 rounded-2xl bg-gray-50">
                    <p class="text-2xl font-semibold">$2.4k</p>
                    <p class="text-gray-500 text-sm">Spent</p>
                </div>
                <div class="text-center p-4 rounded-2xl bg-gray-50">
                    <p class="text-2xl font-semibold">4</p>
                    <p class="text-gray-500 text-sm">Cards</p>
                </div>
            </div>
        </section>

        <!-- Profile Items -->
        <section class="mb-16">
            <div class="flex items-center gap-4 mb-5">
                <div>
                    <span class="text-gray-300 text-2xl"><i class="far fa-user"></i></span>
                </div>
                <div class="border-b w-full pb-2">
                    <p class="text-xs text-gray-300">Username</p>
                    <h2 class="text-base md:text-lg text-gray-500">nabila</h2>
                </div>
            </div>

            <div class="flex items-center gap-4 mb-5">
                <div>
                    <span class="text-gray-300 text-2xl"><i class="far fa-envelope"></i></span>
                </div>
                <div class="border-b w-full pb-2">
                    <p class="text-xs text-gray-300">Email</p>
                    <h2 class="text-base md:text-lg text-gray-500">nabila@example.com</h2>
                </div>
            </div>

            <div class="flex items-center gap-4 mb-5">
                <div>
                    <span class="text-gray-300 text-2xl"><i class="far fa-message"></i></span>
                </div>
                <div class="border-b w-full pb-2">
                    <p class="text-xs text-gray-300">Message</p>
                    <h2 class="text-base md:text-lg text-gray-500">+62 81723452345</h2>
                </div>
            </div>

            <div class="flex items-center gap-4 mb-5">
                <div>
                    <span class="text-gray-300 text-2xl"><i class="far fa-compass"></i></span>
                </div>
                <div class="border-b w-full pb-2">
                    <p class="text-xs text-gray-300">Location</p>
                    <h2 class="text-base md:text-lg text-gray-500">Jakarta, Indonesia</h2>
                </div>
            </div>
        </section>

        <!-- Logout Button -->
        <section class="px-6 py-8">
            <button class="w-full py-2 text-lg rounded-xl border border-rose-400 text-rose-600 font-medium hover:bg-rose-50 flex items-center justify-center gap-2">
                Sign Out
            </button>
        </section>
    </div>
</template>

<script>
export default {
    name: "ProfileView"
}
</script>

<style scoped>

</style>