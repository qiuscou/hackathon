<template>
  <div class="project-card">
    <div class="project-image" :style="{ backgroundImage: `url(${image})` }">
      <span class="project-tag" v-if="category">{{ category }}</span>
    </div>
    <div class="project-info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="project-stats">
        <span>{{ formattedAmount }}₽</span>
        <span>{{ progress }}% собрано</span>
      </div>
      <div class="progress-bar">
        <div class="progress" :style="{ width: `${progress}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: '',
    },
    progress: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    formattedAmount() {
      return this.amount.toLocaleString()
    },
  },
}
</script>

<style scoped>
.project-card {
  background: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border: 1px solid #f8fafc;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
}

.project-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.project-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(15, 23, 42, 0.7);
  color: #ffffff;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #0f172a;
}

.project-info p {
  color: #0f172a;
  opacity: 0.7;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.project-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #0f172a;
}

.progress-bar {
  height: 6px;
  background: #f8fafc;
  border-radius: 3px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #3e1fff, #2a0de0);
  border-radius: 3px;
}
</style>
