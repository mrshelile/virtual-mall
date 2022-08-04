<template>
  <div class="flex items-center justify-center min-h-screen">
    <form class="w-full max-w-sm" @submit.prevent="handleSubmit">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="email"
          placeholder="Enter Email"
          aria-label="Email"
          v-model="email"
          required
        />
      </div>
      <div class="text-red-500 text-sm italic">{{ error1 }}</div>
      <div class="flex items-center border-b border-teal-500 py-2 mt-5">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Enter code send to email Code"
          aria-label="Reset Code"
          v-model="verify"
          v-on:keyup="verifyCode()"
          required
        />
      </div>

      <div class="text-red-500 text-sm italic">{{ error2 }}</div>
      <div class="flex items-center border-b border-teal-500 py-2 mt-5">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="password"
          v-model="password"
          placeholder="New Password****"
          aria-label="New Password"
          v-on:keyup="verifyCode()"
          required
        />
      </div>
      <div class="flex items-center border-b border-teal-500 py-2 mt-5">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="password"
          placeholder="Confirm Password****"
          aria-label="Confirm Password"
          v-model="confirmPassword"
          required
        />
      </div>
      <div class="text-red-500 text-sm italic">{{ error3 }}</div>
      <div class="flex items-center mt-5">
        <button
          type="submit"
          class="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UpdatePassword",
  data() {
    return {
      email: "",
      verify: "",
      password: "",
      confirmPassword: "",
      error1: "",
      error3: "",
      error2: "",
      userID: 0,
    };
  },
  created() {
    this.verify = this.$route.params.unique;
  },
  methods: {
    async handleSubmit() {
      if (this.userID != 0) {
        if (this.password != this.confirmPassword) {
          this.error3 = "Password do not match";
        } else {
          let data = { data: { password: this.confirmPassword } };
          let res = await axios.put("api/users/" + this.userID, data);
          if (res.status == 200) {
            this.error3 = "";
            console.log(res);
          }
        }
      }
    },
    async verifyCode() {
      if (this.email == "") {
        this.error1 = "field cannot be empty*******";
      }
      if (this.verify == "") {
        this.error2 = "field cannot be empty*******";
      }
      if (this.verify != "" && this.email != "") {
        this.error1 = "";
        this.error2 = "";
        let data = {
          identifier: this.email,
          password: this.verify,
        };
        if (this.userID == 0) {
          var res;

          try {
            res = await axios.post("api/auth/local", data);
            if (res.status == 200) {
              this.error2 = "";
              this.userID = res.data.user.id;
              // console.log(res.data.user.id);
            } else {
              this.error2 = "Invalid code, or email";
            }
          } catch (erro) {
            this.error2 = "Invalid code, or email";
            // console.log(erro);
          }
        }
      }
    },
  },
};
</script>

<style></style>
