<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <RouterLink to="/landingPageAdmin">
        <a class="navbar-brand" href="#">
          <img
            src="https://cdn-icons-png.flaticon.com/512/183/183338.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          IntraGod</a
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
            <router-link to="/studentsListPage"
              ><a class="nav-link">Students List</a></router-link
            >
            <!--active si le pones active al navlink se pone blanco-->
          </li>
          <li class="nav-item">
            <router-link to="/scheduleViewPage"
              ><a class="nav-link">Schedule</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/profilePage"
              ><a class="nav-link">Profile</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/addStudentPage"
              ><a class="nav-link">Add Student</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/createNewsPage"
              ><a class="nav-link">Create News</a></router-link
            >
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
