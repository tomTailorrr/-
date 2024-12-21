<template>
  <div class="system-state-page">
    <Sidebar />
    <div class="content">
      <h2>Состояние системы</h2>
      <p>
        По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некоторых людей недоумение при попытках прочитать рыба текст.
      </p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Дата</th>
            <th>№ Задачи</th>
            <th>Автор решения</th>
            <th>Статус ответа</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.taskNumber }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.status }}</td>
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
      data: [
        { id: "Да", date: "18.01.2024 13:15", taskNumber: "1213", author: "Фамилия Имя Отчество", status: "Принято" },
        { id: "Да", date: "18.01.2024 13:15", taskNumber: "12", author: "Фамилия Имя Отчество", status: "Неверный ответ" },
        { id: "Да", date: "18.01.2024 13:15", taskNumber: "1213", author: "Фамилия Имя Отчество", status: "Принято" },
      ],
    };
  },
};

</script>

<style scoped>
.system-state-page {
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