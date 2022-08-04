<template>
  <div id="top-right-modal" data-modal-placement="top-right" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Shopping Cart
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="top-right-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 overflow-auto space-y-6 ">
           <div class="flex flex-col">
                <div v-for="product in $store.state.products" :key="product" class="mt-5">
                    <div  class="min-w-fit 0 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div>
                            <img class="h-24 rounded-t-lg " :src="product.picture" :alt="product.picture" />
                        </div>                   
                        <div class="px-5 pb-5">
                            <div>
                                <h5 class="text-xl font-semibold tracking-tight text-teal-900 dark:text-white">M{{product.price}}</h5>
                            </div>
                        
                            <div class="flex justify-between items-center">
                                <div class="flex flex-col">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">{{product.name}} </span>
                                <button type="button" @click="$store.commit('removeProduct',product.id,)" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg">Remove item</button>                               
                               </div> <!-- <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> -->
                                <div>
                                   
                                    <select id="countries" @change="$store.commit('changeQuantity',{event:$event,product:product})" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <!-- <option selected value="1">Select Quantity</option> -->
                                        <option v-for="i in product.quantity"  :key="i" :value="i">
                                            {{i}}
                                        </option>
                                        <!-- <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option> -->
                                    </select>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div v-if="$store.state.delivery" class="py-8 flex flex-wrap md:flex-nowrap rounded overflow-hidden shadow-lg bg-white-500 m mt-2" >
                    <div class="ml-3">
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ">
                        <span class="font-semibold title-font text-gray-700">{{$store.state.delivery.name}}</span>
                        <span class="mt-1 text-gray-500 text-sm">{{$store.state.delivery.owner}}</span>
                    </div>
                    <div class="md:flex-grow">
                        <h2 class="font-medium text-gray-900  mb-2">{{$store.state.delivery.contacts}}, {{$store.state.delivery.email}}</h2>
                        <p class="leading-relaxed">{{$store.state.delivery.description}}</p>
                        <button type="button" @click="$store.commit('removeDelivery',$store.state.delivery.id)" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-lg">Remove item</button> 
                    </div>
                    </div>
                    </div>
                <div class="mt-5">
                    <div class="p-6 max-w-sm mx-auto bg-white rounded-sm shadow-sm flex flex-col ">
                        <div class="flex space-x-4">
                        <div class="shrink-0">
                            <img class="h-12 w-12" src="@/assets/card.svg" alt="ChitChat Logo">
                        </div>
                        <div>
                            <div class="text-xl font-medium text-black">Check Out</div>
                            <p class="text-slate-500">Lorem ipsum dolor sit amet.</p>
                        </div>
                        </div>
                        <div class="flex flex-col mt-3">
                             <div class="flex flex-row space-x-12">
                                <div>Sub-Total</div>
                                <div>M {{$store.state.order.subTotal}}</div>
                            </div>
                            <!-- <div class="flex flex-row space-x-6">
                                <div>Delivery Cost</div>
                                <div>$999.9</div>
                            </div> -->
                            <div class="flex flex-row space-x-24">
                                <div>Tax</div>
                                <div>M {{$store.state.order.tax}}</div>
                            </div>
                            <div class="flex flex-row space-x-10">
                                <div>Order Total</div>
                                <div>M {{$store.state.order.orderTotal}}</div>
                            </div>
                        </div>
                        <!-- <div class="mt-2">
                            <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-3 shadow-lg text-center mr-2 mb-2">Check Out</button>
                        </div> -->
                    </div>
                </div>
                <div class="">
                    <div class="p-6 max-w-sm mx-auto bg-white  shadow-sm flex flex-col ">
                        <div class="flex space-x-4">
                        <div class="shrink-0">
                            <img class="h-12 w-12" src="@/assets/card.svg" alt="ChitChat Logo">
                        </div>
                        <div>
                            <div class="text-xl font-medium text-black">Payment Details</div>
                            <p class="text-slate-500">choose payment method</p>
                        </div>
                        </div>
                        <div class="flex flex-col mt-3">
                             
                            <div class="flex" v-for="item in paymentMethods" :key="item">
                                <div class="flex flex-row space-x-12">
                                    <div class="flex items-center h-5">
                                
                                    <input type="radio" v-model="payment_chose" :value="item.id" id="payment-method1" aria-describedby="payment-method-text" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark;-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    </div>

                                    <div class="ml-2 text-sm">
                                    <label for="payment-method1" class="font-medium text-trd-900 dark:text-gray-300">{{item.attributes.name}} Merchant:{{item.attributes.merchant_code}}</label>
                                    <p class="text-xs font-normal text-gray-500 dark:text-gray-300">{{item.attributes.description}}</p>
                                    </div>
                                    </div>
                             </div>
                              <div class="md:flex ">
                                    <div class="flex">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Reference
                                    </label>
                                    </div>
                                    <div class="flex">
                                    <input class="bg-gray-100 h-5 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 text-sm"  id="email" type="text" v-model="reference" placeholder="SMS Confirmation">
                                    </div>
                              </div>
            
                        </div>
                        <div class="mt-2">
                            <button type="button" @click.prevent="completeOrder" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-3 shadow-lg text-center mr-2 mb-2">Complete Order</button>
                        </div>
                    </div>
                </div>
            </div>
              <!-- ... -->
             
                <!-- <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aperiam cum nemo accusamus enim explicabo, fugit mollitia iure, corrupti aspernatur sed quidem non velit molestias. Voluptas officiis, dicta reiciendis consequuntur consectetur ipsam commodi placeat laboriosam deserunt labore. Voluptate saepe odio eaque ipsa aut praesentium rerum aperiam corporis mollitia in. Eaque!
                </p> -->
            </div>
            <!-- Modal footer -->
            <div class="drop-shadow-2xl flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="top-right-modal" type="button" class="text-white bg-red-600 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-teal-700 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gr-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
            </div>
        </div>
    </div>
  </div>

