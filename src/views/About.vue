<template>
 <about-header/>
 <custom-footer/>
</template>
<script>
import AboutHeader from '@/components/About/AboutHeader.vue'
import CustomFooter from '@/components/footer.vue'

export default {
  name: 'About',
  components: {  
    AboutHeader,
    CustomFooter
  }
}
</script>

