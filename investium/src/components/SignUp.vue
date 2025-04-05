<script>
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
    }
  },
  methods: {
    handleSubmit() {
      // Логика регистрации
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
          <input type="text" v-model="name" />
        </div>
        <div class="form-group">
          <label>{{ signUpData.email }}</label>
          <input type="email" v-model="email" />
        </div>
        <div class="form-group">
          <label>{{ signUpData.password }}</label>
          <input type="password" v-model="password" />
        </div>
        <div class="form-group">
          <label>{{ signUpData.confirm_password }}</label>
          <input type="password" v-model="confirmPassword" />
        </div>
        <button type="submit" class="btn-primary">{{ signUpData.sign_up }}</button>
      </form>
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
}
</style>
