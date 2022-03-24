<template>
  <div class="wrapper">
    <div class="input-box">
      <select class="input-text">
        <option name="Option 1">Some message title One</option>
        <option name="Option 2">Some message title Two</option>
        <option name="Option 3">Some message title Three</option>
      </select>
      <label class="input-label">Message</label>
    </div>
    <div class="input-box">
      <select class="input-text">
        <option name="channel-join">On channel join</option>
      </select>
      <label class="input-label">Trigger</label>
    </div>
    <GlobalInput
      title-input="Channel"
      placeholder-input="Enter the channel name..."
    />
    <div class="input-checkbox">
      <input id="active" type="checkbox" name="active" value="Active" />
      <label for="active">Active</label>
    </div>
  </div>
</template>

<script>
import GlobalInput from './GlobalInput.vue';
export default {
  name: 'ModalCreateTrigger',
  components: { GlobalInput },
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

.input-checkbox {
  @include input-checkbox;
}
</style>
