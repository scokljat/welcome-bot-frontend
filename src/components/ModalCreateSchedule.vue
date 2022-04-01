<template>
  <form class="wrapper" @submit.prevent="handleFormSubmit">
    <AppSelect
      v-model="id"
      :items="filterMessages"
      :disabled="isMessagesSelectDisabled"
      title="Message"
    />
    <div class="input-box">
      <input
        v-model="runDate"
        class="input-text"
        type="date"
        name="date"
        :min="limitDate"
      />
      <label class="input-label">Run At</label>
    </div>
    <AppSelect
      v-if="repeat"
      v-model="interval"
      :items="intervalOptions"
      title="Interval"
    />
    <AppInput
      v-model="channel"
      title="Channel"
      placeholder="Enter the channel name..."
    />
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
  </form>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import FormatUtils from '@/utils/FormatUtils';
import AppInput from './AppInput.vue';
import AppButton from './AppButton.vue';
import { CLOSE_APP_MODAL } from '@/store/mutation-types';
import AppSelect from './AppSelect.vue';
import AppCheckbox from './AppCheckbox.vue';

export default {
  name: 'ModalCreateSchedule',
  components: { AppInput, AppButton, AppSelect, AppCheckbox },
  props: {
    schedule: {
      type: Object,
      default: null,
    },
  },
  emits: ['resetSchedule'],
  data: () => {
    return {
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
      messages: 'getAllMessages',
    }),
    isMessagesSelectDisabled() {
      return this.schedule ? true : false;
    },
    limitDate() {
      return FormatUtils.formatDate(new Date(), 'yyyy-MM-dd');
    },
    filterMessages() {
      const filteredMessages = [];
      this.messages.forEach((message) => {
        filteredMessages.push({
          id: message.messageId,
          value: message.messageId,
          label: message.text,
        });
      });
      return filteredMessages;
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
    this.$emit('resetSchedule');
  },
  methods: {
    ...mapActions({
      fetchAllMessages: 'fetchAllMessages',
      createSchedule: 'createSchedule',
      fetchSchedule: 'fetchSchedule',
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
      if (this.schedule) {
        this.editSchedule({ id: this.schedule.scheduleId, schedule });
      } else this.createSchedule(schedule);
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
