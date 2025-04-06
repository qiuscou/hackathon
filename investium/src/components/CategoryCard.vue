<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    formattedCount() {
      const lastDigit = this.count % 10
      const lastTwoDigits = this.count % 100

      if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `${this.count} проектов`
      }
      if (lastDigit === 1) {
        return `${this.count} проект`
      }
      if (lastDigit >= 2 && lastDigit <= 4) {
        return `${this.count} проекта`
      }
      return `${this.count} проектов`
    },
  },
}
</script>

<template>
  <router-link :to="`/category/${id}`" class="category-card">
    <div class="category-icon">
      <span :class="icon" v-if="icon"></span>
      <i class="fas fa-folder-open" v-else></i>
    </div>
    <div class="category-info">
      <h3>{{ name }}</h3>
      <p v-if="description">{{ description }}</p>
      <p v-else-if="count">{{ formattedCount }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.category-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.1);
  border: 1px solid #f8fafc;
  text-decoration: none;
  color: inherit;
  display: block;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #3e1fff 0%, #2a0de0 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 2rem;
}

.category-info h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #0f172a;
}

.category-info p {
  color: #0f172a;
  opacity: 0.7;
  font-size: 0.95rem;
  margin: 0;
}
</style>
