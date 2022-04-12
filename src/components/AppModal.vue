<template>
  <transition name="fade">
    <div v-if="isModalActive" class="modal-container">
      <div class="header">
        <h2>{{ modalTitle }}</h2>
        <button @click="closeAppModal">
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
      <div class="form-body">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { CLOSE_APP_MODAL } from '@/store/mutation-types';

export default {
  name: 'AppModal',
  props: {
    modalTitle: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      isModalActive: 'isModalActive',
    }),
  },
  methods: {
    ...mapMutations({ closeAppModal: CLOSE_APP_MODAL }),
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  width: 90%;
  max-width: 40rem;
  z-index: 900;
  background-color: var(--table-row-bg);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 0.63rem 0 rgba(0, 0, 0, 0.2),
    0 0.38rem 1.88rem 0.31rem rgba(0, 0, 0, 0.1),
    0 1rem 1.5rem 0.13rem rgba(0, 0, 0, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.25rem;
    text-align: left;

    h2 {
      font-size: $text-lg;
      color: var(--text-primary-1);
      font-weight: 700;

      @include tablet-sm {
        font-size: $text-xl;
      }
    }

    i {
      font-size: $text-lg;
      cursor: pointer;
      color: var(--text-primary-2);
    }

    .form-body {
      padding: 0.63rem 0;
      font-weight: 400;
    }
  }
}

.active {
  visibility: visible;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fade-enter-from {
  opacity: 0;
  visibility: hidden;
  top: -100%;
}

.fade-enter-to {
  opacity: 1;
  visibility: visible;
  top: 50%;
}

.fade-enter-active {
  transition: all 0.6s ease;
}

.fade-leave-from {
  opacity: 1;
  visibility: visible;
  top: 50%;
}

.fade-leave-to {
  opacity: 0;
  visibility: hidden;
}

.fade-leave-active {
  transition: all 0.4s ease;
}
</style>
