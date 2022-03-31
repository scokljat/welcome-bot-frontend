<template>
  <div class="input-box">
    <select
      :value="modelValue"
      class="input-text"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="item in items"
        :key="handleOptionValue(item)"
        :value="handleOptionValue(item)"
      >
        {{ handleOptionProperty(item) }}
      </option>
    </select>
    <label class="input-label">{{ title }}</label>
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
      type: String,
      default: null,
    },
    isMessages: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    handleOptionValue(item) {
      return this.isMessages ? item.messageId : item.value;
    },
    handleOptionProperty(item) {
      return this.isMessages ? item.title : item.label;
    },
  },
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
