<template>
    <div class="container bg-slate-50 overflow-hidden md:rounded border mt-2 p-4" :class="borderBg" role="alert">
        <div class="flex flex-row items-center">
            <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" :class="textColor" viewBox="0 0 20 20">
                <path v-if="notification.type === 'info'" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                <path v-if="notification.type === 'warning'" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z" />
                <path v-if="notification.type === 'success'" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
                <path v-if="notification.type === 'danger' || !notification.type" d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm16.32-4.9L5.09 16.31A8 8 0 0 0 16.32 5.09zm-1.41-1.42A8 8 0 0 0 3.68 14.91L14.91 3.68z" />
            </svg>

            <span class="font-semibold ml-2" :class="textColor">{{ tittle }}</span>

            <span @click.prevent="removeNotification(notification)" class="ml-auto text-2xl hover:text-gray-900 hover:opacity-75 hover:no-underline text-gray-500 cursor-pointer select-none flex leading-none">
                &#215;
            </span>
        </div>

        <div class="break-words ml-8">
            <p class="text-gray-800" :class="textColor">
                {{ notification.message }}
            </p>
        </div>
        <div class="progress mt-2 ml-8" :class="progressBar">
            <div class="progress-bar py-1" role="progressbar" :class="progressBarColor" :style="{ width: progress_bar_width + '%' }"  :aria-valuenow="progress_bar_width" aria-valuemin="0" aria-valuemax="100" ></div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "alert",

    props: ["notification"],

    data() {
        return {
            progress_bar_width: 100,
        };
    },

    methods:
        mapActions({
            removeNotification: "removeNotification"
        }),
    computed: {
        classes() {
            let textColor = null
            let progressBar = null
            let tittle = null
            let borderBg = null
            switch (this.notification.type) {
                case "info":
                    textColor    = 'text-cyan-600'
                    progressBar  = 'bg-cyan-600'
                    tittle       = 'Информация'
                    borderBg     = 'border-cyan-600'
                    break
                case "warning":
                    textColor    = 'text-yellow-600'
                    progressBar  = 'bg-yellow-600'
                    borderBg     = 'border-yellow-600'
                    tittle       = 'Предупреждение'
                    break
                case "success":
                    textColor    = 'text-green-600'
                    progressBar  = 'bg-green-600'
                    borderBg     = 'border-green-600'
                    tittle       = 'Успех'
                    break
                case "danger":
                default:
                    textColor    = 'text-red-600'
                    progressBar  = 'bg-red-600'
                    borderBg     = 'border-red-600'
                    tittle       = 'Ошибка'
                    break
            }
            return {textColor, progressBar, tittle, borderBg}
        },
        textColor() {
            return this.classes.textColor;
        },
        progressBarColor() {
            return this.classes.progressBar;
        },
        tittle() {
            return this.classes.tittle;
        },
        borderBg() {
            return this.classes.borderBg;
        },
        progressBar(){
            let currentTime = 0;
            let second = 20;
            this.timer = setInterval(() =>  {
                currentTime += 0.01;
                this.progress_bar_width = 100 - (currentTime * (100 / second));
                if (this.progress_bar_width <= 0 || currentTime >= second) {
                    this.progress_bar_width = 100
                    clearInterval(this.timer)
                    this.removeNotification(this.notification)
                }
                //return this.progress_bar_width;
            }, 10);
        }
    },
}
</script>
