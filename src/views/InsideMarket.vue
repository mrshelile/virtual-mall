<template>
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{{ShopName}}</h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">{{ShopDescription}}</p>
        </div>
        <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/3 md:w-1/2 p-4 cursor-pointer" @click="toMarketProduct(category.key)"  v-for="category in Categories" :key="category">
            <div class="border border-gray-200 p-6 rounded-lg">
            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            </div>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{{category.Name}}</h2>
            <p class="leading-relaxed text-base">{{category.description}}</p>
            </div>
        </div>
        
        </div>
        <button type="button" @click="toPrevious" class="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Back</button>
    </div>
    </section>  
</template>

<script>
import axios from 'axios'
export default {
 name:"InsideMarket",
   data(){
      return{
        Categories:[],
        ShopName:"",
        ShopDescription:""
      }
    },
    async created(){
      // alert(axios.defaults.baseURL)
      // console.log(this.$route.params.id)
      const categoryRec =this.$route.params.id
      const categoryRes= await axios.get("/api/product-categories?filters[store]="+categoryRec+"&populate=*");
      // console.log(marketRes.data.data);
      var data= categoryRes.data.data;
      // console.log(data);
      for(var i=0;i<data.length;i++){
        // console.log(data[i].attributes.description+"==");
        this.Categories.push({
          "key":data[i].id,
          "createdAt":new Date(data[i].attributes.createdAt),
          "Name":data[i].attributes.name,
          "description":data[i].attributes.description,
          "Shop_name":data[i].attributes.store.data.attributes.name
        })
        this.ShopDescription=data[i].attributes.store.data.attributes.description
        this.ShopName =data[i].attributes.store.data.attributes.name
      }
    },
    methods:{
    toPrevious(){
        this.$router.go(-1)
    },    
    toMarketProduct(index){
    //  alert(index+"/"+this.$route.params.id);   
      this.$router.push(
          { 
            name:'MarketProducts',
            params:{id:index}
          }
      )
    }
  }
}
</script>

<style>

</style>