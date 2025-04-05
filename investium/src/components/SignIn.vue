<script>
export default {
  data() {
    return {
      signInData: {
        logo: 'Инвестиум',
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
  padding: 20px;
  background-color: #f5f7fa;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 3vh;
  width: 100%;
  max-width: 50vh;
  padding: 5vh;
  background: white;
  border-radius: 2vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 3.25vh;
  color: #2c3e50;
  margin: 0 0 1vh 0;
  font-weight: 600;
  text-align: center;
  font-family: 'Manrope SemiBold';
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 1.2vh;
  margin-bottom: 2vh;
}

label {
  font-size: 1.9vh;
  color: #555;
  font-family: 'Manrope Medium';
}

input {
  flex: 1;
  padding: 1.8vh 2.5vh;
  border: 0.2vh solid rgba(0, 0, 0, 0.1);
  border-radius: 1vh;
  font-size: 1.8vh;
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
  font-size: 1.9vh;
  font-family: 'Manrope SemiBold';
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1vh;
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
  margin-top: 2vh;
  font-family: 'Manrope Regular';
}

.auth-footer a {
  color: #3e1fff;
  text-decoration: none;
  font-weight: 500;
  font-family: 'Manrope Medium';
  transition: color 0.2s ease;
}

.auth-footer a:hover {
  color: #2a0de0;
}
</style>
