<template>
  <div class="container">
    <h1>Welcome Bot</h1>
    <h2>Log in</h2>
    <button @click="handleSignIn"><i class="fab fa-google"></i>Sign in</button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'LoginPage',
  computed: {
    ...mapGetters({ isLoggedIn: 'isLoggedIn' }),
  },
  methods: {
    ...mapActions({ login: 'login' }),

    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();

        if (!googleUser) {
          return null;
        }

        const token = googleUser.wc.access_token;

        await this.login({ token });

        if (this.isLoggedIn) {
          this.$router.push({ name: 'messages' });
        }
      } catch (error) {
        console.log(error);
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
  text-align: center;
  min-height: 80vh;

  h1 {
    font-size: 4.8rem;

    @include tablet-md {
      font-size: 6.25rem;
    }
  }

  h2 {
    font-size: 1.5rem;

    @include tablet-md {
      font-size: 1.9rem;
    }
  }
}

button {
  background-color: var(--primary);
  padding: 1.25rem 1.9rem;
  font-size: $text-lg;
  margin: 1.25rem;
  border-radius: 0.25rem;

  i {
    font-size: 1.5rem;
    padding-right: 0.63rem;
  }
}
</style>
