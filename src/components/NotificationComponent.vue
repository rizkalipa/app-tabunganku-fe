<template>
    <transition enter-active-class="animate__animated animate__fadeIn" @after-enter="isShowBody = true">
        <div v-if="isOpen" id="notification-popup" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">

                    <transition
                        enter-active-class="animate__animated animate__bounceIn"
                    >
                        <div v-if="isShowBody" class="inner relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[500px]">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                    <div class="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg class="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                        </svg>
                                    </div>
                                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 class="text-base font-semibold text-gray-900" id="modal-title">Error</h3>
                                        <div class="mt-2">
                                            <p class="text-sm text-gray-500 break-all">
                                                {{ message }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button @click="closeModal()" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                                    Close
                                </button>
                            </div>
                        </div>
                    </transition>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
    name: "NotificationComponent",
    data() {
        return {
            isShowBody: false
        }
    },
    props: {

    },
    computed: {
        ...mapState('NotificationStore', ['isOpen', 'message', 'icon'])
    },
    methods: {
        ...mapMutations('NotificationStore', ['closeNotification']),
        closeModal() {
            this.closeNotification()
            this.isShowBody = false
        }
    }
}
</script>

<style scoped>
    #notification-popup {
        --animate-duration: .5s
    }
</style>