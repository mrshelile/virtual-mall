<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -mx-4 -my-8">
        <div class="py-8 px-4 lg:w-1/3" v-for="sale in Sales" :key="sale">
          <div class="h-full flex items-start">
            <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
              <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{{sale.month}}</span>
              <span class="font-medium text-lg text-gray-800 title-font leading-none">{{sale.date}}</span>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="tracking-widest text-xs title-font font-medium text-purple-500 mb-1">{{sale.shop_name}}</h2>
              <h1 class="title-font text-xl font-medium text-gray-900 mb-3">{{sale.sale_percentage}}% off</h1>
              <p class="leading-relaxed mb-5">{{sale.description}}</p>
              <a class="inline-flex items-center">
                <img :alt="sale.shop_name" :src="sale.image" class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center">
                <span class="flex-grow flex flex-col pl-3">
                  <span class="title-font font-medium text-gray-900 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sales',
  data(){
      return{
        Sales:[],
        
      }
    },
    async created(){
      // alert(axios.defaults.baseURL)
      const salesRes= await axios.get("/api/sales?populate=*");
      var months =["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
      // console.log(marketRes.data.data);
      var data= salesRes.data.data;
      // console.log(data);
      for(var i=0;i<data.length;i++){
        // console.log(new Date(data[i].attributes.createdAt).getDate()+"==");
        // console.log(data[i].attributes.product.data.id)
        var productID=data[i].attributes.product.data.id
      const productRes= await axios.get("/api/products/"+productID+"?populate=*");

        this.Sales.push({
          "key":data[i].id,
          "createdAt":new Date(data[i].attributes.createdAt),
          "productName":data[i].attributes.product.data.attributes.name,
          "sale_percentage":data[i].attributes.sale_percentage,
          "description":data[i].attributes.description,
          "shop_name":data[i].attributes.store.data.attributes.name,
          "image":axios.defaults.baseURL+productRes.data.data.attributes.image.data.attributes.url,
          "month":months[new Date(data[i].attributes.createdAt).getMonth()],
          "date":new Date(data[i].attributes.createdAt).getDate(),
        })
      }
    },
}
</script>

