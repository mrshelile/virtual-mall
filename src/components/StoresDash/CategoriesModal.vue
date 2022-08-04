<template>
        <!-- Main modal -->
        <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
            <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" class="absolute top-3.5 right-3 text-gray-400 bg-red-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                    <div class="py-6 px-6 lg:px-8">
                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white uppercase font-bold">Create Category</h3>
                        <form class="space-y-6" @submit.prevent="submit">
                            <div>
                                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                <input type="text" v-model="name" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <div class="mb-2">
                                <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                <input type="text" v-model="description" maxlength="40"  class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            </div>
                            <button type="submit" class="shadow-2xl w-full text-teal-600 hover:text-white bg-transparent border border-green-300 uppercase font-semibold hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-300 dark:focus:ring-blue-800">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios'

export default{
    name:'CategoriesModal',
    data(){
        return {
            name:'',
            description:''
            
        }
    },
    methods: {
        async submit(){
            let data ={
                data:{
                    name:this.name.toLowerCase(),
                    description:this.description,
                    store:localStorage.getItem("storeID"),
                }
            }
            data = JSON.stringify(data)
            let res = await axios.post('api/product-categories',data)
            if(res.status==200)
                this.$router.go()
        }
    },
}
</script>