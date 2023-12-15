<script setup>
//js
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <RouterLink to="/landingPage">
        <a class="navbar-brand" href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/183/183338.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />IntraGod</a
        ></RouterLink
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/studentsListPage">Students List</a
            ><!--active si le pones active al navlink se pone blanco-->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profilePage">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/addSubjectPage">Add Subject</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/addStudentPage">Add User</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/createNewsPage">Create News</a>
          </li>
          <!--  <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
            
          </li>
          -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
/* CSS */
</style>
