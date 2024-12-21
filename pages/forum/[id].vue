<template>
  <div class="forum-topic">
    <h1>{{ topic.title }}</h1>

    <!-- Список сообщений -->
    <div class="messages">
      <div v-for="message in topic.messages" :key="message.id" class="message">
        <p><strong>{{ message.author }}</strong>: {{ message.text }}</p>
      </div>
    </div>

    <!-- Форма для добавления ответа -->
    <form @submit.prevent="submitAnswer">
      <textarea v-model="newMessage" placeholder="Введите ваш ответ" required></textarea>
      <button type="submit">Добавить ответ</button>
    </form>
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    const topicId = params.topicId;

    const mockData = {
      id: topicId,
      title: "Тема, большое длинное название темы",
      messages: [
        { id: 1, author: "Фамилия И. О.", text: "Первое сообщение темы" },
        { id: 2, author: "Фамилия И. О.", text: "Второе сообщение темы" },
      ],
    };

    return { topic: mockData };
  },
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    submitAnswer() {
      if (this.newMessage.trim()) {
        this.topic.messages.push({
          id: this.topic.messages.length + 1,
          author: "Ваше имя",
          text: this.newMessage,
        });
        this.newMessage = ""; 
      }
    },
  },
};
</script>
<style scoped>
.forum-topic {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.messages {
  margin: 20px 0;
}

.message {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

textarea {
  width: 100%;
  height: 100px;
  margin: 10px 0;
}

button {
  background-color: #2a9d8f;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #21867a;
}
</style>
