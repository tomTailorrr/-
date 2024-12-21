<template>
  <div class="default-layout">
    
    <div class="page-content">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.default-layout {
  display: flex;
  height: 100vh;
}

.page-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #f5f5f5;
}
</style>
