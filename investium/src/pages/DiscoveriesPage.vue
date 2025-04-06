<script>
import NavBar from '@/components/NavBar.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import unsplash from '@/unsplash'

export default {
  components: {
    NavBar,
    ProjectCard,
    CategoryCard,
  },
  data() {
    return {
      discoveriesPageData: {
        heroSection: {
          title: 'Инвестируйте в',
          highlightedWord: 'смелые',
          subtitle: 'Открывайте для себя прорывные проекты, которые меняют будущее',
          ctaButton: 'Начать исследовать',
        },
        trendingProjects: [],
        categories: [
          {
            id: 1,
            name: 'Искусственный интеллект',
            icon: 'icon-ai',
            image: '',
          },
          {
            id: 2,
            name: 'Космические технологии',
            icon: 'icon-space',
            image: '',
          },
          {
            id: 3,
            name: 'Биотехнологии',
            icon: 'icon-bio',
            image: '',
          },
          {
            id: 4,
            name: 'Зеленая энергетика',
            icon: 'icon-energy',
            image: '',
          },
          {
            id: 5,
            name: 'VR/AR',
            icon: 'icon-energy',
            image: '',
          },
          {
            id: 6,
            name: 'Квантовые технологии',
            icon: 'icon-energy',
            image: '',
          },
        ],
        sectionTitles: {
          categories: 'Перспективные направления',
        },
      },
      isLoading: true,
    }
  },
  async created() {
    await this.loadProjectImages()
    await this.loadCategoryImages()
    this.isLoading = false
  },
  methods: {
    async loadProjectImages() {
      const projects = [
        {
          id: 1,
          title: 'NeuroLink',
          description: 'Интерфейс мозг-компьютер нового поколения',
          category: 'Нейротехнологии',
          raised: 1000000,
          progress: 50,
        },
        {
          id: 2,
          title: 'QuantumLeap',
          description: 'Квантовый процессор для домашнего использования',
          category: 'Квантовые вычисления',
          raised: 2000000,
          progress: 60,
        },
        {
          id: 3,
          title: 'EcoPower',
          description: 'Компактные термоядерные реакторы',
          category: 'Зеленая энергетика',
          raised: 3500000,
          progress: 75,
        },
        {
          id: 4,
          title: 'MarsColony',
          description: 'Первая частная колония на Марсе',
          category: 'Космические технологии',
          raised: 5000000,
          progress: 85,
        },
        {
          id: 5,
          title: 'BioGen',
          description: 'Персонализированная генная терапия',
          category: 'Биотехнологии',
          raised: 1800000,
          progress: 55,
        },
        {
          id: 6,
          title: 'VisionXR',
          description: 'Очки смешанной реальности нового поколения',
          category: 'VR/AR',
          raised: 2200000,
          progress: 65,
        },
      ]

      try {
        const images = await unsplash.getPhotosForCategories(
          projects.map((p) => ({ name: p.category || p.title })),
        )

        this.discoveriesPageData.trendingProjects = projects.map((project, index) => ({
          ...project,
          image:
            images[index]?.url ||
            `https://source.unsplash.com/random/600x400/?${project.category || project.title}`,
        }))
      } catch (error) {
        console.error('Error loading project images:', error)
        this.discoveriesPageData.trendingProjects = projects.map((project) => ({
          ...project,
          image: `https://source.unsplash.com/random/600x400/?${project.category || project.title}`,
        }))
      }
    },
    async loadCategoryImages() {
      try {
        const images = await unsplash.getPhotosForCategories(this.discoveriesPageData.categories)

        this.discoveriesPageData.categories = this.discoveriesPageData.categories.map(
          (category, index) => ({
            ...category,
            image:
              images[index]?.url || `https://source.unsplash.com/random/600x400/?${category.name}`,
          }),
        )
      } catch (error) {
        console.error('Error loading category images:', error)
        this.discoveriesPageData.categories = this.discoveriesPageData.categories.map(
          (category) => ({
            ...category,
            image: `https://source.unsplash.com/random/600x400/?${category.name}`,
          }),
        )
      }
    },
  },
}
</script>

<template>
  <div class="discoveries">
    <NavBar />

    <section class="hero">
      <div class="hero-content">
        <h1>
          {{ discoveriesPageData.heroSection.title }}
          <span class="highlight">{{ discoveriesPageData.heroSection.highlightedWord }}</span> идеи
        </h1>
        <p class="subtitle">{{ discoveriesPageData.heroSection.subtitle }}</p>
        <button class="cta-button">{{ discoveriesPageData.heroSection.ctaButton }}</button>
      </div>
      <div class="hero-gradient"></div>
    </section>

    <section class="trending-section">
      <h2>{{ discoveriesPageData.sectionTitles.trending }}</h2>
      <div class="projects-grid">
        <ProjectCard
          v-for="project in discoveriesPageData.trendingProjects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :category="project.category"
          :progress="project.progress"
          :amount="project.raised"
        />
      </div>
    </section>

    <section class="categories-section">
      <h2>{{ discoveriesPageData.sectionTitles.categories }}</h2>
      <div class="categories-grid">
        <CategoryCard
          v-for="category in discoveriesPageData.categories"
          :key="category.id"
          :id="category.id"
          :name="category.name"
          :icon="category.icon"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.discoveries {
  background-color: #f8fafc;
  min-height: 100vh;
}

.hero {
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  padding: 0 10vw;
  overflow: hidden;
  background: linear-gradient(135deg, #3e1fff 0%, #2a0de0 100%);
  color: #ffffff;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 60vw;
}

.hero h1 {
  font-size: 7.5vh;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2vh;
  font-family: 'Manrope Bold', sans-serif;
}

.highlight {
  color: #ffffff;
  text-shadow: 0 0 1vh rgba(255, 255, 255, 0.3);
}

.subtitle {
  font-size: 3.5vh;
  opacity: 0.9;
  margin-bottom: 3vh;
  font-family: 'Manrope Medium', sans-serif;
}

.cta-button {
  background: #ffffff;
  color: #0f172a;
  border: none;
  padding: 1.5vh 3vh;
  font-size: 2vh;
  font-weight: 600;
  border-radius: 2vh;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Manrope SemiBold', sans-serif;
}

.cta-button:hover {
  box-shadow: 0 1vh 2vh rgba(255, 255, 255, 0.3);
}

.hero-gradient {
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(62, 31, 255, 0.3) 0%, transparent 70%);
}

section {
  padding: 5vh 10vw;
}

h2 {
  font-size: 3vh;
  margin-bottom: 4vh;
  text-align: center;
  color: #0f172a;
  font-family: 'Manrope Bold', sans-serif;
}

.trending-section {
  background-color: #ffffff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35vw, 1fr));
  gap: 2vh;
}

.categories-section {
  background-color: #f8fafc;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
  gap: 2vh;
}
</style>
