<template>
  <div class="container">
    <h1>Welcome Bot</h1>
    <h2>Log in</h2>
    <button @click="handleClickSignIn">
      <i class="fab fa-google"></i>Sign in
    </button>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',

  methods: {
    ...mapActions({ login: 'login' }),

    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        const token = googleUser.wc.id_token;
        this.login({ token });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  h1 {
    font-size: 4.4rem;
  }

  h2 {
    font-size: 1.9rem;
  }
}

button {
  background-color: var(--primary);
  width: 9.4rem;
  height: 4.4rem;
  font-size: $text-lg;
  margin: 1.25rem;
  border-radius: 0.25rem;

  i {
    font-size: 1.5rem;
    padding-right: 0.63rem;
  }
}
</style>
