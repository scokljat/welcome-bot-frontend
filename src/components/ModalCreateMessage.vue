<template>
  <form class="wrapper" @submit.prevent="onSubmit">
    <AppInput
      v-model="values.title"
      title="Title"
      placeholder="Enter the message title..."
      :errors="errors.title"
    />
    <AppTextarea v-model="values.text" :errors="errors.text" />
    <div class="button-wrapper">
      <AppButton
        theme="secondary"
        title="Cancel"
        @close-modal="handleCloseModal"
      />
      <AppButton theme="primary" :title="buttonTitle" is-submit />
    </div>
  </form>
</template>

<script>
import AppInput from './AppInput.vue';
import AppTextarea from './AppTextarea.vue';
import AppButton from './AppButton.vue';
import { mapActions, mapMutations, useStore } from 'vuex';
import { CLOSE_APP_MODAL } from '@/store/mutation-types';
import { useForm } from 'vee-validate';
import * as Yup from 'yup';

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
  setup(props) {
    const store = useStore();

    const schema = Yup.object().shape({
      title: Yup.string().required().min(5).max(30).label('Message title'),
      text: Yup.string().required().min(20).label('Message text'),
    });
    const { values, handleSubmit, errors, isSubmitting } = useForm({
      validationSchema: schema,
      validateOnMount: false,
      initialErrors: { title: '', text: '' },
      initialValues: {
        title: '',
        text: '',
      },
    });
    const onSubmit = handleSubmit((message) => {
      if (props.message) {
        store.dispatch('editMessage', { id: props.message.messageId, message });
      } else {
        store.dispatch('createMessage', message);
      }
    });
    return {
      values,
      onSubmit,
      errors,
      isSubmitting,
    };
  },
  computed: {
    buttonTitle() {
      return this.isSubmitting ? 'Processing' : 'Save';
    },
  },
  async mounted() {
    if (this.message) {
      this.values.title = this.message.title;
      this.values.text = this.message.text;
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

.error {
  color: red;
}
</style>
