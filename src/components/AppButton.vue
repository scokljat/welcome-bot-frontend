<template>
  <button :type="buttonType" :class="theme" @click="handleButtonClick">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    isSubmit: { type: Boolean, default: false },
    theme: { type: String, required: true },
    title: { type: String, required: true },
  },
  emits: ['closeModal'],
  computed: {
    buttonType() {
      return this.isSubmit ? 'submit' : 'button';
    },
  },
  methods: {
    handleButtonClick() {
      if (!this.isSubmit) {
        this.$emit('closeModal');
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

.secondary {
  color: var(--text-primary-1);
  background: transparent;

  &:hover {
    color: var(--text-primary-2);
  }
}

.primary {
  background: var(--primary);
  margin-left: 0.19rem;
  color: var(--text-secondary-1);

  &:hover {
    opacity: 0.8;
  }
}
</style>
