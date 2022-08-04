<template>
  <div class="flex items-center justify-center min-h-screen">
    <form class="w-full max-w-lg" @submit.prevent="submit">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="name"
          >
            Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            type="text"
            placeholder="Company Name"
            v-model="name"
            required
          />
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="link"
          >
            Websites Link
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="link"
            type="text"
            placeholder="www.google.com"
            v-model="website_Link"
          />
          <p class="text-gray-500 text-xs italic">**Optional</p>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="description"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="3"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Description..."
            v-model="description"
            maxlength="80"
            required
          ></textarea>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            License Number
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="number"
            placeholder="License Number"
            v-model="license"
            required
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="agent"
          >
            Agent Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="agent"
            type="email"
            placeholder="Enter Agent Email"
            v-model="agent"
            required
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="agent"
          >
            Agent contact
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="contacts"
            placeholder="Enter Agent Contacts"
            type="number"
            v-model="contacts"
            required
          />
          <p class="text-red-600 text-xs italic">
            After submit wait for email to register new password
          </p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div
            class="p-6 max-w-sm bg-white bg-cover rounded-lg border border-gray-200 h-32 shadow-md dark:bg-gray-800 dar:k:border-gray-700"
            :style="{
              'background-image': `url(${company_Image})`,
            }"
          >
            <!-- <img :src="company_Image" /> -->
            <!-- <img src="../../src/assets/software.svg" /> -->
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div class="flex justify-center items-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col justify-center items-center w-full h-32 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col justify-center items-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  class="mb-3 w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                @change="uploadImage"
                id="dropzone-file"
                type="file"
                class="hidden"
                accept="image/*"
                ref="file"
                required
              />
            </label>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6 mt-5">
          <div class="w-full px-3">
            <button
              type="Submit"
              class="w-40 h-12 text-white bg-teal-400 shadow-md hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const { v4: uuidv4 } = require("uuid");
import crypto from "crypto";
export default {
  name: "AddCompany",
  data() {
    return {
      name: "",
      website_Link: "",
      description: "",
      contacts: "",
      license: "",
      agent: "",
      fileRes: 0,
      company_Image:
        axios.defaults.baseURL +
        "/uploads/investment_402093832a.svg?updated_at=2022-07-27T12:47:11.544Z",
    };
  },
  async created() {
    let en = crypto.createHash("sha256").update("input").digest("hex");
    console.log(en);

    // alert(window.location.origin);
    // console.log(
    //   axios.defaults.baseURL +
    //     this.$router.resolve({
    //       name: "UpdatePassword",
    //       params: { unique: en },
    //     }).href
    // );
    // console.log(axios.defaults.baseURL);
  },
  methods: {
    async uploadImage(file) {
      let img = file.target.files[0];
      // console.log(file.target.files[0]);
      let fd = new FormData();
      fd.append("files", img, img.name);
      var res = await axios.post("api/upload", fd);
      // console.log(res);
      if (res.status == 200) {
        this.company_Image = axios.defaults.baseURL + res.data[0].url;
        this.fileRes = res.data[0].id;
        // console.log(res.data[0].id)
      }
    },
    async submit() {
      if (this.fileRes != 0) {
        var data0 = {
          data: {
            name: this.name,
            license_number: this.license,
            url: this.website_Link,
            description: this.description,
            image: parseInt(this.fileRes),
          },
        };
        data0 = JSON.stringify(data0);
        var response0 = await axios.post("api/stores", data0);
        if (response0.status == 200) {
          let storeID = response0.data.data.id;
          const data = {
            email: this.agent,
            username: this.agent,
            password: crypto
              .createHash("sha256")
              .update(Math.floor(Math.random() * 1000000).toString())
              .digest("hex")
              .toString(),
            contacts: this.contacts,
            is_agent: true,
          };
          // console.log(data, storeID);
          // alert(response0.data.data.id);

          let dataSend = {
            password: data.password,
            subject: "Update Password",
            toEmail: data.email,
            message:
              "follow this link <a href='" +
              window.location.origin +
              this.$router.resolve({
                name: "UpdatePassword",
                params: { unique: data.password },
              }).href +
              "'>Update<a/> or copy this code <b>" +
              data.password +
              "</b>",
          };
          alert(dataSend.message);
          // dataSend = JSON.stringify(dataSend);
          let emailRes = await axios.post("http://localhost:3024/email", dataSend, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json",
            },
          });
          console.log(emailRes);
          var response = await axios.post("api/auth/local/register", data);
          if (response.status == 200) {
            // console.log(response.data.user.id);
            let data1 = {
              data: {
                store: storeID,
                user: response.data.user.id,
                universal: uuidv4(),
              },
            };
            data1 = JSON.stringify(data1);
            var response1 = await axios.post("api/agents", data1);
            if (response1.status == 200) {
              this.$router.push({ name: "Home" });
            }
          }
        }
      }
    },
  },
};
</script>

<style></style>
