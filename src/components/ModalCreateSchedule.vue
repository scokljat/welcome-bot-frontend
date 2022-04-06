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
        :items="parsedMessages"
        :disabled="isMessagesSelectDisabled"
        title="Message"
        :error="errors.message"
    /></Field>
    <Field v-slot="{ field }" v-model="runDate" name="date"
      ><div class="input-box">
        <input
          v-bind="field"
          v-model="runDate"
          class="input-text"
          :class="{ 'error-input': errors.date }"
          type="date"
          name="date"
          :min="limitDate"
          required
        />
        <span v-if="errors.date" class="error-message">{{ errors.date }}</span>
        <label class="input-label" :class="{ 'error-label': errors.date }"
          >Run At</label
        >
      </div></Field
    >
    <Field v-slot="{ field }" v-model="interval" name="interval"
      ><AppSelect
        v-if="repeat"
        v-bind="field"
        v-model="interval"
        :items="intervalOptions"
        title="Interval"
        :error="errors.interval"
    /></Field>
    <Field v-slot="{ field }" v-model="channel" name="channel"
      ><AppInput
        v-bind="field"
        v-model="channel"
        title="Channel"
        placeholder="Enter the channel name..."
        :error="errors.channel"
    /></Field>
    <AppCheckbox id="repeat" v-model="repeat" name="repeat" label="Repeat" />
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
import FormatUtils from '@/utils/FormatUtils';
import { CLOSE_APP_MODAL } from '@/store/mutation-types';
import AppInput from './AppInput.vue';
import AppButton from './AppButton.vue';
import AppSelect from './AppSelect.vue';
import AppCheckbox from './AppCheckbox.vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'ModalCreateSchedule',
  components: { AppInput, AppButton, AppSelect, AppCheckbox, Form, Field },
  props: {
    schedule: {
      type: Object,
      default: null,
    },
  },
  emits: ['close'],
  data: () => {
    const schema = yup.object().shape({
      message: yup
        .number()
        .required('Message is a required field')
        .nullable('Message is a required field'),
      interval: yup.string().required().label('Interval'),
      channel: yup.string().required().label('Channel name'),
      repeat: yup.bool().label('Repeat option'),
      active: yup.bool().label('Active option'),
      date: yup.string().required().label('Date'),
    });
    return {
      schema,
      id: null,
      interval: '',
      runDate: '',
      channel: '',
      repeat: false,
      active: false,
      intervalOptions: [
        { id: 1, value: 'MINUTE', label: 'Every 5 minutes' },
        { id: 2, value: 'HOUR', label: 'Every hour' },
        { id: 3, value: 'DAY', label: 'Every day' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      parsedMessages: 'parsedMessages',
    }),
    isMessagesSelectDisabled() {
      return this.schedule ? true : false;
    },
    limitDate() {
      return FormatUtils.formatDate(new Date(), 'yyyy-MM-dd');
    },
  },
  async mounted() {
    this.fetchAllMessages();

    if (this.schedule) {
      this.id = this.schedule.message.messageId;
      this.interval = this.schedule.schedulerInterval;
      this.runDate = FormatUtils.formatDate(
        this.schedule.runDate,
        'yyyy-MM-dd'
      );
      this.channel = this.schedule.channel;
      this.repeat = this.schedule.repeat;
      this.active = this.schedule.active;
    }
  },
  unmounted() {
    this.$emit('close');
  },
  methods: {
    ...mapActions({
      fetchAllMessages: 'fetchAllMessages',
      createSchedule: 'createSchedule',
      editSchedule: 'editSchedule',
    }),
    ...mapMutations({ closeAppModal: CLOSE_APP_MODAL }),
    handleFormSubmit() {
      const schedule = {
        channel: this.channel,
        isActive: this.active,
        isRepeat: this.repeat,
        messageId: this.id,
        runDate: FormatUtils.formatDate(this.runDate, 'yyyy-MM-dd HH:mm:ss'),
        schedulerInterval: this.repeat ? this.interval : null,
      };

      if (this.schedule)
        this.editSchedule({ id: this.schedule.scheduleId, schedule });
      else this.createSchedule(schedule);
    },
    handleCloseModal() {
      this.closeAppModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  @include input-box;
}

.input-label {
  @include input-label;
}

.input-text {
  @include input-text;
}

.button-wrapper {
  padding-top: 1.1rem;
  padding-bottom: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>
