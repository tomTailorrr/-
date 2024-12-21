<template>
  <div class="newcomers-page">
    <Sidebar />
    <div class="content">
      <h2>Новичкам</h2>
      <p>
        Добро пожаловать на платформу! Если вы только начинаете свой путь в изучении медицинской науки или хотите улучшить свои знания, мы готовы вам помочь. Здесь вы найдете все необходимые ресурсы для начала.
      </p>

      <h3>Шаги для начала:</h3>
      <ol>
        <li><strong>Изучите базовые дисциплины:</strong> Начните с наших курсов по анатомии, физиологии, фармакологии и другим дисциплинам.</li>
        <li><strong>Присоединяйтесь к олимпиадам:</strong> Проверьте свои знания в различных олимпиадах и получайте награды.</li>
        <li><strong>Читайте статьи и руководства:</strong> Изучайте статьи по актуальным темам, читайте полезные советы для новичков.</li>
        <li><strong>Не бойтесь задавать вопросы:</strong> Форум доступен для общения с опытными пользователями и преподавателями.</li>
      </ol>

      <h3>Полезные ссылки:</h3>
      <ul>
        <li><NuxtLink to="/courses">Курсы</NuxtLink> - Начните обучение с наших онлайн-курсов по медицине.</li>
        <li><NuxtLink to="/olympiads">Олимпиады</NuxtLink> - Присоединяйтесь к олимпиадам и проверьте свои знания.</li>
        <li><NuxtLink to="/forum">Форум</NuxtLink> - Обсуждайте и задавайте вопросы на нашем форуме.</li>
      </ul>

      <h3>Советы для успешного обучения:</h3>
      <ul>
        <li>Регулярно повторяйте материал, чтобы закрепить знания.</li>
        <li>Используйте дополнительные ресурсы, такие как видеоуроки и книги.</li>
        <li>Не стесняйтесь обращаться за помощью к преподавателям или другим пользователям платформы.</li>
      </ul>

      <h3>Начните с малого:</h3>
      <p>Не торопитесь! Учебный процесс не должен быть стрессом. Вы можете начинать с любого курса и постепенно увеличивать сложность задач.</p>
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
.newcomers-page {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  margin-left: 10px; 
  overflow-y: auto;
}

h2 {
  margin-bottom: 10px;
  color: #4a69bd;
}

h3 {
  margin-top: 20px;
  color: #4a69bd;
}

ol, ul {
  margin-top: 15px;
}

li {
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;
}

ul li {
  list-style-type: disc;
  margin-left: 20px;
}

a {
  color: #4a69bd;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>