<template>
  <div class="main-page">
    <Sidebar />
    <div class="content">
      <h1>О сайте Medical School</h1>
      <p>
        Сайт работает для студентов медицины, предоставляя информацию об обучении.
        Здесь вы найдете архив задач, состояние системы, а также методические материалы.
      </p>
      <img src="@/assets/medical-image.svg" alt="Medical illustration" />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';

export default {
  components: { Sidebar },
};
</script>

<style scoped>
.main-page {
  display: flex;
}
.content {
  padding: 20px;
}
</style>
