<template>
    <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-10" >
        <transition name="fade" appear>
            <div class="absolute w-full h-full bg-gray-900 opacity-50" @click="close"></div>
         </transition>
        <transition name="scale" appear>
            <div class="absolute max-h-full" :class="maxWidth" role="dialog" >
                <div class="container bg-white overflow-hidden md:rounded">
                    <div class="px-4 py-4 flex justify-between items-start">
                        <div class="mr-4">
                            <svg class="fill-current h-5 md:h-6 w-5 md:w-6 md:mr-1" xmlns="http://www.w3.org/2000/svg" :class="color" viewBox="0 0 20 20">
                                <path v-if="type === 'info'" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                <path v-if="type === 'warning'" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z" />
                                <path v-if="type === 'success'" d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
                                <path v-if="type === 'danger'" d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm16.32-4.9L5.09 16.31A8 8 0 0 0 16.32 5.09zm-1.41-1.42A8 8 0 0 0 3.68 14.91L14.91 3.68z" />
                            </svg>
                        </div>

                        <div class="max-h-full">
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="font-semibold" :class="color">{{ title }}</h3>

                                <div @click="close" class="text-2xl hover:text-gray-600 text-gray-500 cursor-pointer select-none flex leading-none">
                                    &#215;
                                </div>
                            </div>
                            <div>
                                <p class="text-gray-800 mr-7">
                                    {{ message }}
                                </p>

                                <div class="text-right mt-7">
                                    <button @click.prevent="close" :class="closeBtn" class="border mr-2 px-4 py-2 text-sm text-gray-600 hover:text-white rounded">{{ closeBtnText }}</button>
                                    <button @click.prevent="confirm" :class="confirmBtn"  class="mr-2 px-4 py-2 text-sm rounded text-white focus:outline-none">{{ confirmBtnText }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "ConfirmDialog",

    // data () {
    //     return {
    //         show: true,
    //     }
    // },

    props: {
        type: {
            type: String,
            default: "info",
        },
        title: {
            type: String,
            default: "Tittle",
        },
        message:{
            type: String,
            default: "Message",
        },
        closeBtnText:{
            type: String,
            default: "Нет",
        },
        confirmBtnText:{
            type: String,
            default: "Да",
        },
        width: {
            type: String,
            default: "md",
            validator: (value) => ["xs", "sm", "md", "lg", "full"].indexOf(value) !== -1,
        },
    },
    methods: {
        close() {
            // this.show = false
            this.$emit("closeDialogConfirm")
        },
        confirm() {
            this.$emit("confirm")
            this.close()
        },
    },
    computed: {
        maxWidth() {
            switch (this.width) {
                case "xs":
                    return "max-w-lg"
                case "sm":
                    return "max-w-xl"
                case "md":
                    return "max-w-2xl"
                case "lg":
                    return "max-w-3xl"
                case "full":
                    return "max-w-full"
            }
        },
        classes() {
            let color = null
            let closeBtn = null
            let confirmBtn = null
            switch (this.type) {
                case "info":
                    color = `text-cyan-600`
                    closeBtn = 'border-cyan-600 hover:bg-cyan-500'
                    confirmBtn = 'bg-cyan-500  hover:bg-cyan-400'
                    break
                case "warning":
                    color = `text-yellow-600`
                    closeBtn = 'border-yellow-600 hover:bg-yellow-500'
                    confirmBtn = 'bg-yellow-500  hover:bg-yellow-400'
                    break
                case "success":
                    color = `text-green-600`
                    closeBtn = 'border-green-600 hover:bg-green-500'
                    confirmBtn = 'bg-green-500  hover:bg-green-400'
                    break
                case "danger":
                default:
                    color = `text-red-600`
                    closeBtn = 'border-red-600 hover:bg-red-500'
                    confirmBtn = 'bg-red-500  hover:bg-red-400'
                    break
            }
            return {color, closeBtn, confirmBtn }
        },
        color(){
            return this.classes.color
        },
        closeBtn(){
            return this.classes.closeBtn
        },
        confirmBtn(){
            return this.classes.confirmBtn
        },
    },
};
</script>
