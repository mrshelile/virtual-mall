<template>
  <div class="container" style="height: 480px">
    <div class="grid grid-cols-2 gap-12 m-5 mb-5">
      <div class="grid grid-rows-4 mt-6 grid-flow-col gap-4 place-content-center">
        <div class="animate-charcter">Virtual Mall</div>
        <!-- ... -->
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sint recusandae
          porro quaerat tempora atque! Maiores aperiam doloribus alias ratione, veritatis
          officiis minus illum, facere exercitationem, dicta et laboriosam explicabo?
          Velit atque esse rem autem itaque vel ducimus consequatur perspiciatis?
        </div>
        <div v-if="!isAgentSite">
          <button
            @click="$router.push({ name: 'Market' })"
            class="bg-transparent hover:bg-teal-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-blue-700 uppercaseq font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Getting Started
          </button>
        </div>
        <div v-else>
          <button
            @click="$router.push({ name: 'StoreDash' })"
            class="bg-transparent hover:bg-teal-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-blue-700 uppercaseq font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Manage Your Store
          </button>
        </div>
      </div>

      <!-- ... -->
      <div>
        <img src="../../assets/business.svg" />
      </div>
    </div>
  </div>
  <!-- <CustomFooter /> -->
</template>

<script>
// import CustomFooter from "@/components/footer.vue";
export default {
  name: "Home",
  data() {
    return {
      isAgentSite: Boolean(JSON.parse(localStorage.getItem("isAgentSite"))),
    };
  },
  components: {
    //  CustomFooter
  },
};
</script>
<style scoped>
.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #3289a8 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 100% auto;
  color: #fff;
  background-clip: text;
  /* text-fill-color: transparent; */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 50px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
</style>
