<script>
import NavBar from '@/components/NavBar.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import CategoryCard from '@/components/CategoryCard.vue'

import bg1Video from '@/assets/videos/bg1.mp4'
import bg2Video from '@/assets/videos/bg2.mp4'
import bg3Video from '@/assets/videos/bg3.mp4'
import bg4Video from '@/assets/videos/bg4.mp4'
import bg5Video from '@/assets/videos/bg5.mp4'

export default {
  components: {
    NavBar,
    ProjectCard,
    CategoryCard,
  },
  data() {
    return {
      bg1Video,
      bg2Video,
      bg3Video,
      bg4Video,
      bg5Video,
      homePageData: {
        findText: 'Поиск проектов, создателей и категорий',
        recommended_projects: 'Рекомендуемые проекты',
        categories: 'Категории',
        header: 'Строим экономику будущего — вместе',
        sub_header: 'Зарабатывайте на российских прорывах',
        search: 'Поиск',
      },
      featuredProjects: [
        {
          id: 1,
          title: 'Умный дом нового поколения',
          creator: 'SmartTech Inc.',
          description: 'Инновационная система управления домом с ИИ',
          progress: 75,
          amount: 12500000,
          backers: 342,
        },
        {
          id: 2,
          title: 'Экологичные аккумуляторы',
          creator: 'EcoPower',
          description: 'Батареи нового поколения с увеличенным сроком службы',
          progress: 42,
          amount: 8700000,
          backers: 156,
        },
      ],
      categories: [
        {
          id: 1,
          name: 'IT-технологии',
        },
        {
          id: 2,
          name: 'Биотехнологии',
        },
        {
          id: 3,
          name: 'Промышленность',
        },
      ],
      backgroundVideos: [
        { src: bg1Video, active: true },
        { src: bg2Video, active: false },
        { src: bg3Video, active: false },
        { src: bg4Video, active: false },
        { src: bg5Video, active: false },
      ],
      currentVideoIndex: 0,
      videoInterval: null,
    }
  },
  mounted() {
    this.startVideoRotation()
  },
  beforeUnmount() {
    this.stopVideoRotation()
  },
  methods: {
    startVideoRotation() {
      this.videoInterval = setInterval(() => {
        this.backgroundVideos[this.currentVideoIndex].active = false
        this.currentVideoIndex = (this.currentVideoIndex + 1) % this.backgroundVideos.length
        this.backgroundVideos[this.currentVideoIndex].active = true
      }, 8000)
    },
    stopVideoRotation() {
      if (this.videoInterval) {
        clearInterval(this.videoInterval)
      }
    },
    searchProjects() {
      console.log('Поиск проектов')
    },
  },
}
</script>

<template>
  <div class="home">
    <NavBar />

    <section class="hero">
      <div class="video-background">
        <div class="video-overlay"></div>
        <video
          v-for="(video, index) in backgroundVideos"
          :key="index"
          :src="video.src"
          :class="{ active: video.active }"
          muted
          loop
          autoplay
          playsinline
        ></video>
      </div>
      <div class="container hero-content">
        <h1>{{ homePageData.header }}</h1>
        <p>{{ homePageData.sub_header }}</p>
        <div class="search-box">
          <input
            type="text"
            :placeholder="homePageData.findText"
            v-model="searchQuery"
            @keyup.enter="searchProjects"
          />
          <button class="btn btn-primary" @click="searchProjects">{{ homePageData.search }}</button>
        </div>
      </div>
    </section>

    <section class="featured-projects">
      <div class="container">
        <h2>{{ homePageData.recommended_projects }}</h2>
        <div class="projects-grid">
          <ProjectCard v-for="project in featuredProjects" :key="project.id" v-bind="project" />
        </div>
      </div>
    </section>

    <section class="categories">
      <div class="container">
        <h2>{{ homePageData.categories }}</h2>
        <div class="categories-grid">
          <CategoryCard
            v-for="category in categories"
            :key="category.id"
            :id="category.id"
            :name="category.name"
            :image="category.image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding-bottom: 5vh;
}

.container {
  max-width: 100vh;
  margin: 0 auto;
  padding: 0 2vh;
}

.hero {
  position: relative;
  height: 100vh;
  min-height: 60vh;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.video-background video.active {
  opacity: 1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 6vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1vh);
  border-radius: 2vh;
  width: 100vh;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  box-sizing: border-box;
  gap: 3vh;
}

.hero h1 {
  font-size: 4vh;
  margin: 0;
  text-shadow: 0 0.4vh 0.8vh rgba(0, 0, 0, 0.5);
  line-height: 1.3;
}

.hero p {
  font-size: 2.2vh;
  margin: 0;
  text-shadow: 0 0.2vh 0.6vh rgba(0, 0, 0, 0.5);
  line-height: 1.4;
}

.search-box {
  display: flex;
  width: 100%;
  max-width: 65vh;
  margin-top: 1vh;
}

.search-box input {
  flex: 1;
  padding: 1.8vh 2.5vh;
  border: 0.2vh solid rgba(255, 255, 255, 0.3);
  border-radius: 1vh 0 0 1vh;
  font-size: 1.8vh;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
  outline: none;
  min-width: 0;
}

.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.7);
  opacity: 1;
  transition: opacity 0.3s ease;
}

.search-box input:hover {
  border-color: #3e1fff;
  background-color: rgba(255, 255, 255, 0.15);
}

.search-box input:focus {
  border-color: #3e1fff;
  box-shadow: 0 0 1.5vh rgba(62, 31, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
}

.search-box input:focus::placeholder {
  opacity: 0.5;
}

.search-box button {
  border-radius: 0 1vh 1vh 0;
  font-size: 1.8vh;
  padding: 0 4vh;
  background-color: #3e1fff;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.search-box button:hover {
  background-color: #2a0de0;
}

.featured-projects {
  padding: 8vh 0;
}

.featured-projects h2,
.categories h2 {
  text-align: center;
  margin-bottom: 4vh;
  font-size: 3.5vh;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40vh, 1fr));
  gap: 2vh;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25vh, 1fr));
  gap: 2vh;
}

.btn,
input {
  font-family: 'Manrope Regular', sans-serif;
  font-weight: 500;
}
</style>
