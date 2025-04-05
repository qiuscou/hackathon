<template>
  <router-link
    :to="`/category/${id}`"
    class="category-card"
    :style="{ 'background-color': bgColor }"
  >
    <div class="category-image">
      <img :src="image" :alt="name" v-if="image" />
      <div class="default-icon" v-else>
        <i class="fas fa-folder-open"></i>
      </div>
    </div>
    <div class="category-info">
      <h3>{{ name }}</h3>
      <p v-if="count">{{ formattedCount }}</p>
    </div>
  </router-link>
</template>

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
    image: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
    bgColor: {
      type: String,
      default: '#f8f9fa',
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

<style scoped>
.category-card {
  display: flex;
  flex-direction: column;
  border-radius: 1.2vh;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 0.2vh 0.8vh rgba(0, 0, 0, 0.1);
  height: 100%;
  background: white;
}

.category-card:hover {
  transform: translateY(-0.5vh);
  box-shadow: 0 0.6vh 1.2vh rgba(0, 0, 0, 0.15);
}

.category-image {
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.category-card:hover .category-image img {
  transform: scale(1.05);
}

.default-icon {
  font-size: 4vh;
  color: #05ce78;
  opacity: 0.8;
}

.category-info {
  padding: 1.6vh;
  background: white;
  flex-grow: 1;
}

.category-info h3 {
  margin: 0 0 0.8vh 0;
  font-size: 1.8vh;
  color: #2c3e50;
  font-weight: 600;
  line-height: 1.3;
}

.category-info p {
  margin: 0;
  font-size: 1.6vh;
  color: #7f8c8d;
  line-height: 1.4;
}
</style>
