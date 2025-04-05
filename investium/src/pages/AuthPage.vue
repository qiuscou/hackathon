<script>
export default {
  data() {
    return {
      authPageData: {
        logo: 'Инвестиум',
      },
    }
  },
}
</script>

<template>
  <div class="auth-layout">
    <div class="auth-background">
      <div class="auth-overlay"></div>
    </div>
    <div class="auth-container">
      <router-link to="/" class="auth-logo">
        <span>{{ authPageData.logo }}</span>
      </router-link>
      <div class="auth-card">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  display: flex;
  min-height: 100vh;
}

.auth-background {
  flex: 1;
  background-size: cover;
  position: relative;
}

.auth-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(62, 31, 255, 0.2);
  backdrop-filter: blur(0.5vh);
}

.auth-container {
  width: 45vh;
  background: white;
  padding: 4vh;
  display: flex;
  flex-direction: column;
}

.auth-logo {
  font-size: 2.4vh;
  font-weight: bold;
  color: #3e1fff;
  text-decoration: none;
  margin-bottom: 4vh;
  font-family: 'Manrope Bold';
  align-self: center;
}

.auth-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
