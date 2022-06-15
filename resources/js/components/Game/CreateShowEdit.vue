<template>
edit
</template>

<script>
export default {
    name: "edit",
    created: function () {
        document.title = 'Game №' + this.$route.params.id + ' ' + this.$route.params.name + 'edit'
    }

}
</script>

<style scoped>

</style>
