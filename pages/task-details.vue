<template>
  <div class="task-details">
    <Sidebar />
    <div class="content">
      <button @click="goBack" class="back-btn">Вернуться</button>
      <h1>Название задачи</h1>
      <p class="date">18 января 13:15</p>

      <div class="task-text">
        <p>
          ...
        </p>
        <p>
          ...
        </p>
      </div>

      <div class="options">
        <label v-for="(option, index) in options" :key="index" class="option">
          <input type="checkbox" :value="option" v-model="selectedOptions" />
          {{ option }}
        </label>
      </div>

      <div class="answer-box">
        <h3>Добавьте свой ответ</h3>
        <textarea v-model="answer" rows="5" placeholder="Введите текст ответа"></textarea>
        <button @click="submitAnswer" class="submit-btn">Добавить ответ</button>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "~/components/Sidebar.vue";

export default {
  components: { Sidebar },
  data() {
    return {
      options: ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
      selectedOptions: [],
      answer: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submitAnswer() {
      console.log("Выбранные варианты:", this.selectedOptions);
      console.log("Ответ пользователя:", this.answer);
      alert("Ваш ответ отправлен!");
    },
  },
};
</script>

<style scoped>
.task-details {
  display: flex;
}
.content {
  padding: 20px;
  flex: 1;
}
.back-btn {
  background: #e76f51;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 20px;
}
.date {
  font-size: 14px;
  color: #999;
  margin-bottom: 20px;
}
.task-text p {
  margin-bottom: 15px;
}
.options {
  margin-bottom: 20px;
}
.option {
  display: block;
  margin-bottom: 10px;
}
.answer-box {
  margin-top: 20px;
}
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.submit-btn {
  background: #4a69bd;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
