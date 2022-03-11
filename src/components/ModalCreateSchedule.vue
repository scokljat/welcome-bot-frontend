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
      <input class="input-text" type="date" name="date" />
      <label class="input-label">Run At</label>
    </div>
    <div class="input-box">
      <select class="input-text">
        <option name="Option 1">Every minute</option>
        <option name="Option 2">Every hour</option>
        <option name="Option 3">Every day</option>
      </select>

      <label class="input-label">Interval</label>
    </div>
    <div class="input-checkbox">
      <input id="repeat" type="checkbox" name="repeat" value="Repeat" />
      <label for="repeat">Repeat</label>
    </div>
    <div class="input-checkbox">
      <input id="active" type="checkbox" name="active" value="Active" />
      <label for="active">Active</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCreateSchedule',
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
