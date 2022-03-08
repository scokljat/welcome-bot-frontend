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
      <select class="select_box">
        <option name="channel-join">On channel join</option>
      </select>
      <div class="select_label">Trigger</div>
    </div>
    <div class="channel_title">
      <div class="label">Channel</div>
      <input
        class="channel_input"
        type="text"
        name="title"
        placeholder="Enter the channel name..."
      />
    </div>
    <div class="message_state">
      <input id="active" type="checkbox" name="active" value="Active" />
      <label for="active">Active</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCreateTrigger',
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
  margin-bottom: 20px;
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
.channel_title {
  width: 100%;
  position: relative;
  padding-bottom: 20px;
}
.label {
  position: absolute;
  color: var(--gray-60);
  font-size: 12px;
  font-weight: 500;
  padding: 2px 6px;
  background-color: var(--white-100);
  left: 2%;
  top: -21%;
}
.channel_input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  outline: none;
  border: 1px solid var(--gray-30);
  color: var(--gray);
  font-size: 13px;
}
/* 411px */
@media only screen and (min-width: 411px) {
}
/* 768px tablet */
@media only screen and (min-width: 768px) {
  .select_box {
    font-size: 14px;
    padding: 12px 10px;
  }
  .message_state {
    margin-bottom: 10px;
  }
  .message_state > label {
    font-size: 13px;
  }
  .channel_input {
    padding: 12px 10px;
    font-size: 14px;
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
  .channel_input {
    font-size: 16px;
  }
}
</style>
