<template>
  <div class="sidebar">
    <!-- Верхний блок -->
    <div class="section profile">
      <h2>Medical School</h2>
      <div class="profile-info">
        <div class="avatar"></div>
        <div class="details">
          <p>Фамилия Имя Отчество</p>
          <p>Ур. 1 <span>🔷</span></p>
        </div>
        <button class="edit-btn">Редактировать</button>
      </div>
    </div>

    <!-- Раздел Информация -->
    <div class="section">
      <h3>Информация</h3>
      <ul>
        <li><NuxtLink to="/">О школе</NuxtLink></li>
        <li><NuxtLink to="/rules">Правила</NuxtLink></li>
        <li><NuxtLink to="/forum">Форум</NuxtLink></li>
        <li><NuxtLink to="/olympiads">Олимпиады</NuxtLink></li>
      </ul>
    </div>

    <!-- Раздел Задачник -->
    <div class="section">
      <h3>Задачник</h3>
      <ul>
        <li><NuxtLink to="/task-archive">Архив задач</NuxtLink></li>
        <li><NuxtLink to="/system-state">Состояние системы</NuxtLink></li>
        <li><NuxtLink to="/ratings">Рейтинг</NuxtLink></li>
        <li><NuxtLink to="/courses">Курсы</NuxtLink></li>
      </ul>
    </div>

    <!-- Раздел Методичка -->
    <div class="section">
      <h3>Методичка</h3>
      <ul>
        <li><NuxtLink to="/newcomers">Новичкам</NuxtLink></li>
        <li><NuxtLink to="/articles">Статьи</NuxtLink></li>
        <li><NuxtLink to="/links">Ссылки</NuxtLink></li>
        <li><NuxtLink to="/how-to-work">Работа в системе</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #3b5998; /* Темно-синий */
  color: white;
  font-family: Arial, sans-serif;
  padding: 15px;
  border-radius: 8px;
}

.section {
  background-color: #4a69bd; /* Синий с оттенком фиолетового */
  margin-bottom: 15px;
  border-radius: 8px;
  padding: 10px;
}

.section h2, .section h3 {
  margin: 0 0 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.profile-info {
  text-align: center;
}

.avatar {
  width: 50px;
  height: 50px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin: 0 auto 10px;
}

.details p {
  margin: 5px 0;
}

.edit-btn {
  background-color: #1e90ff; /* Ярко-синий */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.edit-btn:hover {
  background-color: #4682b4; /* Темно-стальной синий */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  margin: 5px 0;
  cursor: pointer;
  transition: color 0.3s;
}

ul li a {
  color: white;
  text-decoration: none;
}

ul li a:hover {
  text-decoration: underline;
  color: #add8e6; /* Светло-голубой */
}
</style>
