<script>
import NavBar from '@/components/NavBar.vue'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  components: {
    NavBar,
    ProjectCard,
  },
  data() {
    return {
      startupsPageData: {
        startups: 'Стартапы',
      },
      startups: [
        {
          id: 1,
          title: 'TechVision',
          description: 'Искусственный интеллект для анализа медицинских изображений',
          image: '@/assets/startup1.png',
          category: 'Медицина',
          progress: 75,
          raised: '1,250,000',
        },
        {
          id: 2,
          title: 'EcoPack',
          description: 'Экологичная упаковка из растительных материалов',
          image: '@/assets/startup2.png',
          category: 'Экология',
          progress: 42,
          raised: '850,000',
        },
        {
          id: 3,
          title: 'LearnEasy',
          description: 'Платформа для персонализированного онлайн-обучения',
          image: '@/assets/startup3.png',
          category: 'Образование',
          progress: 90,
          raised: '2,100,000',
        },
        {
          id: 4,
          title: 'FoodMap',
          description: 'Сервис для поиска мест с фермерскими продуктами',
          image: '@/assets/startup4.png',
          category: 'Сельское хозяйство',
          progress: 35,
          raised: '500,000',
        },
      ],
    }
  },
}
</script>

<template>
  <div class="startups">
    <NavBar />

    <section class="featured-projects">
      <div class="container">
        <h2>{{ startupsPageData.startups }}</h2>
        <div class="projects-grid">
          <ProjectCard
            v-for="startup in startups"
            :key="startup.id"
            :title="startup.title"
            :description="startup.description"
            :image="startup.image"
            :category="startup.category"
            :progress="startup.progress"
            :amount="startup.raised"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.startups {
  padding-bottom: 5vh;
}

.container {
  max-width: 100vh;
  margin: 0 auto;
  padding: 0 2vh;
}

.featured-projects {
  padding: 8vh 0;
}

.featured-projects h2 {
  text-align: center;
  margin-bottom: 4vh;
  font-size: 3.5vh;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40vh, 1fr));
  gap: 2vh;
}

.btn,
input {
  font-family: 'Manrope Regular', sans-serif;
  font-weight: 500;
}
</style>
