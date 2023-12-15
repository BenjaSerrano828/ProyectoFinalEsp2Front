<script setup>
import Navbar from "../components/NavbarAdmin.vue";
import UserCard from "../components/UserCard.vue";
import users from "../assets/json/users";
</script>

<template>
  <Navbar />
  <div class="PageContainer">
    <div class="PageTitleContainer">
      <div class="titleTextContainer"><h1>Profile</h1></div>
    </div>
    <div class="UserCardContainer">
      <div class="NewsCardContainer">
        <UserCard
          v-for="user in users"
          :key="user.id"
          :user="user"
          class="NewsCard"
          :name="user.name"
          :rut="user.rut"
          :address="user.address"
          :email="user.email"
          :phone="user.phone"
          :image="user.image"
        />
        <button
          type="button"
          class="btn btn-danger DeleteButton"
          @click="handleDeleteNews"
        >
          Delete Student
        </button>
        <button type="button" class="btn btn-warning EditButton">
          Edit Student
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.UserCardContainer {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #0109ff;
  border-radius: 5px;
}
.titleText {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.PageTitleContainer {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleTextContainer {
  color: white;
  background-color: #0109ff;
  padding: 2px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
}
</style>
