<template>
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
    <div class="footer">
      <button class="cancel" @click="closeAppModal">Cancel</button>
      <button class="save">Save</button>
    </div>
  </div>
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

    button {
      border: none;
      background: none;

      i {
        font-size: $text-lg;
        cursor: pointer;
        color: var(--text-primary-2);
      }
    }
  }

  .form-body {
    padding: 0.63rem 0;
    font-weight: 400;
  }

  .footer {
    padding-top: 0.5rem;
    padding-bottom: 0.38rem;
    display: flex;
    align-items: center;
    justify-content: right;

    button {
      min-width: 5.63rem;
      border-radius: 0.25rem;
      padding: 0.63rem;
      border: none;
      outline: none;
      font-size: $text-md;
      line-height: 1.38rem;
      text-align: center;
      font-weight: 500;
      cursor: pointer;

      @include tablet-sm {
        min-width: 6.88rem;
        padding: 0.75rem 0.63rem;
        font-size: $text-lg;
      }
    }

    .cancel {
      color: var(--text-primary-1);
      background: transparent;

      &:hover {
        color: var(--text-primary-2);
      }
    }

    .save {
      background: var(--primary);
      margin-left: 0.19rem;
      color: var(--text-secondary-1);

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
