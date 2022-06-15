<template>
show all games
</template>

<script>
export default {
    name: "home",

    mounted() {
        this.getGames()
    },

    methods: {
        getGames() {
            axios.get('/api/games')
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style scoped>

</style>
