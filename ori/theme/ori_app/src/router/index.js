import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/templates/MainPage'
import RegistrationPage from '@/templates/RegistrationPage'
import BusinessPage from '@/templates/BusinessPage'
import MediaPage from '@/templates/MediaPage'
import PersonalRoomPage from '@/templates/PersonalRoomPage'
import NotFound from '@/templates/404Page'
import SharesPage from '@/templates/SharesPage'
import SharePage from '@/templates/SharePage'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
	 		path: '/share/:slug',
		  	component: SharePage,
		  	name: "SharePage",
		  	beforeEnter: (to, from, next) => {
		  		localStorage.single_share_slug = to.params.slug;
		  		
		  		next()
		  	},
		  	
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
  			path: '/registration/:user_led_number',
  			name: 'ReferalRegistrationPage',
      		redirect: to => {
      			localStorage.user_led_number = to.params.user_led_number;
      			
      			return '/registration';
      		}	
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

//     {
//   		path: '*',
//   		name: 'NotFound',
//       	component: NotFound
//     }
// ];

export default router;
