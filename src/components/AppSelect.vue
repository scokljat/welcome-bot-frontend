<template>
  <div class="input-box">
    <select
      :value="modelValue"
      class="input-text"
      :class="{ 'error-input': error }"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="item in items" :key="item.id" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <span v-if="error" class="error-message">{{ error }}</span>
    <label class="input-label" :class="{ 'error-label': error }">{{
      title
    }}</label>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  props: {
    items: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
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
