<template>
  <div class="ratings-page">
    <Sidebar />
    <div class="content">
      <h2>Рейтинг</h2>
      <p>
        Здесь представлен список пользователей с их текущими рейтингами. Рейтинг отображает уровень знаний и активности пользователя в системе.
      </p>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Пользователь</th>
            <th>Рейтинг</th>
            <th>Дата обновления</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.rating }}</td>
            <td>{{ user.updatedAt }}</td>
          </tr>
        </tbody>
      </table>
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
      users: [
        { name: "Иван Иванов", rating: 950, updatedAt: "20 декабря 2024" },
        { name: "Мария Петрова", rating: 890, updatedAt: "19 декабря 2024" },
        { name: "Алексей Смирнов", rating: 920, updatedAt: "18 декабря 2024" },
        { name: "Екатерина Сидорова", rating: 980, updatedAt: "17 декабря 2024" },
      ],
    };
  },
};
</script>

<style scoped>
.ratings-page {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
  margin-left: 10px; /* Отступ слева для правого контента, чтобы он не перекрывался с боковой панелью */
  overflow-y: auto;
}

h2 {
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #4a69bd;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}
</style>