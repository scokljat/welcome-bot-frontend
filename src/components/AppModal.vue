<template>
  <div class="container" v-if="isModalActive">
    <div class="header">
      <h2>{{ modalTitle }}</h2>
      <button @click="toggleAppModal">
        <i class="fa-solid fa-x"></i>
      </button>
    </div>
    <div class="form_body">
      <slot />
    </div>
    <div class="footer">
      <button class="cancel" @click="toggleAppModal">Cancel</button>
      <button class="save">Save</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AppModal',
  props: {
    modalTitle: String,
  },
  computed: {
    ...mapState({
      isModalActive: 'isModalActive',
    }),
  },
  methods: {
    ...mapMutations({ toggleAppModal: 'TOGGLE_APP_MODAL' }),
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  width: 90%;
  max-width: 40rem;
  z-index: 900;
  background-color: var(--text-primary-1);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 0.625rem 0 rgba(0, 0, 0, 0.2),
    0 0.375rem 1.875rem 0.312rem rgba(0, 0, 0, 0.1),
    0 1rem 1.5rem 0.125rem rgba(0, 0, 0, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.3rem;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.25rem;
    text-align: left;

    h2 {
      font-size: 1.06rem;
      color: var(--text-secondary-1);
      font-weight: 700;
    }

    button {
      i {
        font-size: 0.85rem;
        cursor: pointer;
        color: var(--text-secondary-2);
      }
    }
  }

  .form_body {
    padding: 0.625rem 0;
    font-weight: 400;
  }

  .footer {
    padding-top: 0.5rem;
    padding-bottom: 0.375rem;
    display: flex;
    align-items: center;
    justify-content: right;

    button {
      min-width: 5.625rem;
      border-radius: 0.25rem;
      padding: 0.625rem;
      border: none;
      outline: none;
      font-size: 0.875rem;
      line-height: 1.375rem;
      text-align: center;
      font-weight: 500;
      cursor: pointer;
    }

    .cancel {
      color: var(--text-secondary-1);
      background: transparent;
      &:hover {
        color: var(--text-secondary-2);
      }
    }

    .save {
      background: var(--primary);
      margin-left: 0.187rem;
      color: var(--text-primary-1);
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

@include tablet-sm {
  .container {
    padding: 1.7rem;

    .header {
      h2 {
        font-size: 1.375rem;
      }

      i {
        font-size: 1.08rem;
      }
    }
    .footer {
      padding-top: 1.625rem;
      button {
        min-width: 6.875rem;
        font-size: 1rem;
        padding: 0.75rem 0.625rem;
      }
    }
  }
}

@include laptop {
  .container {
    padding: 2rem;

    .header {
      h2 {
        font-size: 1.5rem;
      }

      svg {
        width: 2.18rem;
        height: 2.18rem;
      }
    }

    .footer {
      padding-top: 2.25rem;

      button {
        min-width: 8.12rem;
        font-size: 1.12rem;
        padding: 0.875rem 0.625rem;
      }
    }
  }
}
</style>
