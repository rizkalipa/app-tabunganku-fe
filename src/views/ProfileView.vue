<template>
    <div id="profile-view">
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
                    <div class="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
                        <span class="text-4xl text-gray-300"><i class="fas fa-user-circle"></i></span>
                    </div>
                    <button class="absolute bottom-0 right-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center shadow-lg">
                        <svg class="fill-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                            <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="text-center">
                    <h2 class="text-xl font-semibold">{{ userData.name }}</h2>
                    <p class="text-gray-500 text-sm">{{ userData.email }}</p>
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
                    <svg class="text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <div class="border-b w-full pb-2">
                    <p class="text-xs text-gray-300">Username</p>
                    <h2 class="text-base md:text-lg text-gray-500">nabila</h2>
                </div>
            </div>

            <div class="flex items-center gap-4 mb-5">
                <div>
                    <svg class="text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>
                <div class="border-b w-full pb-2">
                    <p class="text-xs text-gray-300">Email</p>
                    <h2 class="text-base md:text-lg text-gray-500">nabila@example.com</h2>
                </div>
            </div>

            <div class="flex items-center gap-4 mb-5">
                <div>
                    <svg class="text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                </div>
                <div class="border-b w-full pb-2">
                    <p class="text-xs text-gray-300">Message</p>
                    <h2 class="text-base md:text-lg text-gray-500">+62 81723452345</h2>
                </div>
            </div>

            <div class="flex items-center gap-4 mb-5">
                <div>
                    <svg class="text-gray-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>
                <div class="border-b w-full pb-2">
                    <p class="text-xs text-gray-300">Location</p>
                    <h2 class="text-base md:text-lg text-gray-500">Jakarta, Indonesia</h2>
                </div>
            </div>
        </section>

        <!-- Logout Button -->
        <section class="px-6 py-8">
            <router-link to="logout" class="w-full py-2 text-lg rounded-xl border border-rose-400 text-rose-600 font-medium hover:bg-rose-50 flex items-center justify-center gap-2">
                Sign Out
            </router-link>
        </section>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "ProfileView",
    computed: {
        ...mapState('UserStore', ['userData'])
    }
}
</script>

<style scoped>
    #profile-view {
        --animate-duration: 0.2s;
    }
</style>