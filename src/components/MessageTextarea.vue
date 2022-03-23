<template>
  <div class="input-box">
    <label class="input-label">Text</label>
    <textarea
      class="input-text"
      type="text"
      name="text"
      rows="5"
      placeholder="Enter the message text..."
    />
  </div>
</template>

<script>
export default {
  name: 'MessageTextarea',
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
