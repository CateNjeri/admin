import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Dashboard from './views/dashboard/Dashboard.vue'
import Events from './views/events/Events.vue'
import EventForm from './views/events/EventForm.vue'
import AllSales from './views/sales/AllSales.vue'
import ActiveSales from './views/sales/ActiveSales.vue'
import PendingSales from './views/sales/PendingSales.vue'
import Validated from './views/sales/Validated.vue'
import EventTickets from './views/events/EventForm.vue'
import Banners from './views/banners/Banners.vue'
import Main from './views/Main.vue'
//import echarts from './views/charts/echarts.vue'


let routes = [
  // {
  //       path:'/',
  //       redirect:'/login'
  //
  // },
  {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/dashboard',
        component: Home,
        name: 'Home',
        leaf: true,
        iconCls: 'fa fa-dashboard',
        children: [{
            path: '/dashboard',
            component: Dashboard,
            name: 'Home'
        }, ]
    },
    // {
    //   path: '/banners',
    //   component: Home,
    //   name: 'Banners',
    //   iconCls: 'fa fa-tag',
    //   children: [{
    //     path: '/banners',
    //     component: Banners,
    //     name: 'Banners'
    //   }]
    //
    // },
    {
        path: '/events',
        component: Home,
        name: 'Events',
        iconCls: 'fa fa-tag',
        children: [{
            path: '/events',
            component: Events,
            name: 'Events'
        },{
                path: '/events',
                component: EventTickets,
                hidden:true,
                name: 'EventTickets'

            },{


                path: '/events/add',
                component: EventForm,
                hidden:true,
                name: 'Add Event'
            },
            {
                path: '/events/edit/:id',
                component: EventForm,
                hidden:true,
                name: 'Edit Event'
            }
        ]
        },


    {
        path: '/sales',
        component: Home,
        name: 'Sales',
        iconCls: 'fa fa-shopping-cart',
         children: [{
                 path: '/allSales',
                component: AllSales,
                name: 'All Sales'
             },
             {
                path: '/activeSales',
                component: ActiveSales,
                 name: 'Paid Sales'
             },
             {
                 path: '/pendingSales',
                 component: PendingSales,
                 name: 'Pending Sales'
             },
             {
                 path: '/validatedSales',
                 component: Validated,
                 name: 'Validated'
             },


         ]
     },

    {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404'
        }
    }
];

export default routes;
