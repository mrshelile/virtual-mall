<template>
  <div class="flex items-center justify-center min-h-screen">
    <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="email"
          placeholder="Enter Email"
          aria-label="Email"
        />
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
};
</script>

<style></style>
