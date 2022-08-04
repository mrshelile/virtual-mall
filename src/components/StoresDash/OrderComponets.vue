<template>
<div style="height: 29em;">
    <div class="grid grid-cols-2 gap-8">
        <a v-for="order in orders" :key="order" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="@/assets/motor.svg" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <select  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option v-for="product in order.products" :key="product" :value="product.id">{{product.name+" #"+product.quantity}}</option>
                    </select>
                 <span class="text-green-400"> M: {{order.amount}}</span> </h5>
                <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <div class="grid grid-cols-3 gap-2">
                    <div class="text-red-400">{{order.status}}</div>
                    <!-- ... -->
                    <select v-if="order.status!='received'" @change="changeOrderStatus({status:$event.target.value,item:order.id})" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="">Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Processed">Processed</option>
                        <option value="Received">Received</option>
                    </select>
                </div>
                <p>Total Goods: {{order.totalOrderProducts}}</p>
                <p>Name: {{order.user.name}}</p>
                <p>Email: {{order.user.email}}</p>
                <p>Contacts: {{order.user.contacts}}</p>
                <p>Delivery: {{order.delivery.name}}</p>
                <p>Reference: {{order.reference}}</p>
                <p>transaction: {{order.transaction}}</p>
                <p>Created: {{order.created}}</p>
                </div>
            </div>
        </a>
    </div>
</div>

</template>

<script>
import axios from 'axios'


export default {
  name: 'OrderComponent',

  data() {
    return {
       orders:[] 
    }
  },
  methods: {
   async changeOrderStatus(value){
    // console.log(value.item)
    if(value.status!=''){
        var data={
        data:{
            status:value.status.toLowerCase()
        }
    }
    // data = JSON.stringify(data)
    
    let res= await axios.put("api/carts/"+value.item,data)
    
    if(res.status==200){
        this.$router.go()
    }
    }
    }
    
  },
    async created(){
        var res1= await axios.get("api/carts?populate=*")
        var localOrders=[]
        var totalProducts=[]
        if(res1.status==200){
            
  
           res1.data.data.forEach(element => {
            element.attributes.stores.data.forEach(element1 => {
              
               
                if(element1.id==parseInt(localStorage.getItem("storeID")))
                  {
                      localOrders.push(element);
                   
                  }
            });

           });
           var totalOrderP=0
           localOrders.forEach(element2 => {
                console.log("------")
                element2.attributes.products.data.forEach(element3 => {
                   
                   totalOrderP=totalOrderP+element3.attributes.quantity
                   totalProducts.push({id:element3.id,name:element3.attributes.name,quantity:element3.attributes.quantity})
                
                })
                // console.log(this.orders)
                this.orders.push({
                    id:element2.id,
                    products:totalProducts,
                    totalOrderProducts:totalOrderP,
                    delivery:{
                            id:element2.attributes.delivery.data.id,
                            name:element2.attributes.delivery.data.attributes.company_name
                        },
                    status:element2.attributes.status,
                    transaction:element2.attributes.universal,
                    amount:element2.attributes.total,
                    reference:element2.attributes.reference,
                    user:{
                        id:element2.attributes.user.data.id,
                        name:element2.attributes.user.data.attributes.full_names,
                        email:element2.attributes.user.data.attributes.email,
                        contacts:element2.attributes.user.data.attributes.contacts,
                        
                    },
                    created:new Date(element2.attributes.createdAt).toDateString()
                
                })
                totalProducts=[]
                totalOrderP=0
                // console.log(new Date(element.attributes.createdAt).toDateString())
           });
           
        }
        
    }
}
</script>