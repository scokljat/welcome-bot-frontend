<template>
  <div class="input-box">
    <label class="input-label" :class="{ 'error-label': errors }">{{
      title
    }}</label>
    <input
      class="input-text"
      :class="{ 'error-input': errors }"
      type="text"
      name="title"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="errors" class="error-message">{{ errors }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: undefined,
    },
    errors: {
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

.error-label {
  color: #d9534f;
}

.error-message {
  font-size: $text-md;
  color: #d9534f;
}

.error-input {
  border: 1px solid #d9534f;
  color: #d9534f;
}
</style>
