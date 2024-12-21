<template>
  <div class="olympiads-page">
    <Sidebar />
    <div class="content">
      <h1>Олимпиады</h1>
      <p class="description">
        Участвуйте в олимпиадах по медицинской тематике, проверяйте свои знания и получайте новые навыки!
      </p>

      
      <div v-for="olympiad in olympiads" :key="olympiad.id" class="olympiad-card">
        <h2>{{ olympiad.title }}</h2>
        <p>{{ olympiad.description }}</p>
        <div class="details">
          <span>Сложность: {{ olympiad.difficulty }}</span>
          <span>Дата: {{ olympiad.date }}</span>
        </div>
        <button @click="register(olympiad.id)">Участвовать</button>
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
      olympiads: [
        {
          id: 1,
          title: 'Олимпиада по анатомии',
          description: 'Проверьте свои знания о строении человеческого тела!',
          difficulty: 'Средний',
          date: '20 декабря 2024',
        },
        {
          id: 2,
          title: 'Олимпиада по физиологии',
          description: 'Изучите физиологические процессы организма и их особенности.',
          difficulty: 'Высокий',
          date: '15 января 2025',
        },
        {
          id: 3,
          title: 'Олимпиада по фармакологии',
          description: 'Разберитесь в действии лекарственных средств и их применении.',
          difficulty: 'Низкий',
          date: '5 февраля 2025',
        },
      ],
    };
  },
  methods: {
    register(id) {
      alert(`Вы зарегистрированы на олимпиаду ID: ${id}!`);
    },
  },
};
</script>

<style scoped>
.olympiads-page {
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
  color: #3b8d76;
}

.description {
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
}

.olympiad-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.olympiad-card h2 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.olympiad-card p {
  font-size: 14px;
  margin-bottom: 15px;
  color: #666;
}

.details {
  font-size: 12px;
  color: #888;
  margin-bottom: 15px;
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