<template>
  <header></header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss">
header {
  background-color: var(--primary);
  height: 3.75rem;
  position: relative;

  @include tablet-md {
    display: none;
  }
}
</style>
