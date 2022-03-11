<template>
  <div class="wrapper">
    <div class="input-box">
      <div class="input-label">Title</div>
      <input
        class="input-text"
        type="text"
        name="title"
        placeholder="Enter the message title..."
      />
    </div>
    <div class="input-box">
      <div class="input-label">Text</div>
      <textarea
        class="input-text"
        type="text"
        name="text"
        rows="5"
        placeholder="Enter the message text..."
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCreateMessage',
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
