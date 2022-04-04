<template>
  <div class="container">
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>The Page you are looking for doesn't exist !</p>
    <router-link class="redirect-link" :to="{ name: 'messages' }"
      >Home</router-link
    >
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
  color: var(--text-primary-1);

  h1 {
    font-size: 6.25rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.3rem;
  }

  .redirect-link {
    background-color: var(--primary);
    color: var(--text-secondary-1);
    text-decoration: none;
    padding: 1.25rem 1.9rem;
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
    }

    h2 {
      font-size: 1.9rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
}
</style>
