<template>
  <div class="input-box">
    <label class="input-label">Text</label>
    <textarea
      class="input-text"
      type="text"
      name="text"
      rows="5"
      placeholder="Enter the message text..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
