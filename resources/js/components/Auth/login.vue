<template>
    <div class="container flex justify-center">
        <div class="lg:w-2/6 md:w-full bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10">
            <form @submit.prevent="login({ email: this.email,  password: this.password})" >
                <h2 class="text-gray-900 text-2xl font-medium title-font mb-5">Вход</h2>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input v-model="email" type="email" id="email" name="email" :class="errors && errors.email ? 'border-red-500' : ''" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>

                <div class="relative mb-4">
                    <label for="password" class="leading-7 text-sm text-gray-600">Пароль</label>
                    <input v-model="password" type="password" id="password" name="password" :class="errors && errors.password ? 'border-red-500' : ''" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="column-2">
                    <button :disabled="!isDisabled"  class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:opacity-50">Войти</button>
                    <router-link :to="{ name: 'registration'}" class="text-blue-600 hover:text-blue-700 ml-4">Регистрация</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
    name: "login",

    data(){
        return{
            email: null,
            password: null,
        }
    },
    created() {
        this.setErrorsState()
        this.setNotificationsState()
        document.title = 'Login'
    },
    methods: {
        ...mapActions([
            'setErrorsState',
            'setNotificationsState',
            'login'
        ]),
    },

    computed: {
        ...mapGetters({
            errors: 'getErrors',
        }),
        isDisabled(){
            return this.email && this.password
        },
    }

}
</script>
