<template>
  <!-- Main modal -->
  <div
    id="productspage-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3.5 right-3.5 text-gray-400 bg-red-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="productspage-modal"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="py-6 px-6 lg:px-8 mt-32">
          <h3
            class="mb-4 text-xl font-medium text-gray-900 dark:text-white uppercase font-bold"
          >
            Create Category
          </h3>
          <form class="space-y-4" @submit.prevent="submit">
            <!-- <img class="object-fill  h-32 w-full" :src="uploadedImage"/> -->
            <div>
              <img class="object-fill h-32 w-full" :src="uploadedImage" />
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 uppercase font-semibold"
                for="productImage"
                >Upload Image</label
              >
              <input
                @change="uploadImage"
                class="block w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 cursor-pointer darkt:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="productImageHelper"
                id="productImage"
                type="file"
                ref="file"
                accept="image/*"
                required
              />
              <p
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="productImageHelper"
              >
                SVG, PNG, JPG, or GIF (MAX. 800*400px).
              </p>
            </div>
            <div>
              <label
                for="small-input"
                class="uppercase font-semibold block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Name</label
              >
              <input
                type="text"
                v-model="name"
                id="small-input"
                class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="price-input"
                class="uppercase font-semibold block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Price M</label
              >
              <input
                type="number"
                v-model="price"
                id="price-input"
                class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="quantity-input"
                class="uppercase font-semibold block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Quantity</label
              >
              <input
                type="number"
                v-model="quantity"
                id="quantity-input"
                class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                for="large-input"
                class="uppercase font-semibold block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Description</label
              >
              <input
                type="text"
                v-model="description"
                maxlength="40"
                id="large-input"
                class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              class="shadow-2xl w-full text-teal-600 hover:text-white bg-transparent border border-green-300 uppercase font-semibold hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-300 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const { v4: uuidv4 } = require("uuid");

export default {
  name: "ProductsPageModal",
  data() {
    return {
      uploadedImage:
        axios.defaults.baseURL +
        "/uploads/nodata_6a65b6f3d9.svg?updated_at=2022-07-18T14:11:56.761Z",
      name: "",
      description: "",
      price: 0,
      quantity: 0,
      imageSelect: "",
      imageID: 0,
    };
  },
  methods: {
    async uploadImage(file) {
      let img = file.target.files[0];
      // console.log(file.target.files[0])
      let fd = new FormData();
      fd.append("files", img, img.name);
      var res = await axios.post("api/upload", fd);
      if (res.status == 200) {
        this.uploadedImage = axios.defaults.baseURL + res.data[0].url;
        this.imageID = res.data[0].id;
        // console.log(res.data[0].id)
      }
    },
    async submit() {
      // alert(this.imageID)
      if (this.imageID != 0) {
        let data = {
          data: {
            name: this.name,
            category: this.$route.params.id,
            store: localStorage.getItem("storeID"),
            price: parseInt(this.price),
            vat: 15,
            description: this.description,
            quantity: parseInt(this.quantity),
            image: this.imageID,
            identifier: uuidv4(),
          },
        };
        data = JSON.stringify(data);
        let res = await axios.post("api/products", data);
        if (res.status == 200) {
          this.$router.go();
          // console.log(res)
        }
      }
    },
  },
  mounted() {
    //  alert(this.$route.params.id)
    // alert(axios.defaults.baseURL)
  },
};
</script>
