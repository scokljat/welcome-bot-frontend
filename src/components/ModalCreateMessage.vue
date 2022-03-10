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

<style lang="scss" scoped>
.message_title,
.message_text {
  width: 100%;
  position: relative;
}

.message_title {
  padding-bottom: 1.25rem;
}

.label {
  position: absolute;
  color: var(--text-secondary-2);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.125rem 0.375rem;
  background-color: var(--text-primary-1);
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
  padding: 0.625rem;
  border-radius: 0.25rem;
  outline: none;
  border: 0.062rem solid var(--table-header);
  color: var(--text-secondary-1);
  font-size: 0.81rem;
}

@include tablet-sm {
  .label {
    font-size: 0.81rem;
  }

  .message_input {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }

  .message_title {
    padding-bottom: 1.875rem;
  }
}
</style>
