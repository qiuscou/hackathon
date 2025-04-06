<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      profileData: {
        title: 'Мой профиль',
        name: 'Имя',
        email: 'Email',
        change_password: 'Изменить пароль',
        current_password: 'Текущий пароль',
        new_password: 'Новый пароль',
        confirm_password: 'Подтвердите пароль',
        save: 'Сохранить',
        logout: 'Выйти',
        edit: 'Редактировать',
        cancel: 'Отмена',
      },
      isEditing: false,
      form: {
        name: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
      error: null,
    }
  },
  computed: {
    ...mapState(['user']),
  },
  created() {
    if (this.user) {
      this.form.name = this.user.name || ''
      this.form.email = this.user.email || ''
    }
  },
  methods: {
    ...mapActions(['logout']),
    async handleLogout() {
      try {
        await this.logout()
        this.$router.push('/')
      } catch (error) {
        this.error = 'Ошибка при выходе из системы'
        console.error('Logout error:', error)
      }
    },
    toggleEdit() {
      this.isEditing = !this.isEditing
      this.error = null
    },
    async handleSubmit() {
      this.error = null

      if (
        this.isEditing &&
        this.form.newPassword &&
        this.form.newPassword !== this.form.confirmPassword
      ) {
        this.error = 'Новые пароли не совпадают'
        return
      }

      try {
        this.isEditing = false
      } catch (error) {
        this.error = error.message || 'Ошибка при сохранении профиля'
      }
    },
  },
}
</script>

<template>
  <div class="container">
    <div class="profile-form">
      <div class="profile-header">
        <h2>{{ profileData.title }}</h2>
        <button v-if="!isEditing" @click="toggleEdit" class="btn-edit">
          {{ profileData.edit }}
        </button>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>{{ profileData.name }}</label>
          <input
            type="text"
            v-model="form.name"
            :disabled="!isEditing"
            :class="{ 'input-disabled': !isEditing }"
          />
        </div>

        <div class="form-group">
          <label>{{ profileData.email }}</label>
          <input
            type="email"
            v-model="form.email"
            :disabled="!isEditing"
            :class="{ 'input-disabled': !isEditing }"
          />
        </div>

        <template v-if="isEditing">
          <div class="password-section">
            <h3>{{ profileData.change_password }}</h3>

            <div class="form-group">
              <label>{{ profileData.current_password }}</label>
              <input
                type="password"
                v-model="form.currentPassword"
                placeholder="Оставьте пустым, если не хотите менять"
              />
            </div>

            <div class="form-group">
              <label>{{ profileData.new_password }}</label>
              <input
                type="password"
                v-model="form.newPassword"
                placeholder="Оставьте пустым, если не хотите менять"
              />
            </div>

            <div class="form-group">
              <label>{{ profileData.confirm_password }}</label>
              <input
                type="password"
                v-model="form.confirmPassword"
                placeholder="Подтвердите новый пароль"
              />
            </div>
          </div>
        </template>

        <div v-if="error" class="error-message">
          <i class="fas fa-exclamation-circle"></i> {{ error }}
        </div>

        <div class="form-actions">
          <button v-if="isEditing" type="submit" class="btn-primary">
            {{ profileData.save }}
          </button>

          <button v-if="isEditing" type="button" @click="toggleEdit" class="btn-cancel">
            {{ profileData.cancel }}
          </button>
        </div>
      </form>

      <button @click="handleLogout" class="btn-logout">
        {{ profileData.logout }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 5vh 0;
  background-color: #f5f7fa;
}

.profile-form {
  width: 100%;
  max-width: 60vh;
  padding: 5vh;
  background: white;
  border-radius: 2vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3vh;
}

h2 {
  font-size: 3.25vh;
  color: #2c3e50;
  margin: 0;
  font-weight: 600;
  font-family: 'Manrope SemiBold';
}

h3 {
  font-size: 2.5vh;
  color: #2c3e50;
  margin: 3vh 0 2vh;
  font-weight: 500;
  font-family: 'Manrope Medium';
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 1.2vh;
  margin-bottom: 2.5vh;
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
  font-family: 'Manrope Regular';
}

.input-disabled {
  background-color: #f9f9f9;
  color: #666;
  border-color: #eee;
  cursor: not-allowed;
}

input:hover:not(.input-disabled) {
  border-color: #3e1fff;
  background-color: rgba(0, 0, 0, 0.05);
}

input:focus:not(.input-disabled) {
  border-color: #3e1fff;
  box-shadow: 0 0 1.5vh rgba(62, 31, 255, 0.3);
  background-color: rgba(0, 0, 0, 0.03);
}

.password-section {
  margin-top: 3vh;
  padding-top: 3vh;
  border-top: 0.1vh solid #eee;
}

.btn-edit {
  padding: 1vh 2vh;
  background-color: transparent;
  border: 0.1vh solid #3e1fff;
  color: #3e1fff;
  border-radius: 1vh;
  font-size: 1.8vh;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Manrope Medium';
}

.btn-edit:hover {
  background-color: rgba(62, 31, 255, 0.1);
}

.btn-primary {
  padding: 1.8vh;
  background-color: #3e1fff;
  color: white;
  border: none;
  border-radius: 1vh;
  font-size: 1.8vh;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Manrope SemiBold';
  margin-right: 1.5vh;
}

.btn-primary:hover {
  background-color: #2a0de0;
}

.btn-cancel {
  padding: 1.8vh;
  background-color: transparent;
  border: 0.1vh solid #ddd;
  color: #666;
  border-radius: 1vh;
  font-size: 1.8vh;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Manrope Medium';
}

.btn-cancel:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.btn-logout {
  width: 100%;
  padding: 1.8vh;
  margin-top: 3vh;
  background-color: transparent;
  border: 0.1vh solid #ff3e3e;
  color: #ff3e3e;
  border-radius: 1vh;
  font-size: 1.8vh;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Manrope Medium';
}

.btn-logout:hover {
  background-color: rgba(255, 62, 62, 0.1);
}

.form-actions {
  display: flex;
  margin-top: 3vh;
}

.error-message {
  color: #ff3e3e;
  font-size: 1.7vh;
  margin: 2vh 0;
  font-family: 'Manrope Medium';
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.error-message i {
  font-size: 1.8vh;
}
</style>
