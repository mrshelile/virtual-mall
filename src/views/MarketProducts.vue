<template>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col">
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-green-500"></div>
      </div>
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{{ShopName}}</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">{{ShopDescription}}</p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4" >
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6" v-for="product in Products" :key="product">
        <div class="rounded-lg h-64 overflow-hidden">
          <img :alt="product.name" class="object-cover object-center h-full w-full" :src="product.image">
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{{product.Name}}</h2>
        <p class="text-base leading-relaxed mt-2">{{product.description}}</p>
        <a class="text-green-500 inline-flex items-center mt-3 cursor-pointer" @click="$store.commit('addProduct',product)">Add to Cart
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
        </a>
        <span class="text-teal-500 uppercase font-bold"> M{{product.price}}</span>
      </div>
      
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
    name:"MarketProducts",
    data(){
      return{
        Products:[],
        ShopName:"",
        ShopDescription:""
      }
    },
    async created(){
      // alert(axios.defaults.baseURL)
      // console.log(this.$route.params.id)
      const categoryRec =this.$route.params.id
      // alert(categoryRec)
      const categoryRes= await axios.get("/api/products?filters[category]="+categoryRec+"&populate=*");
      // console.log(marketRes.data.data);
      var data= categoryRes.data.data;
      // console.log(data);
      for(var i=0;i<data.length;i++){
        // console.log(axios.defaults.baseURL+data[i].attributes.image.data.attributes.url+"==");
        // console.log(data[i].attributes.price)
        // console.log(data[i].attributes.sale.data)
        var onsale=''
        if(data[i].attributes.sale.data)
          onsale =data[i].attributes.sale.data.id
        // console.log(data[i].attributes.vat)  
        this.Products.push({
          "key":data[i].id,
          'quantity':data[i].attributes.quantity,
          "createdAt":new Date(data[i].attributes.createdAt),
          "Name":data[i].attributes.name,
          'onsale':onsale,
          'vat':data[i].attributes.vat,
          'category':categoryRec,
          "price":data[i].attributes.price,
          "description":data[i].attributes.description,
          "Shop_name":data[i].attributes.store.data.attributes.name,
          "ShopKey":data[i].attributes.store.data.id,
          "image":axios.defaults.baseURL+data[i].attributes.image.data.attributes.url,
        })
        this.ShopDescription=data[i].attributes.store.data.attributes.description
        this.ShopName =data[i].attributes.store.data.attributes.name
      }
    },
}
</script>

<style>

</style>