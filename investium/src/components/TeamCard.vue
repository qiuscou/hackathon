<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div class="team-card">
    <div class="team-card-image" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <div class="team-card-content">
      <h3>{{ name }}</h3>
      <p class="role">{{ role }}</p>
      <p class="bio">{{ bio }}</p>
      <div class="social-links">
        <a href="#" class="social-link">in</a>
        <a href="#" class="social-link">tg</a>
        <a href="#" class="social-link">mail</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team-card {
  background: #ffffff;
  border-radius: 2vh;
  overflow: hidden;
  box-shadow: 0 1vh 2vh rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-1vh);
  box-shadow: 0 2vh 3vh rgba(0, 0, 0, 0.15);
}

.team-card-image {
  height: 30vh;
  background-size: cover;
  background-position: center;
  position: relative;
}

.team-card-content {
  padding: 3vh;
}

.team-card h3 {
  font-size: 2.5vh;
  margin-bottom: 0.5vh;
  color: #0f172a;
  font-family: 'Manrope Bold', sans-serif;
}

.team-card .role {
  font-size: 1.8vh;
  color: #3e1fff;
  margin-bottom: 2vh;
  font-family: 'Manrope SemiBold', sans-serif;
}

.team-card .bio {
  font-size: 1.6vh;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 2vh;
  font-family: 'Manrope Regular', sans-serif;
}

.social-links {
  display: flex;
  gap: 1vh;
}

.social-link {
  display: inline-block;
  width: 5vh;
  height: 5vh;
  background-color: #f1f5f9;
  color: #3e1fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4vh;
  text-decoration: none;
  font-family: 'Manrope Medium', sans-serif;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #3e1fff;
  color: white;
  transform: scale(1.1);
}
</style>
