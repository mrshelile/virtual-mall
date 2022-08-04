<template>
<p class="mt-5">
  <span class="text-center">
    <h2 class="text-3xl font-bold text-teal-500">Markets</h2>
  </span>
</p>
<div style="width:80%;margin-left:10%;margin-top:2%;" class="mb-5 block p-6 max-w-xlbg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-teal-700">
  <div class="grid grid-cols-4 gap-8">
    <div  class=" rounded overflow-hidden shadow-lg cursor-pointer " @click="toInsideMarket(store.key)" v-for="store in Stores" :key="store">
      <img class="w-full" :src="store.image" :alt="store.image">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{store.Name}}</div>
        <p class="text-gray-700 text-base">
         {{store.description}}
        </p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'SubMarkets',
  components: {  
   
  },
  data(){
      return{
        Stores:[]
      }
    },
    async created(){
      // alert(axios.defaults.baseURL)
      const marketRes= await axios.get("/api/stores?populate=*");
      // console.log(marketRes.data.data);
      var data= marketRes.data.data;
      for(var i=0;i<data.length;i++){
        // console.log(data[i].attributes.description);
        this.Stores.push({
          "key":data[i].id,
          "createdAt":new Date(data[i].attributes.createdAt),
          "Name":data[i].attributes.name,
          "license_number":data[i].attributes.license_number,
          "location":data[i].attributes.location,
          "url":data[i].attributes.url,
          "description":data[i].attributes.description,
          "image":axios.defaults.baseURL+data[i].attributes.image.data.attributes.url,
        })
      }
    },
  methods:{
    toInsideMarket(index){
    this.$router.push(
        {
          name:'InsideMarket',
          params:{id:index}
        }
     )
    }
  }
 }
</script>
