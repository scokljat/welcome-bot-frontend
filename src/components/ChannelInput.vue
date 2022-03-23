<template>
  <div class="input-box">
    <label class="input-label">Channel</label>
    <input
      class="input-text"
      type="text"
      name="title"
      placeholder="Enter the channel name..."
    />
  </div>
</template>

<script>
export default {
  name: 'ChannelInput',
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
