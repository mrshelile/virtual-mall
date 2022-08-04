<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-8 mx-auto">
      <div class="row text-3xl font-bold text-teal-500 uppercase" >Delivery Services</div>
      <div class="-my-8 divide-y-2 divide-gray-100 mt-5" >
        <div class="py-8 flex flex-wrap md:flex-nowrap rounded overflow-hidden shadow-lg bg-white-500 m mt-2" v-for="delivery in Deliveries" :key="delivery">
          <div class="ml-3">
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ">
            <span class="font-semibold title-font text-gray-700">{{delivery.Name}}</span>
            <span class="mt-1 text-gray-500 text-sm">{{delivery.owner}}</span>
          </div>
          <div class="md:flex-grow">
            <h2 class="font-medium text-gray-900  mb-2">{{delivery.contacts}}, {{delivery.email}}</h2>
            <p class="leading-relaxed">{{delivery.description}}</p>
            <a class="text-indigo-500 inline-flex items-center mt-4 cursor-pointer" @click="$store.commit('addDelivery',delivery)">Use Service
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
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
  name: 'Deliveries',
  data(){
      return{
        Deliveries:[],
      }
    },
    async created(){
      // alert(axios.defaults.baseURL)
      const categoryRes= await axios.get("/api/deliveries?populate=*");
      // console.log(marketRes.data.data);
      var data= categoryRes.data.data;
      // console.log(data);
      for(var i=0;i<data.length;i++){
        // console.log(data[i].attributes.Owner+"==");
        this.Deliveries.push({
          "key":data[i].id,
          "createdAt":new Date(data[i].attributes.createdAt),
          "Name":data[i].attributes.company_name,
          "description":data[i].attributes.description,
          "email":data[i].attributes.email,
          "address":data[i].address,
          "contacts":data[i].attributes.contacts,
          "owner":data[i].attributes.Owner,
        })
      }
    },
}
</script>

