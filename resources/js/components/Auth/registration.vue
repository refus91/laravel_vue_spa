<template>
    <div class="container flex justify-center">
        <div class="lg:w-2/6 md:w-full bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10">
            <div class="column-2">
                <span class="text-gray-900 text-2xl font-medium title-font mb-5">Регистрация</span>
                <router-link :to="{ name: 'login'}" class="text-blue-600 hover:text-blue-700 ml-4">Назад</router-link>
            </div>
            <form @submit.prevent="register({ name: this.name, email: this.email, password: this.password,  c_password: this.c_password})">
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Имя</label>
                    <input v-model="name" type="text" id="name" name="name" :class="errors && errors.name ? 'border-red-500' : ''" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                    <input v-model="email" type="email" id="email" name="email" :class="errors && errors.email ? 'border-red-500' : ''" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="password" class="leading-7 text-sm text-gray-600">Пароль</label>
                    <input v-model="password" type="password" id="password" name="password" :class="errors && errors.password ? 'border-red-500' : ''" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="password" class="leading-7 text-sm text-gray-600">Подтвердите пароль</label>
                    <input v-model="c_password" type="password" id="c_password" name="c_password" :class="errors && errors.c_password ? 'border-red-500' : ''" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <button :disabled="!isDisabled" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:opacity-50">Подтвердить</button>

            </form>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "registration",

    data(){
        return{
            name: null,
            email: null,
            password: null,
            c_password: null
        }
    },

    created() {
        this.setErrorsState()
        this.setNotificationsState()
        document.title = 'Registration'
    },

    methods: {
        ...mapActions([
            'setErrorsState',
            'setNotificationsState',
            'register'
        ]),
    },

    computed: {
        ...mapGetters({
            errors: 'getErrors',
        }),
        isDisabled() {
            return this.email && this.password && this.c_password && this.name
        },
    }
}
</script>

<style scoped>

</style>
