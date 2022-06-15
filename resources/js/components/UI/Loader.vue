<template>
    <slot name="loading" v-if="isLoading"> </slot>
    <slot name="content" v-if="!isLoading"></slot>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: "Loader",

    computed:{
        ...mapGetters({
            isLoading: 'getLoading'
        }),
    }
}
</script>

