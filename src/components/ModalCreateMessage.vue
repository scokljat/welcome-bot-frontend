<template>
  <Form
    v-slot="{ errors }"
    :validation-schema="schema"
    autocomplete="off"
    @submit="handleFormSubmit"
  >
    <Field v-slot="{ field }" v-model="title" name="title"
      ><AppInput
        v-bind="field"
        v-model="title"
        title="Title"
        placeholder="Enter the message title..."
        :errors="errors.title"
    /></Field>
    <Field v-slot="{ field }" v-model="text" name="text"
      ><AppTextarea v-bind="field" v-model="text" :errors="errors.text"
    /></Field>
    <div class="button-wrapper">
      <AppButton
        type="button"
        class="secondary"
        title="Cancel"
        @click="handleCloseModal"
      />
      <AppButton type="submit" class="primary" title="Save" />
    </div>
  </Form>
</template>

<script>
import AppInput from './AppInput.vue';
import AppTextarea from './AppTextarea.vue';
import AppButton from './AppButton.vue';
import { mapActions, mapMutations } from 'vuex';
import { CLOSE_APP_MODAL } from '@/store/mutation-types';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'ModalCreateMessage',
  components: { AppInput, AppTextarea, AppButton, Form, Field },
  props: {
    message: {
      type: Object,
      default: null,
    },
  },
  emits: ['close'],
  data: () => {
    const schema = yup.object().shape({
      title: yup.string().required().min(5).max(30).label('Message title'),
      text: yup.string().required().min(20).label('Message text'),
    });
    return {
      schema,
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
    this.$emit('close');
  },
  methods: {
    ...mapActions({
      createMessage: 'createMessage',
      editMessage: 'editMessage',
    }),
    ...mapMutations({ closeModal: CLOSE_APP_MODAL }),
    handleFormSubmit(message) {
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
