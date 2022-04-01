<template>
  <form class="wrapper" @submit.prevent="handleFormSubmit">
    <AppInput
      v-model="title"
      title="Title"
      placeholder="Enter the message title..."
    />
    <AppTextarea v-model="text" />
    <div class="button-wrapper">
      <AppButton
        type="button"
        class="secondary"
        title="Cancel"
        @close-modal="handleCloseModal"
      />
      <AppButton type="submit" class="primary" title="Save" />
    </div>
  </form>
</template>

<script>
import AppInput from './AppInput.vue';
import AppTextarea from './AppTextarea.vue';
import AppButton from './AppButton.vue';
import { mapActions, mapMutations } from 'vuex';
import { CLOSE_APP_MODAL } from '@/store/mutation-types';

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
    ...mapMutations({ closeModal: CLOSE_APP_MODAL }),
    handleFormSubmit() {
      const message = { title: this.title, text: this.text };
      if (this.message) {
        this.editMessage({ id: this.message.messageId, message });
      } else {
        this.createMessage(message);
      }
    },
    handleCloseModal() {
      this.closeModal();
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
