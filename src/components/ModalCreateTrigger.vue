<template>
  <Form
    v-slot="{ errors }"
    :validation-schema="schema"
    autocomplete="off"
    @submit="handleFormSubmit"
  >
    <Field v-slot="{ field }" v-model="id" name="message"
      ><AppSelect
        v-bind="field"
        v-model="id"
        :items="filterMessages"
        :disabled="isMessagesSelectDisabled"
        title="Message"
        :error="errors.message"
    /></Field>
    <Field v-slot="{ field }" v-model="triggerEvent" name="triggerEvent"
      ><AppSelect
        v-bind="field"
        v-model="triggerEvent"
        :items="events"
        title="Trigger"
        :error="errors.triggerEvent"
    /></Field>
    <Field v-slot="{ field }" v-model="channel" name="channel"
      ><AppInput
        v-bind="field"
        v-model="channel"
        title="Channel"
        placeholder="Enter the channel name..."
        :error="errors.channel"
    /></Field>
    <AppCheckbox id="active" v-model="active" name="active" label="Active" />
    <div class="button-wrapper">
      <AppButton
        type="button"
        title="Cancel"
        class="secondary"
        @click="handleCloseModal"
      />
      <AppButton type="submit" title="Save" class="primary" />
    </div>
  </Form>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { CLOSE_APP_MODAL } from '@/store/mutation-types';
import AppInput from './AppInput.vue';
import AppButton from './AppButton.vue';
import AppSelect from './AppSelect.vue';
import AppCheckbox from './AppCheckbox.vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
export default {
  name: 'ModalCreateTrigger',
  components: { AppInput, AppButton, AppSelect, AppCheckbox, Form, Field },
  props: {
    trigger: {
      type: Object,
      default: null,
    },
  },
  emits: ['close'],
  data() {
    const schema = yup.object().shape({
      message: yup
        .number()
        .required('Message is a required field')
        .nullable('Message is a required field'),
      triggerEvent: yup.string().required().label('Trigger event'),
      channel: yup.string().required().label('Channel name'),
    });
    return {
      schema,
      id: null,
      triggerEvent: '',
      channel: '',
      active: false,
      events: [
        { id: 1, value: 'APP_MENTION_EVENT', label: 'On app mention' },
        { id: 2, value: 'CHANNEL_JOINED', label: 'On channel join' },
        { id: 3, value: 'CHANNEL_LEFT', label: 'On channel left' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      filterMessages: 'filterMessages',
    }),
    isMessagesSelectDisabled() {
      return this.trigger ? true : false;
    },
  },
  async mounted() {
    this.fetchAllMessages();

    if (this.trigger) {
      this.id = this.trigger.message.messageId;
      this.triggerEvent = this.trigger.triggerEvent;
      this.channel = this.trigger.channel;
      this.active = this.trigger.isActive;
    }
  },
  unmounted() {
    this.$emit('close');
  },
  methods: {
    ...mapActions({
      fetchAllMessages: 'fetchAllMessages',
      createTrigger: 'createTrigger',
      editTrigger: 'editTrigger',
    }),
    ...mapMutations({ closeAppModal: CLOSE_APP_MODAL }),
    handleFormSubmit() {
      const trigger = {
        messageId: this.id,
        triggerEvent: this.triggerEvent,
        channel: this.channel,
        isActive: this.active,
      };

      if (this.trigger)
        this.editTrigger({ id: this.trigger.triggerId, trigger });
      else this.createTrigger(trigger);
    },
    handleCloseModal() {
      this.closeAppModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.input-checkbox {
  @include input-checkbox;
}

.button-wrapper {
  padding-top: 1.1rem;
  padding-bottom: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>
