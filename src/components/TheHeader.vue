<template>
  <header></header>
</template>

<style lang="scss">
header {
  background-color: var(--primary);
  height: 60px;
}
@include tablet-md {
  header {
    display: none;
  }
}
</style>
