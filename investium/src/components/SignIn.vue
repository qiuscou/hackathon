<script>
export default {
  data() {
    return {
      signInData: {
        account_login: 'Вход в аккаунт',
        email: 'Email',
        password: 'Пароль',
        sign_in: 'Войти',
        no_account: 'Нет аккаунта?',
        sign_up: 'Зарегистрироваться',
      },
      email: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      // Логика входа
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="login-form">
      <h2>{{ signInData.account_login }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>{{ signInData.email }}</label>
          <input type="email" v-model="email" />
        </div>
        <div class="form-group">
          <label>{{ signInData.password }}</label>
          <input type="password" v-model="password" />
        </div>
        <button type="submit" class="btn-primary">{{ signInData.sign_in }}</button>
      </form>
      <div class="auth-footer">
        <span>{{ signInData.no_account }}</span>
        <router-link to="/sign_up">{{ signInData.sign_up }}</router-link>
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

.login-form {
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
  margin-bottom: 1.5vh;
}

label {
  font-size: 1.85vh;
  color: #555;
}

input {
  padding: 1.5vh 2vh;
  border: 0.1vh solid #ddd;
  border-radius: 0.6vh;
  font-size: 1.85vh;
  font-family: 'Manrope Regular';
  transition: all 0.3s ease;
}

input:focus {
  border-color: #3e1fff;
  box-shadow: 0 0 0 0.2vh rgba(62, 31, 255, 0.2);
}

.btn-primary {
  width: 100%;
  padding: 1.5vh;
  background-color: #3e1fff;
  color: white;
  border: none;
  border-radius: 0.6vh;
  font-size: 1.85vh;
  font-family: 'Manrope Regular';
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
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
}
</style>
