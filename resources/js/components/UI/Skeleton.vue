<template>
    <!--        Круг-->
    <div v-if="figure === 'circle'" class="animate-pulse flex items-center justify-center">
        <div :style="{ height: this.height, width: this.width }" class="rounded-full bg-gray-200"></div>
    </div>
    <!--        Строка-->
    <div v-if="figure === 'line'" class="animate-pulse flex">
        <div :style="{ height: this.height, width: this.width }" class="bg-slate-200 rounded m-2 p-3"></div>
    </div>

    <!--        Прямоугольник-->
    <div v-if="figure === 'rectangle'" class="animate-pulse flex space-x-4">
        <div :style="{ height: this.height, width: this.width }" class="bg-slate-200 rounded m-2 p-3"></div>
    </div>
</template>

<script>

export default {
    name: "Skeleton",

    props: {
        figure:{
            default: 'line', // line, circle, rectangle
            type: String,
        },
        height: {
            default: '1em',
            type: String,
        },
        width: {
            default: '100%',
            type: String,
        },
    },

}
</script>

