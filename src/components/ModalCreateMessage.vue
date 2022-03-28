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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ModalCreateMessage',
  components: { AppInput, AppTextarea, AppButton },
  props: {
    messageId: {
      type: Number,
      required: true,
    },
  },
  data: () => {
    return {
      title: '',
      text: '',
    };
  },
  computed: {
    ...mapGetters({ getFormAction: 'getFormAction' }),
  },
  async mounted() {
    if (this.messageId > 0 && this.getFormAction === 'update') {
      const message = await this.fetchMessage(this.messageId);
      this.title = message.title;
      this.text = message.text;
    }
  },
  methods: {
    ...mapActions({
      createMessage: 'createMessage',
      fetchMessage: 'fetchMessage',
      editMessage: 'editMessage',
    }),
    handleFormSubmit() {
      const message = { title: this.title, text: this.text };
      if (this.getFormAction === 'create') {
        this.createMessage(message);
      } else if (this.getFormAction === 'update') {
        this.editMessage({ id: this.messageId, message });
      } else {
        return;
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
