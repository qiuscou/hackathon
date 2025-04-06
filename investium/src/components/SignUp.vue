<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      signUpData: {
        create_account: 'Создать аккаунт',
        name: 'Имя',
        email: 'Email',
        password: 'Пароль',
        confirm_password: 'Подтвердите пароль',
        sign_up: 'Зарегистрироваться',
        already_have_an_account: 'Уже есть аккаунт?',
        sign_in: 'Войти',
      },
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    }
  },
  methods: {
    ...mapActions(['login']),
    async handleSubmit() {
      if (this.password !== this.confirmPassword) {
        this.error = 'Пароли не совпадают'
        return
      }

      try {
        const user = {
          name: this.name,
          email: this.email,
        }

        await this.login(user)
        this.$router.push('/')
      } catch (error) {
        this.error = 'Ошибка регистрации: ' + error.message
      }
    },
    goToNewPage(page) {
      this.$router.push({ name: page })
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="register-form">
      <h2>{{ signUpData.create_account }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>{{ signUpData.name }}</label>
          <input type="text" v-model="name" required />
        </div>
        <div class="form-group">
          <label>{{ signUpData.email }}</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label>{{ signUpData.password }}</label>
          <input type="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label>{{ signUpData.confirm_password }}</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit" class="btn-primary">
          {{ signUpData.sign_up }}
        </button>
      </form>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div class="auth-footer">
        <span>{{ signUpData.already_have_an_account }}</span>
        <router-link to="/sign_in">{{ signUpData.sign_in }}</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
  width: 100%;
  max-width: 50vh;
  padding: 5vh;
  background: white;
  border-radius: 2vh;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 3.25vh;
  color: #2c3e50;
  margin: 0 0 0.5vh 0;
  font-weight: 600;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.8vh;
  margin-bottom: 2vh;
}

label {
  font-size: 1.85vh;
  color: #555;
}

input {
  flex: 1;
  padding: 1.8vh 2.5vh;
  border: 0.2vh solid rgba(0, 0, 0, 0.1);
  border-radius: 1vh;
  font-size: 1.85vh;
  background-color: rgba(0, 0, 0, 0.02);
  color: #2c3e50;
  transition: all 0.3s ease;
  outline: none;
  min-width: 0;
  font-family: 'Manrope Regular';
}

input::placeholder {
  color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  transition: opacity 0.3s ease;
}

input:hover {
  border-color: #3e1fff;
  background-color: rgba(0, 0, 0, 0.05);
}

input:focus {
  border-color: #3e1fff;
  box-shadow: 0 0 1.5vh rgba(62, 31, 255, 0.3);
  background-color: rgba(0, 0, 0, 0.03);
}

input:focus::placeholder {
  opacity: 0.5;
}

.btn-primary {
  width: 100%;
  padding: 1.8vh;
  background-color: #3e1fff;
  color: white;
  border: none;
  border-radius: 1vh;
  font-size: 1.8vh;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Manrope Regular';
}

.btn-primary:hover {
  background-color: #2a0de0;
}

.auth-footer {
  display: flex;
  gap: 0.8vh;
  justify-content: center;
  font-size: 1.85vh;
  color: #666;
}

.auth-footer a {
  color: #3e1fff;
  text-decoration: none;
  font-weight: 500;
  font-family: 'Manrope Medium';
}

.error-message {
  color: #ff3e3e;
  text-align: center;
  font-size: 1.7vh;
  margin-top: -1vh;
  font-family: 'Manrope Medium';
}
</style>
