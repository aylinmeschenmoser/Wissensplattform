<template>
  <div class="wp-login">
    <h1 class="wp-login__title">Besser-Wisser</h1>
    <form class="wp-login__form wp-login-form">
      <label for="username" class="wp-login-form__label">Benutzername</label>
      <input
        type="text"
        id="username"
        class="wp-login-form__input"
        placeholder="Benutzername"
        v-model="username">

      <label for="password" class="wp-login-form__label">Passwort</label>
      <input
        type="password"
        id="password"
        class="wp-login-form__input"
        placeholder="Passwort"
        v-model="password">

      <label class="wp-login-form__checkbox wp-login-form-checkbox">
        <input type="checkbox" class="wp-login-form-checkbox__input" v-model="remember">
        Angemeldet bleiben
      </label>

      <span v-if="error" class="wp-login-form__error">{{ error }}</span>
      <button class="wp-login-form__submit" @click="login">Anmelden</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  data() {
    return {
      username: '',
      password: '',
      error: '',
      remember: false
    };
  },

  created() {
    console.log('LoginView::created()');
  },

  methods: {
    login() {
      console.log('LoginView::login()');

      // TODO authenticate with server

      if (this.username === 'test' && this.password === 'test') {
        if (this.remember) {
          // TODO implement invalidation logic
          window.localStorage.setItem('userToken', '123456');
        } else {
          window.sessionStorage.setItem('userToken', '123456');
        }

        this.$router.push({ name: 'news' });
      } else {
        this.error = 'Falscher Benutzername und / oder Passwort.';
      }
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.wp-login {
  position: relative;
}
</style>
