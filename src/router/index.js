import Vue from 'vue'
import Router from 'vue-router'
import hotMusic from '@/components/hotMusic' //热歌
import fashion from '@/components/fashion' //流行榜
import europe from '@/components/europe' //欧美
import inland from '@/components/inland' //内地
import hktw from '@/components/hktw' //港台

Vue.use(Router)

export default new Router({
	mode: 'history',
	linkActiveClass: 'active',
	routes: [{
			//热歌
			path: '/hotMusic',
			name: 'hotMusic',
			component: hotMusic,
			meta: {
				index: 0,
				id: "26"
			}
		},
		{
			//流行榜
			path: '/fashion',
			name: 'fashion',
			component: fashion,
			meta: {
				index: 1,
				id: "4",
			}
		},
		{
			//欧美
			path: '/europe',
			name: 'europe',
			component: europe,
			meta: {
				index: 2,
				id: "3",
			}
		},
		{
			//内地
			path: '/inland',
			name: 'inland',
			component: inland,
			meta: {
				index: 3,
				id: "5",

			}
		},
		{
			//港台
			path: '/hktw',
			name: 'hktw',
			component: hktw,
			meta: {
				index: 4,
				id: "6",
			}
		},
		{
			path: '*',
			redirect: '/hotMusic'
		}
	]
})