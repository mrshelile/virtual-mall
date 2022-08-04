<template>
  <div class="flex">
    <div
      class="flex flex-col w-64 h-screen background-animate shadow-md bg-gradient-to-r from-teal-500 via-sky-600 to-green-500 px-4 py-8 overflow-y-auto border-r"
    >
      <div class="pt-4 pb-2 px-6">
        <a href="#!">
          <div class="flex items-center">
            <div class="shrink-0">
              <img :src="image" class="rounded-full w-10" alt="Avatar" />
            </div>
            <div class="grow ml-3">
              <p class="text-sm font-semibold text-white">Market</p>
            </div>
          </div>
        </a>
      </div>
      <div class="flex flex-col justify-between mt-6">
        <aside>
          <ul>
            <li>
              <router-link
                :to="{ name: 'StoreDash' }"
                class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>

                <span class="mx-4 font-medium">Dashboard</span>
              </router-link>
            </li>
            <li class="mt-2">
              <a
                href="store"
                class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:bg-gray-200 hover:text-gray-500 rounded-md cursor-pointer"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavSecEx2"
                aria-expanded="false"
                aria-controls="collapseSidenavSecEx2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                  />
                </svg>
                <span class="font-bold uppercase text-white mx-4 hover:text-gray-500"
                  >Store</span
                >
              </a>
            </li>
            <li class="mt-2" id="sidenavSecEx3">
              <router-link
                :to="{ name: 'Orders' }"
                class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded-md hover:bg-gray-200 hover:text-gray-500 cursor-pointer"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavSecEx3"
                aria-expanded="false"
                aria-controls="collapseSidenavSecEx3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                <span class="font-bold uppercase text-white mx-4 hover:text-gray-500"
                  >Order</span
                >
              </router-link>
            </li>
          </ul>
          <hr class="my-2" />
          <ul>
            <li class="mt-2" id="sidenavSecEx3">
              <router-link
                :to="{ name: 'Delivery' }"
                class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded-md hover:bg-gray-200 hover:text-gray-500 cursor-pointer"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavSecEx3"
                aria-expanded="false"
                aria-controls="collapseSidenavSecEx3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                  <path
                    d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"
                  />
                </svg>
                <span class="font-bold uppercase text-white mx-4 hover:text-gray-500"
                  >Deliver</span
                >
              </router-link>
            </li>
            <li class="mt-2">
              <a
                @click="Logout"
                class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap hover:bg-gray-200 hover:text-gray-500 rounded-md cursor-pointer"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSidenavSecEx2"
                aria-expanded="false"
                aria-controls="collapseSidenavSecEx2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="font-bold uppercase text-white mx-4 hover:text-gray-500"
                  >Logout</span
                >
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
    <div class="w-full h-full p-4 m-8 overflow-y-auto">
      <div class="flex items-center justify-center border-6 border-dotted">
        <router-view />
        <!-- Stores Content -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AdminDashboard",
  data() {
    return {
      image: "",
      store: "",
    };
  },
  methods: {
    Logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
  async created() {
    if (!localStorage.getItem("storeID")) {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    }
    let res = await axios.get(
      "api/stores/" + localStorage.getItem("storeID") + "?populate=*"
    );
    // console.log(axios.defaults.baseURL+res.data.data.attributes.image.data.attributes.url)
    if (res.status == 200) {
      this.store = res.data.data.attributes;
      this.image =
        axios.defaults.baseURL + res.data.data.attributes.image.data.attributes.url;
      // alert(this.image)
      // res.data.data.attributes.image.data.attributes.url
    }
  },
};
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
