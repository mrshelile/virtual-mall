<template>
<div class="border-4 w-full shadow-sm  rounded-2xl" style="height: 30em;">
    <div class="grid grid-cols-2 gap-1 justify-items-end  mt-2 border-b">
        <div class="uppercase text-lg font-bold ml-2 mt-2  mb-4">Categories</div>
        <!-- ... -->
        <button type="button" data-modal-toggle="authentication-modal" class="shadow-lg bg-transparent hover:bg-teal-400 mb-4 mr-4 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">
            Create New
        </button>
         <Categories-Modal/>
    </div>
    <div class="w-full grid grid-cols-2 gap-2 overflow-auto border-b" style="height: 22em;">
        <a v-bind:href="'store/'+category.id" v-for="category in categories" :key="category" class="ml-4 mt-2 mb-2 h-48 flex flex-col items-center bg-white rounded-lg border shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="@/assets/segment.svg" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden h-10">{{category.name}}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-auto h-20">{{category.description}}</p>
            </div>
        </a>
    </div>
    <div class="text-center mt-2 font-bold uppercase text-teal-600">{{lengthCat}} Categories</div>
   
</div>
</template>

<script>
import axios from 'axios'

import CategoriesModal from './CategoriesModal.vue'
// this.$forceUpdate()
export default{
    name:"ProductsComponents",
    components:{
        CategoriesModal
    },
    data(){
        return {
            categories:[],
            lengthCat:0,
            
        }
    },
    async created(){
        let filter = "filters[store]="+localStorage.getItem("storeID")
        
        let res =await axios.get("api/product-categories?populate=*&"+filter)
        
        if(res.status==200){
            this.lengthCat=res.data.data.length
            res.data.data.forEach(element => {
                // console.log(element.id)
               this.categories.push({id:element.id,name:element.attributes.name,description:element.attributes.description}) 
            });
            
        }
    }
}

</script>