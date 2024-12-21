<template>
  <div class="tasks-page">
    <!-- Левое меню -->
    <Sidebar />

    <!-- Основной контент -->
    <div class="content">
      <!-- Заголовок и описание -->
      <h1>Архив задач</h1>
      <p class="description">
        По своей сути рыба-текст является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей недоумение при попытках прочитать рыбу текст. В отличие от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
      </p>

      <!-- Таблица задач -->
      <table class="task-table">
        <thead>
          <tr>
            <th>Решено</th>
            <th>ID</th>
            <th>Название задачи</th>
            <th>Тема</th>
            <th>Разбор</th>
            <th>Сложность</th>
            <th>Решаемость</th>
            <th>Принято</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.solved }}</td>
            <td>{{ task.id }}</td>
            <td>{{ task.name }}</td>
            <td>{{ task.topic }}</td>
            <td>{{ task.analysis }}</td>
            <td>{{ task.difficulty }}%</td>
            <td>{{ task.solvability }}%</td>
            <td>{{ task.accepted }}</td>
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
      tasks: [
        {
          solved: 'Да',
          id: 1,
          name: 'Какое-то длинное название задачи',
          topic: 'Какая-то длинная тема задачи',
          analysis: 'Есть',
          difficulty: 1,
          solvability: 99,
          accepted: 1979907,
        },
        {
          solved: 'Нет',
          id: 54,
          name: 'Какое-то длинное название задачи',
          topic: 'Какая-то длинная тема задачи',
          analysis: 'Нет',
          difficulty: 70,
          solvability: 20,
          accepted: 1476,
        },
        // Добавьте ещё задачи по аналогии
      ],
    };
  },
};
</script>

<style scoped>
.tasks-page {
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
  font-size: 24px;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

.task-table {
  width: 100%;
  border-collapse: collapse;
}

.task-table th,
.task-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.task-table th {
  background-color: #4a69bd;
  color: white;
  font-weight: bold;
}

.task-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.task-table tr:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
</style>