<template>
    <div class="container flex justify-center">
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10">
            <h2 class="text-gray-900 text-2lg font-medium title-font mb-5">Вход</h2>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input v-model="email" type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <div v-if="errors !== null" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span class="">{{ errors }}</span>
                </div>
            </div>

            <div class="relative mb-4">
                <label for="password" class="leading-7 text-sm text-gray-600">Пароль</label>
                <input v-model="password" type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                <div v-if="errors !== null" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span class="">{{ errors }}</span>
                </div>
            </div>
            <div class="column-2">
                <button :disabled="!isDisabled" @click.prevent="login" type="submit" value="login" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:opacity-50">Войти</button>
                <router-link :to="{ name: 'registration'}" class="text-blue-600 hover:text-blue-700 ml-4">Регистрация</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",

    data(){
        return{
            email: null,
            password: null,
            errors: null
        }
    },

    methods: {
        login(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/login',{ email: this.email, password: this.password })
                .then(res => {
                    localStorage.setItem('x_xsrf_token',res.config.headers['X-XSRF-TOKEN']);
                    localStorage.setItem('name',res.data.data.name);
                    console.log(res.data.data.name);
                    this.$router.push({name: 'games.index'})
                })
                .catch(error => {
                    console.log(error.response);
                })
            })
        }
    },

    computed: {
        isDisabled(){
            return this.email && this.password
        }
    }
}
</script>
