<template>
  <div class="input-box">
    <label class="input-label">{{ titleInput }}</label>
    <input
      class="input-text"
      type="text"
      name="title"
      :placeholder="placeholderInput"
    />
  </div>
</template>

<script>
export default {
  name: 'GlobalInput',
  props: {
    titleInput: {
      type: String,
      required: true,
    },
    placeholderInput: {
      type: String,
      required: true,
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
