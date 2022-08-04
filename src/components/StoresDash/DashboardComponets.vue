<template>
    <div class="grid grid-cols-2 gap-8 m-2">
        <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-sm md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src="@/assets/business.svg" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Products</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{totalProducts}} Products available</p>
            </div>
        </a>
        <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-sm md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src="@/assets/investment.svg" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Categories</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{totalCategories}} Categories to choose from</p>
            </div>
        </a> 
        <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-sm md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src="@/assets/business_analytic.svg" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Orders</h5>
                <div class="grid grid-cols-2 gap-4 mb-3 ">
                   <div class="font-bold text-red-500">{{pendingOrder}} Pending</div>
                   <div class="font-bold text-orange-400">{{confirmedOrder}} Confirmed</div>
                   <div class="font-bold text-green-500">{{processedOrder}} Processed</div>
                </div>
 
            </div>
        </a> 
        <a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-sm md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src="@/assets/truck.svg" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delivery Companies</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{totalDeliveries}} Delivery Companies</p>
            </div>
        </a> 
                                 
    </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'DashGrid',
  data() {
    return {
    totalProducts:0,
    totalCategories:0,
    pendingOrder:0,
    confirmedOrder:0,
    processedOrder:0,
    totalDeliveries:0,  
    }
  },
 async created(){
    let filter1="filters[user]="+ localStorage.getItem("id")
    let res = await axios.get("api/agents?populate=*&"+filter1)
    
    if(res.status==200){
    var storeID = res.data.data[0].attributes.store.data.id
  
    let filter2="filters[store]="+ storeID

    let res1 = await axios.get("api/products?populate=*&"+filter2)
    // console.log(res1)
    let totalP=0
    if(res1.status==200)
        localStorage.setItem("storeID",storeID)
        res1.data.data.forEach(element => {
            
            totalP+=element.attributes.quantity
            // console.log(totalP,element,totalP)
        });
        this.totalProducts=totalP

    }
    let filter3 = "filters[store]="+ storeID
    let res2 = await axios.get("api/product-categories?"+filter3)
    
    if(res2.status==200){
        this.totalCategories=res2.data.data.length
    }
    let res3 = await axios.get("api/deliveries?populate=*")
    if(res3.status==200)
        this.totalDeliveries=res3.data.data.length
    var localOrders=[]
    const res4= await axios.get("api/carts?populate=*")
    if(res4.status==200){
        
           res4.data.data.forEach(element => {
            element.attributes.stores.data.forEach(element1 => {
              
                console.log(parseInt(localStorage.getItem("storeID")))
                if(element1.id==parseInt(localStorage.getItem("storeID")))
                    localOrders.push(element)
            });

           });
           localOrders.forEach(element1 => {
            // console.log(element1.attributes.status.toLowerCase())
            if(element1.attributes.status.toLowerCase()=='pending')
                this.pendingOrder=this.pendingOrder+1
            if(element1.attributes.status.toLowerCase()=='confirmed')
                this.confirmedOrder=this.confirmedOrder+1
            if(element1.attributes.status.toLowerCase()=='processed')
                this.processedOrder=this.processedOrder+1        
           });
        //    console.log(localOrders)
    }
           
    
    // let filter5 = "total_contains="+5554
    // let res4 =await axios.get("api/carts?populate=*&"+filter5)
    // console.log(res4.data)   
    // res4.data.data.forEach(element => {
        
    //     element.attributes.stores.data.forEach(store => {
    //         console.log(store.attributes)   
    //     });   
    // });   
  }
}
</script>