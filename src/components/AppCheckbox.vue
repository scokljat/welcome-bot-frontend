<template>
  <div class="input-checkbox">
    <input
      :id="id"
      type="checkbox"
      :name="name"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'AppCheckbox',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style lang="scss">
.input-checkbox {
  @include input-checkbox;
}
</style>
