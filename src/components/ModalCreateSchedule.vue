<template>
  <div class="wrapper">
    <div class="select_wrapper">
      <select class="select_box">
        <option name="Option 1">Some message title One</option>
        <option name="Option 2">Some message title Two</option>
        <option name="Option 3">Some message title Three</option>
      </select>
      <div class="select_label">Message</div>
    </div>
    <div class="select_wrapper">
      <input class="select_box" type="date" name="date" />
      <div class="select_label">Run At</div>
    </div>
    <div class="message_state">
      <input
        id="repeat"
        class="message_state"
        type="checkbox"
        name="repeat"
        value="Repeat"
      />
      <label for="repeat">Repeat</label>
    </div>
    <div class="message_state">
      <input id="active" type="checkbox" name="active" value="Active" />
      <label for="active">Active</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCreateMessage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* 375px Mobile */
.select_wrapper {
  position: relative;
}
.select_label {
  position: absolute;
  top: -21%;
  left: 2%;
  color: var(--gray-60);
  font-size: 12px;
  font-weight: 500;
  padding: 2px 6px;
  background-color: var(--white-100);
}
.select_box {
  width: 100%;
  background-color: transparent;
  outline: none;
  border: 1px solid var(--gray-30);
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 14px;
  font-size: 13px;
  font-weight: 400;
  color: var(--gray);
}
.message_state {
  display: flex;
  align-items: center;
  margin-bottom: 6px;
}
.message_state > label {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  color: var(--gray-60);
}
/* 411px */
@media only screen and (min-width: 411px) {
  .select_box {
    padding: 10px;
  }
}
/* 768px tablet */
@media only screen and (min-width: 768px) {
  .select_box {
    margin-bottom: 20px;
    font-size: 14px;
    padding: 12px 10px;
  }
  .message_state {
    margin-bottom: 10px;
  }
  .message_state > label {
    font-size: 13px;
  }
}
/* 1366px laptop */
@media only screen and (min-width: 1366px) {
  .select_box {
    margin-bottom: 26px;
    font-size: 16px;
  }
  .message_state > label {
    font-size: 14px;
  }
}
</style>
