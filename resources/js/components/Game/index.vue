<template>
    <div class="container mx-3">
        <div class="flex md:justify-between justify-end mt-2 p-4 md:flex-row flex-col">
            <div class="flex flex-row items-center">
                <span class="text-xl font-semibold">Игры:</span>
                <div class="relative ml-3">
                    <select v-model="selectedType"  @change="changeCallsForPaging" class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option value="all">Все</option>
                        <template v-for="type in types" :key="type.id">
                            <option :selected="selectedType" :value="type.name">{{ type.name }}</option>
                        </template>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
            </div>
            <div class="md:mt-0 mt-4 flex justify-start items-end">
                <router-link :to="{ name: 'games.create'}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 uppercase rounded">Добавить игру</router-link>
            </div>
        </div>
        <div class="w-full mx-auto overflow-auto my-3">
            <table class="table-auto w-full text-left whitespace-no-wrap striped">
                <thead>
                    <tr class="text-lg tracking-wider text-gray-900 bg-gray-100">
                        <th class="px-4 py-3 text-center">#</th>
                        <th class="px-4 py-3">Название</th>
                        <th class="px-4 py-3">Студия</th>
                        <th class="px-4 py-3">Жанр</th>
                        <th class="px-4 py-3"></th>
                    </tr>
                </thead>
                <Loader>
                    <template v-slot:loading>
                        <tbody v-for="i in 10" :key="i">
                            <tr>
                                <td><Skeleton></Skeleton></td>
                                <td><Skeleton></Skeleton></td>
                                <td><Skeleton></Skeleton></td>
                                <td><Skeleton></Skeleton></td>
                                <td><Skeleton></Skeleton></td>
                            </tr>
                        </tbody>
                    </template>
                    <template v-slot:content>
                        <tbody v-if="games.data && games.data.length">
                            <tr v-for="(game, index) in games.data" :key="game.id" class="hover:bg-gray-100 even:bg-gray-50">
                                <td class="px-4 py-3 text-center">{{ index + 1 }} </td>
                                <td class="px-4 py-3">
                                    <router-link :to="{ name: 'games.show', params: { id: game.id }}" class="underline text-blue-600 hover:text-blue-700 visited:text-purple-600">{{ game.name }}</router-link>
                                </td>
                                <td class="px-4 py-3">{{ game.studio }}</td>
                                <td class="px-4 py-3 text-lg text-gray-900">
                                    <template v-for="(type, i) in game.types">
                                        {{ type.name }} <span v-if="i + 1 < game.types.length" class="px-2">|</span>
                                    </template>
                                </td>
                                <td class="px-4">
                                    <div class="flex lg:flex-row flex-col justify-end">
                                        <router-link :to="{ name: 'games.show', params: { id: game.id }}" class="bg-sky-500 hover:bg-sky-700 text-xs text-white font-bold py-2 px-4 m-1 uppercase rounded">Редактировать</router-link>
                                        <button  @click.prevent="toggleDialogConfirm(); setGameForDelete(game)" type="button" value="" class="bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-2 px-4 m-1 uppercase rounded">Удалить</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                        <tbody v-else>
                            <tr>
                                <td colspan="5" class="text-center p-5 text-slate-500 text-xl">Записей не найдено</td>
                            </tr>
                        </tbody>
                    </template>
                </Loader>

            </table>
            <!--Paginator-->
            <Paginator :data="games" :limit="3" @paginate-page="changeCallsForPaging"></Paginator>
            <!--/--Paginator-->
            <!--ConfirmModal-->
            <ConfirmDialog
                v-if="showDialogConfirm"
                @closeDialogConfirm="toggleDialogConfirm"
                @confirm="deleteGame(gameForDelete)"
                :show="true"
                :type="'danger'"
                :title="'Удаление...'"
                :message="'Вы действительно хотите удалить игру - '+ gameForDelete.name"
            ></ConfirmDialog>
            <!--/--ConfirmModal-->
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Paginator from "../UI/Paginator";
import Loader from "../UI/Loader";
import Skeleton from "../UI/Skeleton";
import ConfirmDialog from "../UI/ConfirmDialog";

export default {
    name: "games",

    components: {
        ConfirmDialog,
        Loader,
        Paginator,
        Skeleton
    },

    data () {
        return {
            selectedType: 'all',
            showDialogConfirm: false,
            gameForDelete: null
        }
    },
    mounted() {
        this.listGames()
        this.listTypes()
        document.title = 'Games'
    },

    methods: {
        ...mapActions([
            'listGames',
            'listTypes',
            'listGameByTypes',
            'deleteGame'
        ]),
        changeCallsForPaging(page){
            return this.selectedType === 'all' ? this.listGames(page) : this.listGameByTypes({ type: this.selectedType, page: page })
        },
        toggleDialogConfirm(){
            this.showDialogConfirm = !this.showDialogConfirm
        },
        setGameForDelete(game){
            this.gameForDelete = game
        }
    },

    computed:{
        ...mapGetters({
            games: 'getGames',
            types: 'getTypes'
        }),
    }
}
</script>
