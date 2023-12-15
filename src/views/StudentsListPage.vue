<script setup>
import Navbar from "../components/Navbar.vue";
import StudentsTable from "../components/StudentsTable.vue";
import users from "../assets/json/users";
</script>

<template>
  <Navbar />
  <div class="pageContainer">
    <div class="TitleContainer">
      <div class="titleTextContainer">
        <h1 class="titleText">Students List</h1>
      </div>
    </div>
    <div class="container">
      <table class="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">rut</th>
            <th scope="col">address</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <StudentsTable
          v-for="user in users"
          :email="user.email"
          :name="user.name"
          :address="user.address"
          :rut="user.address"
          :phone="user.phone"
          class="studentsTable"
        />
      </table>
    </div>
  </div>
</template>

<style>
.pageContainer {
  text-align: center;
}
.studentsTable {
  margin-top: 40px;
}
.titleText {
  margin-top: 30px;
}
</style>
