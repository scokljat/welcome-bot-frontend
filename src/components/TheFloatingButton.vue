<template>
  <button class="wrapper" @click="toggleAppModal">
    <i class="fa-solid fa-plus"></i>
  </button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TheFloatingButton',
  methods: {
    ...mapMutations({ toggleAppModal: 'toggleAppModal' }),
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 45px;
  height: 45px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1.4rem;
  right: 0.8rem;
  padding: 10px;
  background-color: var(--primary);
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 4px 5px 0 rgba(0, 0, 0, 0.14);
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    opacity: 0.8;
  }
  i {
    font-size: 0.88rem;
    color: var(--text-primary-1);
  }
}
@include mobile-md {
  .wrapper {
    width: 48px;
    height: 48px;
    right: 1rem;
    padding: 12px;
    i {
      font-size: 1rem;
    }
  }
}
@include tablet-sm {
  .wrapper {
    width: 55px;
    height: 55px;
    right: 1.4rem;
    bottom: 1.6rem;
    i {
      font-size: 1.2rem;
    }
  }
}
@include laptop {
  .wrapper {
    width: 58px;
    height: 58px;
    right: 2.2rem;
    bottom: 2.2rem;
    padding: 14px;
    i {
      font-size: 1.4rem;
    }
  }
}
</style>
