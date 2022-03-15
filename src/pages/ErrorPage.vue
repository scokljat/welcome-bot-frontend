<template>
  <div class="container">
    <h1>404</h1>
    <h2>Page not found</h2>
    <h3>The Page you are looking for doesn't exist !</h3>
    <router-link :to="{ name: 'messages' }"><button>Home</button></router-link>
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  padding: 0 0.63rem;
  color: var(--text-primary-1);

  h1 {
    font-size: 6.25rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3 {
    font-size: 0.94rem;
  }

  button {
    background-color: var(--primary);
    padding: 0.63rem;
    margin: 1.25rem;
    border-radius: 0.25rem;
  }
}

@include tablet-md {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 9.4rem;
      padding: 0.63rem;
    }

    h2 {
      font-size: 1.88rem;
    }

    h3 {
      font-size: 1.25rem;
    }
  }
}
</style>
