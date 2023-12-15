<script setup>
import Navbar from "../components/NavbarAdmin.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const title = ref("");
const imageUrl = ref("");
const body = ref("");
const date = ref(Date);
const router = useRouter();

const registerNews = async () => {
  try {
    const response = await axios.post("http://localhost:3005/news", {
      title: title.value,
      imageUrl: imageUrl.value,
      body: body.value,
      date: date.value,
    });
    const token = response.data.token;

    if (token) {
      localStorage.setItem("userToken", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const isAdmin = response.data.user.isAdmin;
    } else {
      console.error(
        "Error: No se recibió un token en la respuesta del servidor"
      );
    }
    
  } catch (error) {
    console.error("Error al registrar noticia: ", error);
  }
};
</script>

<template>
  <Navbar />
  <div class="container">
    <form id="contact" action="" method="post">
      <h3>Create News</h3>
      <h4>Create News with the necessary information</h4>
      <fieldset>
        <input
          placeholder="Enter News title"
          type="text"
          tabindex="1"
          required
          autofocus
          v-model="title"
        />
      </fieldset>
      <fieldset>
        <input
          placeholder="Enter News image URL"
          type="url"
          tabindex="2"
          required
          v-model="imageUrl"
        />
      </fieldset>
      <fieldset>
        <textarea
          placeholder="Enter News description"
          type="text"
          tabindex="3"
          required
          v-model="body"
        ></textarea>
      </fieldset>
      <fieldset>
        <label to="date">Enter News Date:&nbsp;&nbsp;&nbsp;</label>
        <input
          name="date"
          placeholder="Enter News date"
          type="date"
          tabindex="4"
          required
          v-model="date"
        />
      </fieldset>
      <fieldset>
        <button
          name="submit"
          type="submit"
          id="contact-submit"
          data-submit="...Sending"
          @click.prevent="registerNews"
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
