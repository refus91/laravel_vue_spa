<template>
    <div class="container flex justify-center">
        <div class="bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10">
            <form  @submit.prevent="submitForm">
                <div class="flex flex-col mb-4">
                    <span class="text-gray-900 text-2xl font-medium title-font mb-5">{{ tittle }}</span>
                    <router-link :to="{ name: 'games.index'}" class="flex justify-end underline text-blue-600 hover:text-blue-700 visited:text-purple-600 ml-4">Назад к списку игр</router-link>
                </div>
                <div class="relative mb-4">
                    <label for="email" class="leading-7 text-sm text-gray-600 pl-2">Название</label>
                    <input v-model="name" type="text" id="name" name="name" :class="errors && errors.name ? 'border-red-500' : ''" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <div class="relative mb-4">
                    <label for="studio" class="leading-7 text-sm text-gray-600 pl-2">Студия разработчик</label>
                    <input v-model="studio" type="text" id="studio" name="studio" :class="errors && errors.studio ? 'border-red-500' : ''" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                </div>
                <!--            <div class="relative mb-2">-->
                <span class="leading-7 text-sm text-gray-600 pl-2">Жанры</span>
                <!--            </div>-->
                <div class="grid md:grid-cols-3 grid-cols-2 gap-4 mb-4 p-2 border border-slate-300">
                    <label v-for="type in types" :key="type.id" >
                        <input type="checkbox" name="types[]" v-model="cheackedTypes" :value="type.id"  class="form-checkbox w-4 h-4">
                        <span class="ml-2 text-gray-600 font-semibold" >{{ type.name }}</span>
                    </label>
                </div>
                <div v-if="!this.id" class="grid grid-cols-1 gap-4">
                    <button :disabled="!isDisabled" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:opacity-50 flex justify-center uppercase">Подтвердить</button>
                </div>
                <div v-else class="grid grid-cols-2 gap-4">
                    <button  @click.prevent="showDialogConfirm = true" type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 uppercase rounded">Удалить</button>
                    <button :disabled="!isDisabled"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 uppercase rounded">Подтвердить</button>
                </div>
            </form>
        </div>
    </div>
<!--    ConfirmModal-->
    <ConfirmDialog
        v-if="showDialogConfirm"
        @closeDialogConfirm="toggleDialogConfirm"
        @confirm="deleteGame({id: this.id , editForm: true})"
        :type="'danger'"
        :title="'Удаление...'"
        :message="'Вы действительно хотите удалить игру - '+ this.name"
    ></ConfirmDialog>
<!--    /ConfirmModal-->
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ConfirmDialog from "../UI/ConfirmDialog";

export default {
    name: "CreateEditShow",

    components: {
        ConfirmDialog,
    },

    data(){
        return{
            id: this.$route.params.id,
            name: null,
            studio: null,
            cheackedTypes: [],
            showDialogConfirm: false,
        }
    },

    mounted() {
        this.listTypes()
    },

    created: function () {
        if (this.$route.params.id) {
            this.showGame({id: this.id}).then(() => {
                document.title = 'Game №' + this.id + ' ' + this.setName
                this.setStudio
                this.setCheckedTypes
            })
        } else {
           document.title = 'Game create'
        }
    },

    methods: {
        ...mapActions([
            'showGame',
            'createGame',
            'updateGame',
            'deleteGame',
            'listTypes',
            'setErrorsState',
            'changeCreateStatus'
        ]),
        toggleDialogConfirm(){
            this.showDialogConfirm = !this.showDialogConfirm
        },
        submitForm(){
            if(this.id){
                this.updateGame({ id: this.id, name: this.name,  studio: this.studio, types: this.cheackedTypes })
            } else {
                this.createGame({ name: this.name,  studio: this.studio, types: this.cheackedTypes })
                    .then(() => {
                        if (this.createStatus){
                            this.name = null
                            this.studio = null
                            this.cheackedTypes = []
                            this.changeCreateStatus()
                        }
                    })
            }

        }
    },

    computed:{
        ...mapGetters({
            game: 'getGame',
            types: 'getTypes',
            errors: 'getErrors',
            createStatus: 'getCreateStatus'
        }),
        tittle(){
            return this.id ?  'Игра "' + this.setName + '"' : 'Добавить игру'
        },
        setName(){
            return this.name = this.game.name
        },
        setStudio(){
            return this.studio = this.game.studio
        },
        setCheckedTypes(){
            let newCheckedTypes = this.cheackedTypes
            if(this.game && this.game.types){
                this.game.types.forEach(function (type) {
                    newCheckedTypes.push(type.id);
                });
            }
        },
        isDisabled(){
            return this.name && this.studio && this.cheackedTypes.length
        },
    },

}
</script>
