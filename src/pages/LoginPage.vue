<template>
  <div class="container">
    <h1>Welcome Bot</h1>
    <h2>Log in</h2>
    <button @click="handleClickSignIn">
      <i class="fab fa-google"></i>Sign in
    </button>
    <button @click="handleClickSignOut">Sign out</button>
  </div>
  <p>{{ Vue3GoogleOauth.isAuthorized }}</p>
</template>
<script>
import { inject } from 'vue';
export default {
  name: 'LoginPage',
  setup() {
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');
    console.log(Vue3GoogleOauth.instance);
    return {
      Vue3GoogleOauth,
    };
  },
  // data() {
  //   return { isLoggedIn: false };
  // },
  methods: {
    async handleClickSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        // this.isLoggedIn = this.$gAuth.isAuthorized;
        // console.log(
        //   'getAuthResponse$G',
        //   this.$gAuth.GoogleAuth.get().getAuthResponse()
        // );
        //this.isLoggedIn = this.$gAuth.isAuthorized;
        if (!googleUser) {
          return null;
        }
        console.log('googleUser', googleUser);
      } catch (error) {
        console.error(error);
      }
    },
    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        // Vue3GoogleOauth.getAuthInstance().disconnect();
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
    font-size: 70px;
  }
  h2 {
    font-size: 30px;
  }
}
button {
  background-color: var(--primary);
  width: 150px;
  height: 70px;
  font-size: $text-lg;
  margin: 20px;
  border-radius: 4px;
  i {
    font-size: 1.5rem;
    padding-right: 10px;
  }
}
</style>
