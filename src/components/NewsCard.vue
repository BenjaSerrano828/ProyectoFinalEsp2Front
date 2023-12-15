<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
  imageUrl:{
    type:String,
  },
  title:{
    type:String,
  },
  body:{
    type:String,
  },
  date:{
    type:String,
  },
});
const image = ref(props.imageUrl);
</script>

<template>
<div class="card" style="width: 18rem;">
  <img :src="image" class="card-img-top" alt="...">
  <div class="card-body">
    <h1>{{ props.title }}</h1>
    <p class="card-text">{{ props.body }}</p>
    <p class="dateText">{{ props.date }}</p>

  </div>
</div>

</template>

<style>
.dateText{
    text-align: right;
}
</style>