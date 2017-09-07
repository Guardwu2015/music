import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/homeView'
import Hot from '@/components/hotView'
import Browse from '@/components/browseView'
import Search from '@/components/searchView'

Vue.use(Router);

export default new Router({
	linkActiveClass: 'active',
	routes: [{
			path: '/Home',
			name: 'Home',
			component: Home,
		},
		{
			path: '/Hot',
			name: 'Hot',
			component: Hot,
		},
		{
			path: '/Browse',
			name: 'Browse',
			component: Browse,
		},
		{
			path: '/Search',
			name: 'Search',
			component: Search,
		},
		{
			path: '*',
			redirect: '/Home'
		}
	]
})
