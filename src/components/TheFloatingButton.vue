<template>
  <button class="wrapper" @click="toggleAppModal">
    <i class="fa-solid fa-plus"></i>
  </button>
</template>

<script>
import { mapMutations } from 'vuex';
import { TOGGLE_APP_MODAL } from '@/store/mutation-types';

export default {
  name: 'TheFloatingButton',
  methods: {
    ...mapMutations({ toggleAppModal: TOGGLE_APP_MODAL }),
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 2.81rem;
  height: 2.81rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1.4rem;
  right: 0.8rem;
  padding: 0.63rem;
  background-color: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0.13rem 0.25rem 0 rgba(0, 0, 0, 0.2),
    0 0.06rem 0.63rem 0 rgba(0, 0, 0, 0.12),
    0 0.25rem 0.31rem 0 rgba(0, 0, 0, 0.14);
  cursor: pointer;
  outline: none;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  @include mobile-md {
    width: 3rem;
    height: 3rem;
    right: 1rem;
    padding: 0.75rem;
  }

  @include laptop {
    width: 3.63rem;
    height: 3.63rem;
    right: 2.2rem;
    bottom: 2.2rem;
    padding: 0.88rem;
  }

  i {
    font-size: $text-sm;
    color: var(--text-secondary-1);

    @include mobile-md {
      font-size: $text-md;
    }

    @include laptop {
      font-size: $text-lg;
    }
  }
}
</style>
