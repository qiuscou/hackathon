<script>
import NavBar from '@/components/NavBar.vue'
import TeamCard from '@/components/TeamCard.vue'
import unsplash from '@/unsplash'

export default {
  components: {
    NavBar,
    TeamCard,
  },
  data() {
    return {
      aboutPageData: {
        ourTeam: 'Наша команда',
        heroSection: {
          title: 'Мы создаем будущее',
          subtitle: 'Единая платформа, объединяющая инновации и инвестиции',
          ctaButton: 'Узнать больше',
        },
        mission: {
          title: 'Наша миссия',
          items: [
            'Поддержка технологических стартапов',
            'Создание экосистемы для инноваций',
            'Развитие предпринимательства в России',
          ],
        },
        team: [
          {
            id: 1,
            name: 'Игорь Краснов',
            role: 'Директор по цифровым трансформациям',
            bio: 'Эксперт по интеграции инновационных технологий в бизнес-процессы. Автор методик цифровизации крупных корпораций.',
            image: '',
          },
          {
            id: 2,
            name: 'Владислав Фаткулин',
            role: 'Основатель & Стратегический визионер',
            bio: 'Пионер в области deep-tech стартапов. Создал 5 успешных венчурных фондов с фокусом на прорывные технологии.',
            image: '',
          },
          {
            id: 3,
            name: 'Светлана Акимова',
            role: 'CTO по искусственному интеллекту',
            bio: 'Разработчик нейросетевых архитектур для промышленного применения. Возглавляла R&D в международных AI-лабораториях.',
            image: '',
          },
          {
            id: 4,
            name: 'Сабина Сытдыкова',
            role: 'Управляющий партнер по инвестициям',
            bio: 'Архитектор финансовых систем для высокорисковых проектов. Специализация — sustainable tech и impact investing.',
            image: '',
          },
          {
            id: 5,
            name: 'Дмитрий Медведчиков',
            role: 'Директор по глобальному продвижению',
            bio: 'Создатель кросс-культурных маркетинговых стратегий. Запустил 20+ продуктов на международные рынки.',
            image: '',
          },
        ],
        stats: [
          { value: '250+', label: 'Стартапов' },
          { value: '15K+', label: 'Инвесторов' },
          { value: '180M+', label: 'Привлечено ₽' },
        ],
      },
      isLoading: true,
      typedTitle: '',
      typedSubtitle: '',
      titleIndex: 0,
      subtitleIndex: 0,
      typingSpeed: 50,
    }
  },
  async created() {
    await this.loadTeamPhotos()
    this.isLoading = false
    this.typeTitle()
  },
  methods: {
    async loadTeamPhotos() {
      try {
        const images = await unsplash.getPhotosForCategories(
          this.aboutPageData.team.map((member) => ({ name: member.name })),
        )

        this.aboutPageData.team = this.aboutPageData.team.map((member, index) => ({
          ...member,
          image:
            images[index]?.url ||
            `https://source.unsplash.com/random/600x600/?portrait,${member.name}`,
        }))
      } catch (error) {
        console.error('Error loading team photos:', error)
        this.aboutPageData.team = this.aboutPageData.team.map((member) => ({
          ...member,
          image: `https://source.unsplash.com/random/600x600/?portrait,${member.name}`,
        }))
      }
    },
    typeTitle() {
      if (this.titleIndex < this.aboutPageData.heroSection.title.length) {
        this.typedTitle += this.aboutPageData.heroSection.title.charAt(this.titleIndex)
        this.titleIndex++
        setTimeout(this.typeTitle, this.typingSpeed)
      } else {
        this.typeSubtitle()
      }
    },
    typeSubtitle() {
      if (this.subtitleIndex < this.aboutPageData.heroSection.subtitle.length) {
        this.typedSubtitle += this.aboutPageData.heroSection.subtitle.charAt(this.subtitleIndex)
        this.subtitleIndex++
        setTimeout(this.typeSubtitle, this.typingSpeed)
      }
    },
    scrollToMission() {
      const missionSection = document.querySelector('.mission-section')
      if (missionSection) {
        missionSection.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>

<template>
  <div class="about">
    <NavBar />

    <section class="hero">
      <div class="hero-content">
        <h1 v-html="typedTitle"></h1>
        <p class="subtitle">{{ typedSubtitle }}</p>
      </div>
      <button class="cta-button" @click="scrollToMission">
        {{ aboutPageData.heroSection.ctaButton }}
      </button>
      <div class="hero-gradient"></div>
    </section>

    <section class="mission-section">
      <h2>{{ aboutPageData.mission.title }}</h2>
      <div class="mission-grid">
        <div class="mission-card" v-for="(item, index) in aboutPageData.mission.items" :key="index">
          <div class="mission-number">{{ index + 1 }}</div>
          <p>{{ item }}</p>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-card" v-for="(stat, index) in aboutPageData.stats" :key="index">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="team-section">
      <h2>{{ aboutPageData.ourTeam }}</h2>
      <div class="team-grid">
        <TeamCard
          v-for="member in aboutPageData.team"
          :key="member.id"
          :name="member.name"
          :role="member.role"
          :bio="member.bio"
          :image="member.image"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  background-color: #f8fafc;
  min-height: 100vh;
}

.hero {
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 10vw;
  overflow: hidden;
  background: #3e1fff;
  color: #ffffff;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 60vw;
  bottom: 10vh;
}

.hero h1 {
  font-size: 10vh;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: -2.5vh;
  font-family: 'Manrope Bold', sans-serif;
  min-height: 9vh;
}

.subtitle {
  font-size: 3.5vh;
  opacity: 0.9;
  margin-bottom: 3vh;
  margin-top: 7vh;
  margin-left: 0.75vh;
  font-family: 'Manrope Medium', sans-serif;
  min-height: 4vh;
  animation: blink 1s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

.cta-button {
  position: absolute;
  bottom: 15.5vh;
  left: 32.5vh;
  transform: translateX(-50%);
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
  background: #3e1fff;
}

section {
  padding: 5vh 10vw;
}

h2 {
  font-size: 5vh;
  margin-bottom: 4vh;
  text-align: center;
  color: #0f172a;
  font-family: 'Manrope Bold', sans-serif;
}

.mission-section {
  background-color: #ffffff;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40vw, 1fr));
  gap: 3vh;
}

.mission-card {
  background: #f8fafc;
  border-radius: 2vh;
  padding: 3vh;
  display: flex;
  align-items: flex-start;
  gap: 2vh;
}

.mission-number {
  margin-top: 2.15vh;
  font-size: 3vh;
  font-weight: bold;
  color: #3e1fff;
  background: white;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mission-section p {
  font-size: 2.5vh;
}

.stats-section {
  background: #3e1fff;
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr));
  gap: 3vh;
}

.stat-card {
  text-align: center;
  padding: 3vh;
}

.stat-value {
  font-size: 6vh;
  font-weight: bold;
  margin-bottom: 1vh;
}

.stat-label {
  font-size: 3vh;
  opacity: 0.9;
}

.team-section {
  background-color: #ffffff;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
  gap: 4vh;
}
</style>
