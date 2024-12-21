<template>
  <div class="rules-page">
    <Sidebar />
    <div class="content">
      <h1>Правила</h1>
      <p>Добро пожаловать на страницу с правилами! Ознакомьтесь с основными правилами использования нашей системы:</p>

      <ul>
        <li>1. Соблюдайте уважение к другим пользователям.</li>
        <li>2. Запрещено размещать спам или вредоносные материалы.</li>
        <li>3. Соблюдайте авторские права при публикации контента.</li>
        <li>4. Используйте систему исключительно по назначению.</li>
        <li>5. Нарушение правил может привести к ограничению доступа к системе.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.rules-page {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  overflow-y: auto;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #4a69bd;
}

ul {
  list-style: decimal inside;
  padding-left: 0;
}

ul li {
  font-size: 16px;
  margin: 10px 0;
  color: #555;
}
</style>