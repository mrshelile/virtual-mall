<template>
 <sub-markets />
 <custom-footer/>
</template>
<script>
import SubMarkets from '@/components/markets/SubMarkets.vue'
import CustomFooter from '@/components/footer.vue'


export default {
  name: 'Market',
  components: {  
    SubMarkets,
     CustomFooter,
     
    
  },
  created(){
    //  window.location.reload();  
  }
}
</script>

