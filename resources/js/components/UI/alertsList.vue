<template>
    <div class="pt-3 lg:w-1/4 z-50 md:w-full lg:fixed  lg:right-0 lg:mr-20 md:mr-10">
        <TransitionGroup name="list">
            <div v-for="notification in notifications"
                 :key="notification.id">
                <alert :notification="notification" />
            </div>
        </TransitionGroup>
    </div>
</template>

<script>
    import  alert from './alert.vue';
    import  { mapGetters } from 'vuex';
    export default {
        name: "alertsList",

        components : {
            alert,
        },

        computed: mapGetters({
            notifications: "getNotifications"
        })
    }
</script>

<style>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
    /*transform: translateY(30px);*/
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}

</style>
