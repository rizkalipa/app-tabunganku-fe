<template>
    <div class="h-full flex items-center justify-center fixed right-0 left-0">
        <section class="relative w-9/12 h-full m-auto">
            <div class="my-10">
                <div class="w-6/12 mx-auto mb-8">
                    <img src="@/assets/tabunganku-logo.jpeg" alt="">
                </div>
                <h1 class="text-base                                                                                                                       text-gray-700 font-semibold text-center">Signin your Account</h1>
            </div>

            <div>
                <form class="mx-auto">
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm text-gray-400">Email</label>
                        <input v-model="credentials.email" type="text" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium outline-none focus:border-gray-500" />
                    </div>
                    <div class="mb-10">
                        <label for="email" class="block mb-2 text-sm text-gray-400">Password</label>
                        <input v-model="credentials.password" type="password" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-sm font-medium outline-none focus:border-gray-500" />
                    </div>

                    <button @click.prevent="doLogin()" type="submit" class="text-white bg-gray-900 hover:bg-gray-800 outline-none focus:border-none font-medium rounded-md text-sm w-full px-6 py-3 text-center">Submit</button>

                    <p class="text-sm text-center font-semibold text-gray-800 mt-8 underline">
                        Create New Account
                    </p>
                </form>
            </div>
        </section>

        <LoadingScreenComponent v-if="isLoading" />
    </div>
</template>

<script>
import {Login} from "@/service/AuthService";
import {UserProfile} from "@/service/AuthService";
import {mapMutations} from "vuex";
import LoadingScreenComponent from "@/components/LoadingScreenComponent.vue";

export default {
    name: "LoginView",
    components: {LoadingScreenComponent},
    data() {
        return {
            isLoading: false,
            credentials: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapMutations('UserStore', ['setUserData']),
        ...mapMutations('NotificationStore', ['openNotification']),
        async doLogin() {
            this.isLoading = true

            try {
                const res = await Login(this.credentials)

                if (res && res.data) {
                    localStorage.setItem('accessToken', res.data.data.access_token)
                    await this.doGetUserData()

                    await this.$router.push({ name: 'home' })
                }
            } catch (e) {
                this.$helper.errorNotification(e.response.data.message)
            }

            this.isLoading = false
        },
        async doGetUserData() {
            try {
                const res = await UserProfile()

                if (res && res.data) {
                    this.setUserData(res.data)
                }
            } catch (e) {
                this.$helper.errorNotification(e.response.data.message)
            }
        }
    }
}
</script>

<style scoped>

</style>