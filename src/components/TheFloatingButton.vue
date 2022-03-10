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
  padding: 0.625rem;
  background-color: var(--primary);
  border-radius: 50%;
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.2),
    0 0.062rem 0.625rem 0 rgba(0, 0, 0, 0.12),
    0 0.25rem 0.31rem 0 rgba(0, 0, 0, 0.14);
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
    width: 3rem;
    height: 3rem;
    right: 1rem;
    padding: 0.75rem;

    i {
      font-size: 1rem;
    }
  }
}

@include tablet-sm {
  .wrapper {
    width: 3.43rem;
    height: 3.43rem;
    right: 1.4rem;
    bottom: 1.6rem;

    i {
      font-size: 1.2rem;
    }
  }
}

@include laptop {
  .wrapper {
    width: 3.625rem;
    height: 3.625;
    right: 2.2rem;
    bottom: 2.2rem;
    padding: 0.875;

    i {
      font-size: 1.4rem;
    }
  }
}
</style>
