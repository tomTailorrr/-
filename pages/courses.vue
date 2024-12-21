<template>
  <div class="courses-page">
    <Sidebar />
    <div class="content">
      <h2>Курсы</h2>
      <p>
        Здесь представлены доступные курсы, которые помогут вам улучшить ваши знания в различных медицинских дисциплинах.
      </p>

      <div v-for="course in courses" :key="course.id" class="course-card">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
        <p><strong>Продолжительность:</strong> {{ course.duration }}</p>
        <p><strong>Преподаватель:</strong> {{ course.instructor }}</p>
        <button @click="enroll(course.id)">Записаться на курс</button>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          title: 'Основы анатомии человека',
          description: 'Курс о базовых аспектах анатомии человеческого организма. Идеально подходит для начинающих.',
          duration: '4 недели',
          instructor: 'Проф. Иван Иванов',
        },
        {
          id: 2,
          title: 'Фармакология для медиков',
          description: 'Изучение основ фармакологии: виды лекарств, их взаимодействие с организмом и побочные эффекты.',
          duration: '6 недель',
          instructor: 'Докт. Мария Петрова',
        },
        {
          id: 3,
          title: 'Физиология человека',
          description: 'Курс по физиологии с акцентом на системы органов и их взаимодействие.',
          duration: '5 недель',
          instructor: 'Проф. Алексей Смирнов',
        },
        {
          id: 4,
          title: 'Медицинская этика',
          description: 'Изучение принципов и норм медицинской этики для профессионалов в здравоохранении.',
          duration: '3 недели',
          instructor: 'Докт. Екатерина Сидорова',
        },
      ],
    };
  },
  methods: {
    enroll(id) {
      alert(`Вы записались на курс с ID: ${id}`);
    },
  },
};
</script>

<style scoped>
.courses-page {
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
}

.course-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.course-card h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #3b8d76;
}

.course-card p {
  font-size: 16px;
  margin-bottom: 10px;
}

button {
  background-color: #4a69bd;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4a69bd;
}
</style>