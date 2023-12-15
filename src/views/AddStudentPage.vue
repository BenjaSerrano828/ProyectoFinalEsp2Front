<script setup>
import Navbar from "../components/NavbarAdmin.vue";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

const name = ref("");
const email = ref("");
const address = ref("");
const phone = ref("");
const password = ref("");
const isAdmin = ref();

const registerUser = async () => {
  try {
    const response = await axios.post("http://localhost:3005/auth/register", {
      name: name.value,
      email: email.value,
      address: address.value,
      phone: phone.value,
      password: password.value,
      isAdmin: isAdmin.value,
    });
    console.log(response);
  } catch (error) {
    console.log("Error al registrar usuario", error);
  }
};
</script>

<template>
  <Navbar />
  <div class="container">
    <form id="contact">
      <h3>Add User</h3>
      <h4>Create a user with his information</h4>
      <fieldset>
        <input
          placeholder="Enter user name"
          type="text"
          tabindex="1"
          required
          autofocus
          v-model="name"
        />
      </fieldset>
      <fieldset>
        <input placeholder="Enter user rut" type="text" tabindex="2" required />
      </fieldset>
      <fieldset>
        <input
          placeholder="Enter user e-mail:"
          type="email"
          tabindex="3"
          required
          v-model="email"
        />
      </fieldset>
      <fieldset>
        <input
          placeholder="Enter user phone:"
          type="tel"
          tabindex="4"
          required
          v-model="phone"
        />
      </fieldset>
      <fieldset>
        <input
          placeholder="Enter user address:"
          type="text"
          tabindex="5"
          required
          v-model="address"
        />
      </fieldset>
      <fieldset>
        <input
          placeholder="Enter user password"
          type="password"
          tabindex="6"
          required
          v-model="password"
        />
      </fieldset>
      <fieldset>
        <select name="select" v-model="isAdmin">
          <option value="true" selected>Is Admin</option>
          <option value="false">Is Student</option>
        </select>
      </fieldset>
      <fieldset>
        <button
          name="submit"
          type="submit"
          id="contact-submit"
          data-submit="...Sending"
          @click.prevent="registerUser"
        >
          Submit
        </button>
      </fieldset>
    </form>
  </div>
</template>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 30px;
  color: #777;
  background: #0cf;
}

.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Open Sans", Helvetica, Arial, sans-serif;
}

#contact {
  background: #f9f9f9;
  padding: 25px;
  margin: 50px 0;
}

#contact h3 {
  color: #f96;
  display: block;
  font-size: 30px;
  font-weight: 400;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #0cf;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #09c;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #999;
}
::-webkit-input-placeholder {
  color: #888;
}
:-moz-placeholder {
  color: #888;
}
::-moz-placeholder {
  color: #888;
}
:-ms-input-placeholder {
  color: #888;
}
</style>
