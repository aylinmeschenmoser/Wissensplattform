<template>
  <div class="wp-user">
    <h2 class="wp-user__header">Account</h2>
    <ul>
      <li class="wp-user__personal wp-user-personal">
        Meine Blog-Beiträge
        <i class="wp-user-personal__caret fab fa-caret-right" />
        </li>
      <li class="wp-user__personal wp-user-personal">
        Meine Wissens-Beiträge
        <i class="wp-user-personal__caret fab fa-caret-right" />
      </li>
      <li class="wp-user__personal wp-user-personal">
        Meine Skills
        <i class="wp-user-personal__caret fab fa-caret-right" />
      </li>
      <li class="wp-user__sign-out wp-user-sign-out">
        <button
          class="wp-user-sign-out__button wp-user-sign-out-button"
          @click="logout">Logout
          <i class="wp-user-sign-out-button__sign-out fab fa-sign-out" />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'User',

  data() {
    return {

    };
  },

  methods: {
    logout() {
      console.log('LogoutView::logout()');
      window.localStorage.removeItem('userToken', '123456');
      window.sessionStorage.removeItem('userToken', '123456');
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.wp-user-personal {
  display: flex;
  justify-content: space-between;

  &__caret {
    color: $color-text;
  }
}

.wp-user-sign-out {
  &__button {
    border: none;
    background: none;
    color: $color-text-active;
    font-weight: 750;

    &:hover {
      cursor: pointer;
    }

    &:focus{
      outline: none;
    }
  }
}

.wp-user-sign-out-button {
  padding-top: 1rem;

  &__sign-out {
    list-style: none;
    font-weight: 750;
    color: $color-text-active;
    font-size: 0.8rem;
    margin-top: 0.5rem;
    padding-left: 1rem;
  }
}

.wp-user {
  background-color: white;
  align-items: center;
  font-weight: inherit;
  padding: 0 1rem;

  &__header {
    color: $color-text-active;
    font-weight: 400;
    padding: 1rem 0;
    border-bottom: 1px solid grey;
  }

  &__personal {
  color: $color-text;
  list-style: none;
  border-bottom: 1px solid grey;
  padding: 1rem 0;
  color: $color-text;
  }
}

</style>
