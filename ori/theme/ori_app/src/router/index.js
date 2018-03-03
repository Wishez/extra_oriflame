import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/components/Main'
import RegistrationPage from '@/components/Registration'
import BusinessPage from '@/components/Business'
import MediaPage from '@/components/Media'
import PersonalRoomPage from '@/components/PersonalRoom'
import NotFound from '@/components/404'
import SharesPage from '@/components/Shares'
import SharePage from '@/components/Share'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
	 		path: '/share/:slug',
		  	component: SharePage,
		  	name: "SharePage"
	 	},
	 	{
	 		path: '/media',
		  	component: MediaPage,
		  	name: "MediaPage"
	 	},
	 	{
	 		path: '/shares',
		  	component: SharesPage,
		  	name: "SharesPage"
	 	},
	 	{
	 		path: '/business',
		  	component: BusinessPage,
		  	name: "BusinessPage"
	 	},
	 	{
	 		path: '/registration',
		  	component: RegistrationPage,
		  	name: "RegistrationPage"
	 	},
	 	{
	 		path: '/',
		  	component: MainPage,
		  	name: "MainPage"
	 	},
	 	{
	 		path: '*',
		  	component: NotFound,
		  	name: "404"
	 	},
	]
});

// 	{
//       path: '/',
//       name: 'MainPage',
//       component: MainPage
//     },
//     {
//   		path: '/registration',
//   		name: 'RegistrationPage',
//       	component: RegistrationPage
//     },
//     {
//   		path: '/business',
//   		name: 'BusinessPage',
//       	component: BusinessPage
//     },
//     {
//   		path: '/shares',
//   		name: 'SharesPage',
//       	component: SharesPage
//     },
//     {
//   		path: '/media',
//   		name: 'MediaPage',
//       	component: MediaPage
//     },
//     {
//   		path: '/share/:slug',
//   		name: 'SharePage',
//       	component: SharePage
//     },
//     // {
//   		// path: '/registration/:consultant_num',
//   		// name: 'RegistrationPage',
//     //   	component: RegistrationPage
//     // },
//     {
//   		path: '*',
//   		name: 'NotFound',
//       	component: NotFound
//     }
// ];

export default router;
