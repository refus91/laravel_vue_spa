import {createWebHistory, createRouter} from "vue-router";

export const routes = [
    {
        name: 'error_404',
        path: '/:pathMatch(.*)*', component: () => import('./components/error_404')
    },
    {
        name: 'home',
        path: '/', component: () => import('./components/index.vue'),
        meta: { auth: true}
    },
    {
        name: 'login',
        path: '/login', component: () => import('./components/Auth/login.vue'),
        meta: { auth: false },
    },
    {
        name: 'registration',
        path: '/registration', component: () => import('./components/Auth/registration.vue'),
        meta: { auth: false },
    },
    {
        name: 'games.index',
        path: '/games', component: () => import('./components/Game/index.vue'),
        meta: { auth: true }
    },
    {
        name: 'games.create',
        path: '/games/create', component: () => import('./components/Game/CreateShowEdit.vue'),
        meta: { auth: true }
    },
    // {
    //     name: 'games.edit',
    //     path: '/games/:id/edit', component: () => import('./components/Game/CreateShowEdit.vue'),
    //     meta: { auth: true }
    // },
    {
        name: 'games.show',
        path: '/games/:id', component: () => import('./components/Game/CreateShowEdit.vue'),
        meta: { auth: true },
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach(async (to, from,next) => {
    const token = localStorage.getItem('x_xsrf_token')
    const isAuth = to.matched.some((record) => record.meta.auth);
    //window.document.title = to.meta && to.meta.title ? to.meta.title : 'SPA APP';

    if (isAuth && !token) { // Если маршрут требует авторизацию и нет токена то выкидываем на логин
        return next({ path: "/login" })
    }
    else if (!isAuth && token) { //Чтобы после авторизации не мог зайти на логин и регистрацию
        if (to.name === "login" || to.name === "registration")
        return next({ path: "/" });
    }
    next();
})

export default router;
