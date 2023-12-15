<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
    email:{
      type:String,
    },
    password:{
      type:String,
    },
    name:{
      type:String,
    },
    address:{
      type:String,
    },
    isAdmin:{
      type:Boolean,
    },
    rut:{
      type:String,
    },
    phone:{
      type:String,
    },
    image:{
      type:String,
    },
  })
const imageProfile = ref(props.image);
</script>

<template>
<div class="card" style="width: 18rem;">
  <img :src="imageProfile" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">{{ name }}</p>
    <p class="card-text">{{ rut }}</p>
    <p class="card-text">{{ address }}</p>
    <p class="card-text">{{ email }}</p>
    <p class="card-text">{{ phone }}</p>
  </div>
</div>

</template>

<style>
/* CSS */
</style>