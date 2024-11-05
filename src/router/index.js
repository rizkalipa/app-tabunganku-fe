import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InsightView from "@/views/InsightView.vue";
import TransactionView from "@/views/TransactionView.vue";
import ProfileView from "@/views/ProfileView.vue";
import CreateTransactionView from "@/views/CreateTransactionView.vue";
import LoginView from "@/views/LoginView.vue";
import Store from "@/store";
import {UserProfile} from "@/service/AuthService";
import LogoutView from "@/views/LogoutView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            enterClass: 'animate__animated animate__fadeIn animate__faster',
            leaveClass: 'animate__animated animate__fadeOut animate__faster',
            isLogin: true
        }
    },
    {
        path: '/insight',
        name: 'insight',
        component: InsightView,
        meta: {
            enterClass: 'animate__animated animate__fadeIn animate__faster',
            leaveClass: 'animate__animated animate__fadeOut animate__faster',
            isLogin: true
        }
    },
    {
        path: '/transaction',
        name: 'transaction',
        component: TransactionView,
        meta: {
            enterClass: 'animate__animated animate__fadeIn animate__faster',
            leaveClass: 'animate__animated animate__fadeOut animate__faster',
            isLogin: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        meta: {
            enterClass: 'animate__animated animate__fadeIn animate__faster',
            leaveClass: 'animate__animated animate__fadeOut animate__faster',
            isLogin: true
        }
    },
    {
        path: '/create-transaction',
        name: 'create-transaction',
        component: CreateTransactionView,
        meta: {
            enterClass: 'animate__animated animate__fadeInUp animate__faster',
            isLogin: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {
            enterClass: 'animate__animated animate__fadeInUp animate__faster',
            layout: 'AuthLayout',
            isLogin: false
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogoutView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    let accessToken = localStorage.getItem('accessToken')
    // const {token} = to.query
    //
    // if (token) {
    //     try {
    //         const parameter = {
    //             token
    //         }
    //         const response = await validateCrossToken(parameter)
    //
    //         if (response && response.data.token) {
    //             localStorage.setItem('accessToken', response.data.token)
    //             accessToken = response.data.token
    //             const res = await UserProfile()
    //             if (res && res.data) {
    //                 Store.commit('UserStore/setUserData', res.data)
    //                 next()
    //             }
    //         }
    //     } catch (e) {
    //         next({name: 'Login'})
    //         localStorage.clear()
    //     }
    // }

    if (accessToken && !Store.state.UserStore.userData) {
        try {
            const res = await UserProfile()

            if (res && res.data) {
                Store.commit('UserStore/setUserData', res.data)
            }
        } catch (e) {
            if (e && e.response && e.response.status === 401) {
                localStorage.clear()
                Store.commit('UserStore/setUserData', '')
                next({
                    name: 'login'
                })
            }
        }
    } else if (accessToken && !to.meta.isLogin && (to.path === '/login' || to.path === '/register' || to.path === '/register-social')) {
        next({name: 'home'})
    } else if (to.meta.isLogin && !accessToken) {
        next({name: 'login'})
    }

    next()
})

export default router
