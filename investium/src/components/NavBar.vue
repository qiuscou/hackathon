<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      navBarData: {
        logo: 'Инвестиум',
        sign_in: 'Войти',
        sign_up: 'Зарегистрироваться',
        account: 'Аккаунт',
        discoveries: 'Открытия',
        startups: 'Стартапы',
        how_it_works: 'Как это работает',
        profile: 'Профиль',
        log_out: 'Выйти',
      },
    }
  },
  computed: {
    ...mapState(['isAuthenticated', 'user']),
  },
  methods: {
    ...mapActions(['logout']),
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
        <router-link to="/discoveries">{{ navBarData.discoveries }}</router-link>
        <router-link to="/startups">{{ navBarData.startups }}</router-link>
        <router-link to="/about">{{ navBarData.how_it_works }}</router-link>
      </nav>

      <div class="auth-buttons">
        <button class="search-btn">
          <i class="fas fa-search"></i>
        </button>

        <template v-if="!isAuthenticated">
          <button class="btn btn-login" @click="goToNewPage('SignIn')">
            {{ navBarData.sign_in }}
          </button>
          <button class="btn btn-primary" @click="goToNewPage('SignUp')">
            {{ navBarData.sign_up }}
          </button>
        </template>

        <div v-else class="account-menu">
          <button class="btn btn-login" @click="handleAccount">
            {{ user?.name || navBarData.account }}
          </button>
          <div class="dropdown-content">
            <a @click="goToNewPage('UserProfile')">{{ navBarData.profile }}</a>
            <a @click="logout">{{ navBarData.log_out }}</a>
          </div>
        </div>
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

.account-menu {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 1vh;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  font-size: 1.7vh;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.account-menu:hover .dropdown-content {
  display: block;
}
</style>
