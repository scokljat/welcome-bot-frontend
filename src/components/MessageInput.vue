<template>
  <div class="input-box">
    <label class="input-label">Title</label>
    <input
      class="input-text"
      type="text"
      name="title"
      placeholder="Enter the message title..."
    />
  </div>
</template>

<script>
export default {
  name: 'MessageInput',
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
