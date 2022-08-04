<template>
<div class="border-4 w-full shadow-sm  rounded-2xl" style="height: 30em;">
    <div class="grid grid-cols-2 gap-1 justify-items-end  mt-2 border-b">
        <div class="uppercase text-lg font-bold ml-2 mt-2  mb-4">Products</div>
        <!-- ... -->
        <button type="button" data-modal-toggle="productspage-modal" class="shadow-lg bg-transparent hover:bg-teal-400 mb-4 mr-4 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">
            Create New
        </button>
         <ProductsPageModal/>
    </div>
    <div class="w-full grid grid-cols-2 gap-2 overflow-auto border-b" style="height: 22em;">
        <a  v-for="product in products" :key="product" class="ml-4 mt-2 mb-2 h-60 flex flex-col items-center bg-white rounded-lg border shadow-sm md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="product.image" :alt="product.name">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden h-10">{{product.name}} M:{{product.price}}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-auto h-20">{{product.description}}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Quantity {{product.quantity}}</p>
                
            </div>
        </a>
    </div>
    <div class="grid grid-rows-2 grid-flow-col ">
        <div class="row-span-2 ">
            <button type="button" @click="$router.go(-1)" class="mt-2 ml-3 shadow-lg bg-teal-600  text-white font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">
                Back
            </button>
        </div>
        <div class="col-span-12 ">
           <div class="text-center mt-3 font-bold uppercase text-teal-600">{{productsLen}} Products</div>
        </div>
    
    </div>
    <!-- <div class="text-center mt-2 font-bold uppercase text-teal-600">{{productsLen}} Products</div> -->
   
</div>
</template>

<script>
import axios from 'axios'
import ProductsPageModal from './ProductsPageModal.vue'

export default{
    name:"ProductPage",
    components:{
        ProductsPageModal
    },
    data(){
        return {
            products:[],
            productsLen:0
        }
    },
    async created(){
        // alert(this.$route.params.id)
        let catID =this.$route.params.id
        let filter="filters[category]="+catID
        let res = await axios.get("api/products?"+filter+"&populate=*")
        if(res.status==200){
            res.data.data.forEach(element => {
               this.productsLen=+element.attributes.quantity
                this.products.push({
                    id:element.id,
                    universal:element.attributes.identifier,
                    name:element.attributes.name,
                    description:element.attributes.description,
                    quantity:element.attributes.quantity,
                    price:element.attributes.price,
                    vat:element.attributes.vat,
                    image:axios.defaults.baseURL+element.attributes.image.data.attributes.url,

                })    
            });
            
        }
        
    }
    // mounted(){
    //     this.$router.go()
    // }
}
</script>