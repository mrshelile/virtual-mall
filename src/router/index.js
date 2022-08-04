import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Market from '../views/Market.vue'
import Sales from '../views/Sales.vue'
import Deliveries from '../views/Deliveries.vue'
import LoginForm from '../views/LoginForm.vue'
import RegistrationForm from '../views/Register.vue'
import About from '../views/About.vue'
import InsideMarket from '../views/InsideMarket.vue'
import MarketProducts from '../views/MarketProducts.vue'
import Mall from '../views/Mall.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import StoreDash from '../components/StoresDash/Dashboard.vue'
import Stores from '../components/StoresDash/Products.vue'
import Orders from '../components/StoresDash/Orders.vue'
import Delivery from '../components/StoresDash/Delivery.vue'
import ProductsPage from '../components/StoresDash/ProductsPage.vue'
import RegisterCompany from '../views/RegisterCompany.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import updatePassword from '../views/UpdatePassword.vue'
const routes = [
    {
        path: '',
        name: 'Home',
        component: Home
    },
    {
        path:'/mall',
        name:'Mall',
        component:Mall,
        beforeEnter: () => {
            // reject the navigation
            
            let test=Boolean(JSON.parse(localStorage.getItem("isAgentSite")))
            if(test)
                return { name: 'StoreDash', }
            else
                return true;
          },
        children:[
            {
                path: 'market',
                name: 'Market',
                component: Market
            },
            {
                path: 'sales',
                name: 'Sales',
                component: Sales
            },
            {
                path: 'deliveries',
                name: 'Deliveries',
                component: Deliveries
            },
            {
                path: 'market/:id',
                name: 'InsideMarket',
                component: InsideMarket,
            },
            {
                path: 'market/:id/:id',
                name: 'MarketProducts',
                component: MarketProducts,
            },
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: About
            }
        ]
    },
    {
        path: '/register',
        name: 'Register',
        component: RegistrationForm
    },
    {   
        path:"/stores",
        name:'Stores',
        component:AdminDashboard,
        beforeEnter: () => {
            // reject the navigation
            let test=Boolean(JSON.parse(localStorage.getItem("isAgentSite")))
            
            
            if(test)
                return true
            
            // if(localStorage.getItem("isAgentSite")=='false')
            //     return { name: 'Mall', }
            // else
            else 
                return { name: 'Login', }
            
          },
        children:[
            {
                path: 'dashboard',
                name: 'StoreDash',
                component: StoreDash,
            }, 
            {
                path: 'store',
                name: 'Products',
                component: Stores,
            },
            {
                path: 'store/:id',
                name: 'ProductsPage',
                component: ProductsPage,
            },
            {
                path: 'orders',
                name: 'Orders',
                component: Orders,
            },
            {
                path: 'deliveries',
                name: 'Delivery',
                component: Delivery,
            },  
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginForm
    },
    {
        path: '/addMarket',
        name: 'AddMarket',
        component: RegisterCompany

    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword

    },
    {
        path: '/update-password/:unique',
        name: 'UpdatePassword',
        component: updatePassword

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router