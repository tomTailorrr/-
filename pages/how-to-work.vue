<template>
  <div class="task-page">
    <!-- Левое меню -->
    <Sidebar />

    <!-- Основной контент -->
    <div class="content">
      <div class="header">
        <button @click="goBack" class="back-button">Вернуться</button>
        <h2>Задача</h2>
        <p class="timestamp">18 января 13:15</p>
      </div>

      <!-- Текст задачи -->
      <div class="task-description">
        <h3>Название задачи</h3>
        <p>
          Сайт рыба-текст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более осмысленного текста для
          макетов и презентаций.
        </p>
        <p>
          Текст генерируется абзацами случайным образом от двух до десяти
          предложений.
        </p>
      </div>

      <!-- Варианты ответов -->
      <div class="options">
        <label v-for="(option, index) in options" :key="index" class="option">
          <input type="checkbox" :value="option" v-model="selectedOptions" />
          {{ option }}
        </label>
      </div>

      <!-- Поле для ответа -->
      <div class="answer-section">
        <textarea
          v-model="answer"
          placeholder="Введите ваш ответ здесь..."
        ></textarea>
        <button @click="submitAnswer" class="submit-button">
          Добавить ответ
        </button>
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
      options: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'],
      selectedOptions: [],
      answer: '',
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    submitAnswer() {
      console.log('Ответ:', this.answer);
      console.log('Выбранные варианты:', this.selectedOptions);
      alert('Ответ отправлен!');
    },
  },
};
</script>

<style scoped>
.task-page {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.task-description {
  margin: 20px 0;
}

.options {
  margin: 20px 0;
}

.option {
  display: block;
  margin: 10px 0;
}

.answer-section {
  margin-top: 20px;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #4a69bd;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #4a69bd;
}
</style>