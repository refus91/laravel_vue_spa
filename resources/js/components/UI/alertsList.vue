<template>
    <transition name="slide" type="animation">
        <div class="rounded-t-lg pt-3 w-1/4 absolute right-0 mr-20" :class="wrapperColor" v-if="errors"  role="alert" >
            <div class="grid grid-cols-3 px-4 pb-3 border-b border-slate-100">
                <div v-if="errors.alert_type === 'info'" class="text-xl font-semibold col-span-2 flex justify-start items-center" :class="svgColor">
                    <svg class="fill-current h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                    Информация
                </div>
                <div v-if="errors.alert_type === 'warning'" class="text-xl font-semibold col-span-2 flex justify-start items-center" :class="svgColor">
                    <svg class="fill-current h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z" />
                    </svg>
                    Предупреждение
                </div>
                <div v-if="errors.alert_type === 'success'" class="text-xl font-semibold col-span-2 flex justify-start items-center" :class="svgColor">
                    <svg class="fill-current h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
                    </svg>
                    Успех
                </div>
                <div v-if="errors.alert_type === 'danger' || !errors.alert_type" class="text-xl font-semibold col-span-2 flex justify-start items-center" :class="svgColor">
                    <svg class="fill-current h-6 w-6 mr-2"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm16.32-4.9L5.09 16.31A8 8 0 0 0 16.32 5.09zm-1.41-1.42A8 8 0 0 0 3.68 14.91L14.91 3.68z" />
                    </svg>
                    Ошибка
                </div>
                <div class="cursor-pointer flex justify-end items-center" @click="clearErrors()">
                    <svg class="fill-current h-4 w-4 ml-4 font-bold" :class="progressBar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </div>
            </div>
            <div class="pt-3 px-4">
<!--                <svg class="fill-current h-14 w-14 mr-4" :class="svgColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
<!--                    <path v-if="errors.alert_type === 'info'" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />-->
<!--                    <path v-if="errors.alert_type === 'warning'" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z" />-->
<!--                    <path v-if="errors.alert_type === 'success'" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />-->
<!--                    <path v-if="errors.alert_type === 'danger' || !errors.alert_type" d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm16.32-4.9L5.09 16.31A8 8 0 0 0 16.32 5.09zm-1.41-1.42A8 8 0 0 0 3.68 14.91L14.91 3.68z" />-->
<!--                </svg>-->
                <p class="text-lg" :class="svgColor">
                    {{ errors.message }}
                </p>
            </div>
            <div class="progress mt-2">
                <div class="progress-bar py-1" role="progressbar" :class="progressBarColor" :style="{ width: progress_bar_width + '%' }"  :aria-valuenow="progress_bar_width" aria-valuemin="0" aria-valuemax="100" ></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "alert",

    data() {
        return {
            //show: false,
            progress_bar_width: 100,
        };
    },

    methods:{
        clearErrors(){
            this.$store.dispatch('setErrors', null)
        },
    },

    created(){
        this.progressBar
    },

    computed: {
        classes() {
            let wrapperColor = null;
            let svgColor = null;
            let progressBar = null;
            switch (this.errors.alert_type) {
                case "info":
                    wrapperColor = 'bg-cyan-200';
                    svgColor     = 'text-cyan-900';
                    progressBar  = 'bg-cyan-300';
                case "warning":
                    wrapperColor = 'bg-yellow-200';
                    svgColor     = 'text-yellow-900';
                    progressBar  = 'bg-yellow-300';
                case "success":
                    wrapperColor = 'bg-teal-200';
                    svgColor     = 'text-teal-900';
                    progressBar  = 'bg-teal-300';
                case "danger":
                    wrapperColor = 'bg-red-200';
                    svgColor     = 'text-red-900';
                    progressBar  = 'bg-red-300';
                default:
                    wrapperColor = 'bg-red-200';
                    svgColor     = 'text-red-900';
                    progressBar  = 'bg-red-300';
            }
            return {svgColor, wrapperColor, progressBar};
            //return {wrapperColor};
        },
        errors(){
            return this.$store.getters.getErrors
        },
        wrapperColor() {
            return this.classes.wrapperColor;
        },
        svgColor() {
            return this.classes.svgColor;
        },
        progressBarColor() {
            return this.classes.progressBar;
        },
        progressBar(){
            let currentTime = 0;
            let second = 20;
            this.timer = setInterval(() =>  {
                currentTime += 0.01;
                this.progress_bar_width = 100 - (currentTime * (100 / second));
                if (this.progress_bar_width <= 0 || currentTime >= second) {
                    //
                    this.clearErrors()
                    this.progress_bar_width = 100
                    clearInterval(this.timer)
                }
                return this.progress_bar_width;
            }, 10);
        }
    },
}
</script>

<style>
.slide-enter {
    opacity: 0;
    /* transform: translate(20px); */
}
.slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
}
.slide-leave {

}
.slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    opacity: 0;
    transition: opacity 1s;
}

@keyframes slide-in {
    from {
        transform: translateY(20px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0)
    }
    to {
        transform: translateY(20px)
    }
}
</style>
