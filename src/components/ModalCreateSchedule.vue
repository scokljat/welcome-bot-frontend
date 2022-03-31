<template>
  <form class="wrapper" @submit.prevent="handleFormSubmit">
    <AppSelect
      v-model="id"
      :items="messages"
      is-messages
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
      v-model="interval"
      :items="intervalOptions"
      :is-messages="false"
      title="Interval"
    />
    <AppInput
      v-model="channel"
      title="Channel"
      placeholder="Enter the channel name..."
    />
    <div class="input-checkbox">
      <input id="repeat" v-model="repeat" type="checkbox" name="repeat" />
      <label for="repeat">Repeat</label>
    </div>
    <div class="input-checkbox">
      <input id="active" v-model="active" type="checkbox" name="active" />
      <label for="active">Active</label>
    </div>
    <div class="button-wrapper">
      <AppButton
        title="Cancel"
        theme="secondary"
        @close-modal="handleCloseModal"
      />
      <AppButton title="Save" theme="primary" is-submit />
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

export default {
  name: 'ModalCreateSchedule',
  components: { AppInput, AppButton, AppSelect },
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
        { value: 'MINUTE', label: 'Every minute' },
        { value: 'HOUR', label: 'Every hour' },
        { value: 'DAY', label: 'Every day' },
      ],
    };
  },
  computed: {
    ...mapGetters({
      messages: 'getAllMessages',
    }),
    isMessagesSelectDisabled() {
      return this.schedule;
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
        schedulerInterval: this.interval,
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
