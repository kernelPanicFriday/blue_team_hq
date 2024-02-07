import {createRouter, createWebHistory } from 'vue-router';
import BasePage from "../components/BasePage.vue"
import HireMe from "../components/pages/HireMe.vue"

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: BasePage
        },
        {
            path: "/hire-me",
            name: 'hire-me',
            component: HireMe
        }
    ]
})
console.log(process.env.BASE_URL, 'right here <-')
export default router