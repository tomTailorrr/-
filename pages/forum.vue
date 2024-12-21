<template>
  <div class="forum">
    <Sidebar />
    <div class="content">
      <h1>Форум</h1>
      <div class="topics-grid">
        <div v-for="(topic, index) in topics" :key="index" class="topic-card">
          <h3>{{ topic.title }}</h3>
          <p class="author">{{ topic.author }} • {{ topic.date }}</p>
          <p class="description">{{ topic.description }}</p>
          <NuxtLink :to="'/forum/' + topic.id" class="details-link">Подробнее</NuxtLink>
        </div>
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
      topics: [
        {
          id: 1,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 13:15",
          description: "...",
        },
        {
          id: 2,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 10:57",
          description: "...",
        },
        {
          id: 3,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 10:40",
          description: "...",
        },
        {
          id: 4,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 13:00",
          description: "...",
        },
        {
          id: 5,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 13:10",
          description: "...",
        },
        {
          id: 6,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 21:15",
          description: "...",
        },
        {
          id: 7,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 20:15",
          description: "...",
        },
        {
          id: 8,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 11:15",
          description: "...",
        },
        {
          id: 9,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 18:15",
          description: "...",
        },
        {
          id: 10,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 17:15",
          description: "...",
        },
        {
          id: 11,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 11:15",
          description: "...",
        },
        {
          id: 12,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 15:15",
          description: "...",
        },
      ],
    };
  },
};
</script>

<style scoped>
.forum {
  display: flex;
}
.content {
  padding: 20px;
  flex: 1;
}
h1 {
  margin-bottom: 20px;
}
.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.topic-card {
  background: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.topic-card h3 {
  margin: 0 0 10px;
  font-size: 16px;
  line-height: 1.4;
  color: #333;
}
.author {
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}
.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}
.details-link {
  margin-top: auto;
  color: #4a69bd;
  text-decoration: none;
  font-weight: bold;
}
.details-link:hover {
  text-decoration: underline;
}
</style>
