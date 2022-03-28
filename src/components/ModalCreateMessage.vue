<template>
  <form class="wrapper" @submit.prevent="handleFormSubmit">
    <AppInput
      title="Title"
      placeholder="Enter the message title..."
      :value="title"
      @update:value="(newValue) => (title = newValue)"
    />
    <AppTextarea
      :value="text"
      @update:value="(newValue) => (text = newValue)"
    />
    <div class="button-wrapper">
      <AppButton intent="cancel" title="Cancel" />
      <AppButton intent="create" title="Save" />
    </div>
  </form>
</template>

<script>
import AppInput from './AppInput.vue';
import AppTextarea from './AppTextarea.vue';
import AppButton from './AppButton.vue';
import { mapActions } from 'vuex';

export default {
  name: 'ModalCreateMessage',
  components: { AppInput, AppTextarea, AppButton },
  data: () => {
    return {
      title: null,
      text: null,
    };
  },
  methods: {
    ...mapActions({ createMessage: 'createMessage' }),
    handleFormSubmit() {
      const message = { title: this.title, text: this.text };
      this.createMessage(message);
    },
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  padding-top: 1.1rem;
  padding-bottom: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>
