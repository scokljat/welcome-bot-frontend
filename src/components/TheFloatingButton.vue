<template>
  <button class="wrapper" @click="handleButtonClick">
    <i class="fa-solid fa-plus"></i>
  </button>
</template>

<script>
import { mapMutations } from 'vuex';
import { OPEN_APP_MODAL } from '@/store/mutation-types';

export default {
  name: 'TheFloatingButton',
  methods: {
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    handleButtonClick() {
      this.openAppModal('create');
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1.2rem;
  right: 0.8rem;
  padding: 0.8rem;
  background-color: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0.13rem 0.25rem 0 rgba(0, 0, 0, 0.2),
    0 0.06rem 0.63rem 0 rgba(0, 0, 0, 0.12),
    0 0.25rem 0.31rem 0 rgba(0, 0, 0, 0.14);
  cursor: pointer;
  outline: none;
  border: none;
  z-index: 101;

  &:hover {
    opacity: 0.8;
  }

  @include mobile-md {
    right: 1rem;
  }

  @include tablet-md {
    right: 1.8rem;
    bottom: 1.8rem;
  }

  i {
    font-size: $text-lg;
    color: var(--text-secondary-1);
  }
}
</style>
