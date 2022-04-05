<template>
  <div class="input-box">
    <label class="input-label" :class="{ 'error-label': error }">Text</label>
    <textarea
      class="input-text"
      :class="{ 'error-input': error }"
      type="text"
      name="text"
      rows="5"
      placeholder="Enter the message text..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: null,
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style lang="scss" scoped>
.input-box {
  @include input-box;
}

.input-label {
  @include input-label;
}

.input-text {
  @include input-text;
}
</style>
