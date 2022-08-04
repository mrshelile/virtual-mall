<template>
  <custom-nav v-if="!isAgentSite" />
  <cart v-if="!isAgentSite" />

  <router-view />
</template>

<script>
// @ is an alias to /src
import CustomNav from "@/components/CustomNav.vue";
import Cart from "@/components/markets/Cart.vue";

export default {
  name: "Home",
  data() {
    return {
      isAgentSite: Boolean(JSON.parse(localStorage.getItem("isAgentSite"))),
    };
  },
  async created() {},
  components: {
    CustomNav,
    Cart,
  },
};
</script>
<style src="./assets/tailwind.css" />
