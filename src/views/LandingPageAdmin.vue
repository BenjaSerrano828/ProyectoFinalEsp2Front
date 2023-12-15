<script setup>
import NewsCard from "../components/NewsCard.vue";
import { news } from "../assets/json/news.js";
import NavbarAdmin from "@/components/NavbarAdmin.vue";

const props = defineProps(['isAdmin']);
const admin = props.isAdmin;
console.log(admin);

/*const handleDeleteNews = async () => {

  const confirmDelete = window.confirm(
    "¿Are you sure you want to delete this News?"
  );
  if (!confirmDelete) {
    return;
  }
  try {
    const response = await axios.delete(
      `http://localhost:8080/corazondelatorback/deleteBorrow/${props.borrow.id}`
    );
  } catch (error) {
    console.error(error);
  }
};*/
</script>

<template>
    <NavbarAdmin></NavbarAdmin>
  <div class="PageContainer">
    <div class="PageTitleContainer">
      <div class="titleTextContainer"><h1>News</h1></div>
    </div>
    <div class="NewsListContainer">
      <RouterLink to="/createNewsPage">
        <button type="button" class="btn btn-success CreateButton">
          Create News
        </button>
      </RouterLink>
      <div class="NewsCardContainer">
        <NewsCard
          v-for="noticia in news"
          :key="noticia.id"
          :noticia="noticia"
          class="NewsCard"
          :date="noticia.date"
          :body="noticia.body"
          :title="noticia.title"
          :imageUrl="noticia.imageUrl"
        />
        <button
          type="button"
          class="btn btn-danger DeleteButton"
          @click="handleDeleteNews"
        >
          Delete News
        </button>
        <button type="button" class="btn btn-warning EditButton">
          Edit News
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.CreateButton {
  position: relative;
  left: 30%;
}
.DeleteButton {
}
.EditButton {
}

.NewsCardContainer {
  margin-top: 20px;
  padding: 20px;
  background-color: #0109ff;
  border-radius: 5px;
}
.NewsListContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.NewsCard {
  margin-top: 30px;
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
