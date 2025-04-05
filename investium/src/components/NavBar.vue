<script>
export default {
  data() {
    return {
      navBarData: {
        logo: 'Инвестиум',
        sign_in: 'Войти',
        sign_up: 'Зарегистрироваться',
        discoveries: 'Открытия',
        startups: 'Стартапы',
        how_it_works: 'Как это работает',
      },
      isHomePage: this.$route.path === '/',
    }
  },
  watch: {
    $route(to) {
      this.isHomePage = to.path === '/'
    },
  },
  methods: {
    goToNewPage(page) {
      this.$router.push({ name: page })
    },
  },
}
</script>

<template>
  <header class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <span>{{ navBarData.logo }}</span>
      </router-link>

      <nav class="main-nav">
        <router-link to="/discover">{{ navBarData.discoveries }}</router-link>
        <router-link to="/start">{{ navBarData.startups }}</router-link>
        <router-link to="/about">{{ navBarData.how_it_works }}</router-link>
      </nav>

      <div class="auth-buttons">
        <button class="search-btn">
          <i class="fas fa-search"></i>
        </button>
        <button class="btn btn-login" @click="goToNewPage('SignIn')">
          {{ navBarData.sign_in }}
        </button>
        <button class="btn btn-primary" @click="goToNewPage('SignUp')">
          {{ navBarData.sign_up }}
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  padding: 1.5vh 0;
  box-shadow: 0 0.1vh 0.3vh rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  background: #ffffff;
  z-index: 100;
}

.container {
  display: flex;
  align-items: center;
  max-width: 180vh;
  margin: 0 auto;
  padding: 0 2vh;
}

.logo {
  font-size: 3.25vh;
  font-weight: bold;
  color: #3e1fff;
  text-decoration: none;
  margin-right: 3vh;
  font-family: 'Manrope Bold';
}

.main-nav {
  display: flex;
  gap: 4vh;
  font-size: 1.85vh;
  margin-right: auto;
  margin-top: 0.25vh;
  margin-left: 10vh;
  font-family: 'Manrope Medium';
}

.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: #3e1fff;
}

.auth-buttons {
  display: flex;
  gap: 1.5vh;
  align-items: center;
}

.btn {
  padding: 1vh 1.75vh;
  border-radius: 0.4vh;
  cursor: pointer;
  border: none;
  font-family: 'Manrope Regular';
  transition: all 0.3s ease;
}

.btn-login {
  border: 0.1vh solid #ddd;
  border-radius: 1vh;
  font-size: 1.85vh;
  background-color: transparent;
}

.btn-primary {
  border-radius: 1vh;
  font-size: 1.85vh;
  background-color: #3e1fff;
  color: white;
}

.btn-primary:hover {
  background-color: #2a0de0;
}

.search-btn {
  background: transparent;
  border: none;
  font-size: 1.8vh;
  cursor: pointer;
  color: #333;
  transition: color 0.3s ease;
}

.search-btn:hover {
  color: #3e1fff;
}
</style>
