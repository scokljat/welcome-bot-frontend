<template>
  <form class="wrapper" @submit.prevent="handleFormSubmit">
    <AppInput
      title-input="Title"
      placeholder-input="Enter the message title..."
    />
    <AppTextarea />
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

export default {
  name: 'ModalCreateMessage',
  components: { AppInput, AppTextarea, AppButton },
  methods: {
    handleFormSubmit() {
      // handle form
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
