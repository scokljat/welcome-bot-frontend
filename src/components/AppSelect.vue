<template>
  <div class="input-box">
    <select
      :value="modelValue"
      class="input-text"
      :class="{ 'error-input': errors }"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option v-for="item in items" :key="item.id" :value="item.value">
        {{ item.label }}
      </option>
    </select>
    <span v-if="errors" class="error-message">{{ errors }}</span>
    <label class="input-label" :class="{ 'error-label': errors }">{{
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
</style>
