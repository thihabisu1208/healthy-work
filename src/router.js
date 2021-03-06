import Vue from 'vue';
import Router from 'vue-router';
import HealthBalance from './views/HealthBalance.vue';
import HealthBalanceDay from './views/HealthBalanceDay.vue';
import FoodMenu from './views/FoodMenu.vue';
import SelectedFood from './views/SelectedFood.vue';
import Journal from './views/Journal.vue';
import Setting from './views/Setting.vue';
import Profile from './views/Profile.vue';
import ChangePassword from './views/ChangePassword.vue';
import HealthReport from './views/HealthReport.vue';
import AddHealthReport from './views/AddHealthReport.vue';
import Login from './views/Login.vue';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
	if (!store.getters.isAuthenticated) {
		next();
		return;
	}
	next('/');
};

const ifAuthenticated = (to, from, next) => {
	if (store.getters.isAuthenticated) {
		next();
		return;
	}
	next('/login');
};

const router = new Router({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/healthbalance',
			name: 'heathbalance',
			component: HealthBalance,
			props: true
		},
		{
			path: '/healthbalanceday',
			name: 'heathbalanceday',
			component: HealthBalanceDay,
			props: true
		},
		{
			path: '/foodmenu',
			name: 'foodmenu',
			component: FoodMenu,
			props: true
		},
		{
			path: '/selectedfood',
			name: 'selectedfood',
			component: SelectedFood,
			props: true
		},
		{
			path: '/journal',
			name: 'journal',
			component: Journal
		},
		{
			path: '/setting',
			name: 'setting',
			component: Setting
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile
		},
		{
			path: '/changepassword',
			name: 'changepassword',
			component: ChangePassword
		},
		{
			path: '/healthreport',
			name: 'healthreport',
			component: HealthReport
		},
		{
			path: '/addhealthreport',
			name: 'addhealthreport',
			component: AddHealthReport
		}
	]
});

export default router;
