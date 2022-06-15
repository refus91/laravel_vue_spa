<template>

    <div v-if="data && data.current_page && data.last_page" class="container md:mb-8 pt-8 px-4 mx-auto flex md:flex-row flex-col justify-end select-none">

        <div class="md:mr-3 flex flex-row items-center justify-end">
            <span class="mr-3">Выбор старницы</span>
            <div class="relative mr-3">
                <select v-model="selectedPage" @change="changePage(selectedPage)" class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <template v-for="page in data.last_page" :key="page">
                        <option :selected="selectedPage" :value="page">{{ page }}</option>
                    </template>
                </select>
                <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
            </div>
        </div>

        <div class="mr-3 flex mt-4 md:mt-0 flex-row justify-end">
            <button :disabled="isPrevDisabled" @click.prevent="changePage(data.current_page - 1)" :class="{'bg-grey-200  cursor-not-allowed': isPrevDisabled}" class="block border px-4 py-2 rounded-l hover:bg-gray-200 text-gray-600">&laquo;</button>

            <div v-for="page in pagesNumber" :key="page">
                <a @click.prevent="changePage(page)" class="block border px-4 py-2 hover:bg-gray-200 text-gray-600" :class="{'bg-indigo-500 hover:bg-indigo-600 text-white': page === data.current_page}" href="#">{{ page }}</a>
            </div>

            <button :disabled="isNextDisabled" @click.prevent="changePage(data.current_page + 1)" :class="{'bg-grey-200  cursor-not-allowed': isNextDisabled}" class="block border px-4 py-2 rounded-r hover:bg-gray-200 text-gray-600">&raquo;</button>
        </div>

    </div>

    <div v-else class="flex justify-end">
        <span class="text-center p-5 text-slate-500 text-xl">no data for pagination...</span>
    </div>

</template>

<script>
export default {
    name: "Paginator",

    props: {
        data: {
            type: Object,
            default () {
                return {
                    current_page: 1,
                    last_page: 1
                }
            },
            required: true
        },
        limit:{
            type: Number,
            default: 2
        }
    },
    data () {
        return {
            selectedPage: 1
        }
    },

    methods : {
        changePage(page) {
            if (page > 0){
                this.data.current_page = page
                this.selectedPage = page
                this.$emit('paginate-page', page)
            }
        },
    },

    computed: {
        pagesNumber() {
            if (!this.data) {
                 return []
            }

            let current = this.data.current_page;
            let last = this.data.last_page;
            let left = current - this.limit;
            let right = current + this.limit + 1;
            let range = [];
            let pages = [];
            let l;

            for (let i = 1; i <= last; i++) {
                if (i === 1 || i === last || (i >= left && i < right)) {
                    range.push(i);
                }
            }

            range.forEach(function (i) {
                if (l) {
                    if (i - l === 2) {
                        pages.push(l + 1);
                    } else if (i - l !== 1) {
                        pages.push('...');
                    }
                }
                pages.push(i);
                l = i;
            });

            return pages;
        },
        isPrevDisabled(){
            return this.data.current_page === 1
        },
        isNextDisabled(){
            return this.data.current_page === this.data.last_page
        },

    }
}
</script>
