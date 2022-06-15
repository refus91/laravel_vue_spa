<template>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-3xl">Привет, {{ userName ? userName : 'Гость' }}</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div v-if="!token">
                <router-link :to="{ name: 'login'}" class="text-gray-600 hover:text-blue-700">Вход</router-link>
                <span class="mx-3">|</span>
                <router-link :to="{ name: 'registration'}" class="text-gray-600 hover:text-blue-700">Регистрация</router-link>
            </div>
            <a @click.prevent="logout()" v-if="token" class="text-gray-600 hover:text-blue-700 cursor-pointer">Выход</a>
        </nav>
    </div>
    <alertsList/>
    <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in" >
            <div :key="route.path">
                <component :is="Component" />
            </div>
        </transition>
    </router-view>
</template>

<script>
    import  alertsList from './UI/alertsList.vue'
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "index",

        components : {
            alertsList
        },

        methods: {
            ...mapActions([
                'logout',
            ]),

        },
        computed: {
            ...mapGetters({
                userName: 'getUserName',
                token: 'getToken'
            }),
        },
    }
</script>

<style>
    a.router-link-active{
        border-bottom: 2px solid #3498db;
    }
    /*slide-left*/
    .slide-left-enter-active,
    .slide-left-leave-active {
        transition: transform .3s;
        transform: translateX(100vw);
    }

    .slide-left-enter,
    .slide-left-leave-to {
        transform: translateX(-100vw);
    }


    /*scale*/
    .scale-enter-active,
    .scale-leave-active {
        transition: all 0.5s ease;
    }

    .scale-enter-from,
    .scale-leave-to {
        opacity: 0;
        transform: scale(0);
    }

    /*fade*/
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

</style>
