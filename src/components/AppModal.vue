<template>
  <div class="container" :class="{ inactive: !isModalActive }">
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
    ...mapMutations({ toggleAppModal: 'toggleAppModal' }),
  },
};
</script>
<style lang="scss" scoped>
.inactive {
  display: none;
}
.container {
  position: fixed;
  width: 90%;
  max-width: 640px;
  z-index: 900;
  background-color: var(--text-primary-1);
  border-radius: 4px;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.1),
    0 16px 24px 2px rgba(0, 0, 0, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.3rem;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    text-align: left;
    h2 {
      font-size: 17px;
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
    padding: 10px 0px;
    font-weight: 400;
  }
  .footer {
    padding-top: 8px;
    padding-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: right;
    button {
      min-width: 90px;
      border-radius: 4px;
      padding: 10px;
      border: none;
      outline: none;
      font-size: 14px;
      line-height: 22px;
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
      margin-left: 3px;
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
        font-size: 22px;
      }
      i {
        font-size: 1.08rem;
      }
    }
    .footer {
      padding-top: 26px;
      button {
        min-width: 110px;
        font-size: 16px;
        padding: 12px 10px;
      }
    }
  }
}

@include laptop {
  .container {
    padding: 2rem;
    .header {
      h2 {
        font-size: 24px;
      }
      svg {
        width: 35px;
        height: 35px;
      }
    }
    .footer {
      padding-top: 36px;
      button {
        min-width: 130px;
        font-size: 18px;
        padding: 14px 10px;
      }
    }
  }
}
</style>
