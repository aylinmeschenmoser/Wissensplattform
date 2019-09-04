<template>
  <div class="wp-login">
    <h1 class="wp-login__title wp-login-title">Besser-Wisser.</h1>
    <form class="wp-login__form wp-login-form">
      <label for="username" class="wp-login-form__label wp-login-form-label">Benutzername</label>
      <input
        type="text"
        id="username"
        class="wp-login-form__input wp-login-form-input"
        placeholder="Benutzername"
        v-model="username">

      <label for="password" class="wp-login-form__label wp-login-form-label">Passwort</label>
      <input
        type="password"
        id="password"
        class="wp-login-form__input wp-login-form-input"
        placeholder="Passwort"
        v-model="password">

      <label class="wp-login-form__checkbox wp-login-form-checkbox">
        <input type="checkbox" class="wp-login-form-checkbox__input" v-model="remember">
        Angemeldet bleiben
      </label>

      <span v-if="error" class="wp-login-form__error">{{ error }}</span>
      <button class="wp-login-form__submit wp-login-form-submit" @click="login">Anmelden</button>
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
      remember: false,
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    color: white;
  }
}

.wp-login-title {
  font-size: 8rem;
  font-weight: 700;
  padding-bottom: 5rem;
}

.wp-login-form {
  display: flex;
  flex-direction: column;
  //align-content: center;
  box-sizing: border-box;
  min-width: 25rem;

  &__label {
    flex: 1 0 25;
  }

  &__checkbox {
    flex: 1 0 25;
  }

  &__submit {
    flex: 1 0 25;
  }
}

.wp-login-form-label {
  color: white;
  padding: 1.5rem 0 .5rem;
  font-weight: 300;
}

.wp-login-form-input {
  border-radius: 7px;
  border: none;
  color: #333;
  padding: .75rem;
  min-height: 2rem;
}

.wp-login-form-checkbox {
  margin: 1rem 0;
  color: white;
  font-size: .75rem;
  font-weight: 300;
}

.wp-login-form-submit {
  background-color: transparent;
  border: 1px solid white;
  border-radius: 7px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  padding: .75rem;

  &:hover {
    background-color: white;
    color: #1877b8;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
}
</style>
