<template>
  <div class="links-page">
    <Sidebar />
    <div class="content">
      <h1>Полезные ссылки</h1>
      <p>
        Здесь собраны ресурсы, которые помогут вам углубить знания в области медицины и эффективно использовать платформу.
      </p>

      <h2>Образовательные ресурсы:</h2>
      <ul>
        <li><a href="https://www.medicalnewstoday.com/" target="_blank">Medical News Today</a> - Последние новости и исследования.</li>
        <li><a href="https://www.ncbi.nlm.nih.gov/" target="_blank">NCBI</a> - Огромная база научных публикаций.</li>
        <li><a href="https://www.khanacademy.org/science/health-and-medicine" target="_blank">Khan Academy: Health and Medicine</a> - Бесплатные образовательные курсы.</li>
      </ul>

      <h2>Ресурсы для олимпиад и тестов:</h2>
      <ul>
        <li><a href="https://www.medicalolympiad.org/" target="_blank">Medical Olympiad</a> - Международные соревнования по медицине.</li>
        <li><a href="https://www.quizlet.com" target="_blank">Quizlet</a> - Флеш-карты и викторины для подготовки.</li>
      </ul>

      <h2>Полезные статьи:</h2>
      <ul>
        <li><a href="https://www.mayoclinic.org/" target="_blank">Mayo Clinic</a> - Подробная информация о заболеваниях и лечении.</li>
        <li><a href="https://www.healthline.com/" target="_blank">Healthline</a> - Полезные советы по медицине и здоровью.</li>
      </ul>

      <h2>Форумы и сообщества:</h2>
      <ul>
        <li><a href="https://reddit.com/r/medicine/" target="_blank">Reddit Medicine</a> - Популярный форум для обсуждения медицинских вопросов.</li>
        <li><a href="https://forums.studentdoctor.net/" target="_blank">Student Doctor Network</a> - Сообщество студентов и профессионалов медицины.</li>
      </ul>

      <h2>Ресурсы для карьерного роста:</h2>
      <ul>
        <li><a href="https://www.medicare.gov/" target="_blank">Medicare</a> - Полезные данные для специалистов здравоохранения.</li>
        <li><a href="https://www.indeed.com/q-Medical-jobs.html" target="_blank">Поиск работы в медицине</a> - Вакансии в медицинской сфере.</li>
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
.links-page {
  display: flex;
  height: 100vh;
  background-color: #e8f5e9;
}

.content {
  flex: 1;
  padding: 30px;
  background-color: #ffffff;
  margin-left: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

h1 {
  margin-bottom: 20px;
  font-size: 28px;
  color: #4a69bd;
  text-align: center;
}

h2 {
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 22px;
  color: #4a69bd;
}

ul {
  padding-left: 20px;
  margin-top: 10px;
}

li {
  margin-bottom: 12px;
  font-size: 16px;
  color: #424242;
}

a {
  color: #4a69bd;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
  color: #4a69bd;
}
</style>
