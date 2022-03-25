<template>
  <button :type="buttonType" :class="buttonIntent" @click="handleButtonClick">
    {{ title }}
  </button>
</template>

<script>
import { CLOSE_APP_MODAL } from '@/store/mutation-types';
import { mapMutations } from 'vuex';

export default {
  name: 'AppButton',
  props: {
    intent: { type: String, required: true },
    title: { type: String, required: true },
  },
  computed: {
    buttonIntent() {
      return this.intent === 'cancel' ? 'cancel' : 'save';
    },
    buttonType() {
      return this.intent === 'create' ? 'submit' : 'button';
    },
  },
  methods: {
    ...mapMutations({ closeAppModal: CLOSE_APP_MODAL }),
    handleButtonClick() {
      if (this.intent === 'cancel') {
        this.closeAppModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>
