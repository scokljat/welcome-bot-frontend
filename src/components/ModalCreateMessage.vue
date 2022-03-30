<template>
  <form class="wrapper" @submit.prevent="handleFormSubmit">
    <AppInput
      v-model="title"
      title="Title"
      placeholder="Enter the message title..."
    />
    <AppTextarea v-model="text" />
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
  props: {
    message: {
      type: Object,
      default: null,
    },
  },
  emits: ['resetMessage'],
  data: () => {
    return {
      title: '',
      text: '',
    };
  },
  async mounted() {
    if (this.message) {
      this.title = this.message.title;
      this.text = this.message.text;
    }
  },
  unmounted() {
    this.$emit('resetMessage');
  },
  methods: {
    ...mapActions({
      createMessage: 'createMessage',
      editMessage: 'editMessage',
    }),
    handleFormSubmit() {
      const message = { title: this.title, text: this.text };
      if (this.message) {
        this.editMessage({ id: this.message.messageId, message });
      } else {
        this.createMessage(message);
      }
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
