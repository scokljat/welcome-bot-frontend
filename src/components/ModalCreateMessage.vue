<template>
  <div class="wrapper">
    <div class="message_title">
      <div class="label title_label">Title</div>
      <input
        class="message_input"
        type="text"
        name="title"
        placeholder="Enter the message title..."
      />
    </div>
    <div class="message_text">
      <div class="label text_label">Text</div>
      <textarea
        class="message_input"
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 375px Mobile */
.message_title,
.message_text {
  width: 100%;
  position: relative;
}
.message_title {
  padding-bottom: 20px;
}
.label {
  position: absolute;
  color: var(--gray-60);
  font-size: 12px;
  font-weight: 500;
  padding: 2px 6px;
  background-color: var(--white-100);
}
.title_label {
  left: 3%;
  top: -18%;
}
.text_label {
  left: 3%;
  top: -8%;
}
.message_input {
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
  .label {
    font-size: 13px;
  }
  .message_input {
    padding: 10px 20px;
    font-size: 14px;
  }
  .message_title {
    padding-bottom: 30px;
  }
}
/* 1366px laptop */
@media only screen and (min-width: 1366px) {
}
</style>
