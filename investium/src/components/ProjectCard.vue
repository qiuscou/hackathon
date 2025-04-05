<template>
  <div class="project-card">
    <div class="project-image">
      <img :src="image" :alt="title" />
    </div>
    <div class="project-content">
      <h3>{{ title }}</h3>
      <p class="creator">{{ creator }}</p>
      <p class="description">{{ description }}</p>
      <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
      <div class="stats">
        <span class="amount">{{ formattedAmount }} ₽</span>
        <span class="backers">{{ backers }} {{ backersText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    creator: String,
    description: String,
    image: String,
    progress: Number,
    amount: Number,
    backers: Number,
  },
  computed: {
    formattedAmount() {
      return new Intl.NumberFormat('ru-RU').format(this.amount)
    },
    backersText() {
      const cases = [2, 0, 1, 1, 1, 2]
      const titles = ['инвестор', 'инвестора', 'инвесторов']
      return titles[
        this.backers % 100 > 4 && this.backers % 100 < 20
          ? 2
          : cases[Math.min(this.backers % 10, 5)]
      ]
    },
  },
}
</script>

<style scoped>
.project-card {
  border: 0.1vh solid #e1e1e1;
  padding: 1vh;
  border-radius: 0.8vh;
  overflow: hidden;
  transition: all 0.3s ease;
  background: white;
  box-shadow: 0 0.2vh 0.6vh rgba(0, 0, 0, 0.05);
  height: 100%;
}

.project-card:hover {
  transform: translateY(-0.5vh);
  box-shadow: 0 0.8vh 1.6vh rgba(0, 0, 0, 0.1);
}

.project-image {
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 18vh;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.03);
}

.project-content {
  padding: 1.5vh;
}

.project-content h3 {
  margin: 0 0 0.5vh 0;
  font-size: 2.2vh;
  font-weight: 600;
  color: #222;
  line-height: 1.3;
}

.creator {
  color: #666;
  font-size: 1.85vh;
  margin: 0 0 1vh 0;
  line-height: 1.4;
}

.description {
  font-size: 1.85vh;
  color: #333;
  margin: 0 0 1.5vh 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
}

.progress-bar {
  height: 0.5vh;
  background: #f0f0f0;
  border-radius: 0.3vh;
  margin-bottom: 1vh;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: #3e1fff;
  border-radius: 0.3vh;
  transition: width 0.6s ease;
}

.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.85vh;
}

.amount {
  font-weight: bold;
  color: #3e1fff;
}

.backers {
  color: #666;
}
</style>