</template>
<script>
import { toRaw } from 'vue';
import axios from 'axios'
import { v1 as uuidv1 } from '../../../node_modules/uuid';


export default {
  name: 'Cart',
  data(){
    return{
        payment_chose:'',
        reference:'',
        paymentMethods:'',
        token:localStorage.getItem("token")
    }
  },
  async created(){
    const res= await axios.get("/api/payment-methods?populate=*");
   
    this.paymentMethods=res.data.data
    //  console.log()
    
  },
  methods:{
   async completeOrder(){
        // alert(localStorage.getItem("id"))
        // alert(this.payment_chose)
        
    if(this.token){
    
        if(this.$store.state.products.length!=0 && this.$store.state.order && this.reference && this.payment_chose && this.$store.state.delivery){
        var productIDs=[]
        this.$store.state.products.forEach(element => {
            productIDs.push(element.id)
        });
        var storeIds=[]
        this.$store.state.products.forEach(element => {
         storeIds.push(element.store)
        });
        var data={
            data:{
            products:productIDs,
            status:'pending',
            delivery:this.$store.state.delivery.id,
            vat:this.$store.state.products[0].vat,
            total:parseInt(this.$store.state.order.orderTotal),
            stores:storeIds,
            payment_method:this.paymentMethods.id,
            reference:this.reference,
            universal:uuidv1(),
            user:parseInt(localStorage.getItem("id")),
            orderProductQuantity:toRaw(this.$store.state.products)}
        }

        data=JSON.stringify(data);
  
        const res= await axios.post("/api/carts",data);
        // console.log(res.status)
        if(res.status==200){
         await this.$store.state.products.forEach(async (element) => {
         const res1 = await axios.get('api/products/'+element.id);
         if(res1.status==200){
            let updateData={
                data:{
                    quantity:res1.data.data.attributes.quantity-element.selectedQuatity
                }
                }
            // updateData=JSON.stringify(updateData)    
            const res2 = await axios.put('api/products/'+element.id,updateData);
            if(res2.status==200){
                //send email to customer and delivery service about order details
                this.$router.go()
            }
         }
         
        })

            
        }
        }
        
    }    
    else
        this.$router.push(
        {
          name: 'Login'
        }
     )
    }
    // selected(event,id){alert(event.target.value)
    // alert(id)
    // }
  },
  components: {  
   
  }
 }
</script>
