<template >
  <footer class="background-animate bg-gradient-to-l sticky top-[100vh] absolute w-full from-teal-500 via-purple-500 to-green-500 text-center lg:text-left ">
  <div class="text-white text-center p-4 " >
    © 2022 Copyright:
    <a class="text-white" href="">Virtual Mall</a>
  </div>
  </footer>
</template>
<script>
export default {
  name: 'CustomFooter',
}
</script>
<style scoped>
.background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>