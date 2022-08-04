<template>
<div style="height: 29em;">
    <div class="grid grid-cols-2 gap-8">
        <a v-for="delivery in deliveries" :key="delivery" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="@/assets/motor.svg" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{delivery.name}}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{delivery.description}}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Owner: {{delivery.owner}}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">contacts: {{delivery.contacts}}</p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">email: {{delivery.email}}</p>
            </div>
        </a>
    </div>
</div>

</template>

<script>
import axios from 'axios'


export default {
  name: 'DeliveryComponent',
  data(){
    return{
        deliveries:[],
    }
  },
  async created(){
    let delres=await axios.get("api/deliveries?populate=*")
    if(delres.status==200){
        
        delres.data.data.forEach(element => {
            console.log(element.attributes.email)
            this.deliveries.push({
                id:element.id,
                name:element.attributes.company_name,
                description:element.attributes.description,
                owner:element.attributes.Owner,
                contacts:element.attributes.contacts,
                email:element.attributes.email
            })
        });
    }
    
  }

}
</script>