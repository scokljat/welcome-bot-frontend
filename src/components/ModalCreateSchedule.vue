<template>
  <form class="wrapper" @submit.prevent="handleFormSubmit">
    <div class="input-box">
      <select v-model="id" class="input-text">
        <option
          v-for="message in getAllMessages"
          :key="message.messageId"
          :value="message.messageId"
        >
          {{ message.title }}
        </option>
      </select>
      <label class="input-label">Message</label>
    </div>
    <div class="input-box">
      <input v-model="runDate" class="input-text" type="date" name="date" />
      <label class="input-label">Run At</label>
    </div>
    <div class="input-box">
      <select v-model="interval" class="input-text">
        <option name="Option 1">Every minute</option>
        <option name="Option 2">Every hour</option>
        <option name="Option 3">Every day</option>
      </select>
      <label class="input-label">Interval</label>
    </div>
    <AppInput
      :value="channel"
      title="Channel"
      placeholder="Enter the channel name..."
      @update:value="(newValue) => (channel = newValue)"
    />
    <div class="input-checkbox">
      <input
        id="repeat"
        v-model="repeat"
        type="checkbox"
        name="repeat"
        value="Repeat"
      />
      <label for="repeat">Repeat</label>
    </div>
    <div class="input-checkbox">
      <input
        id="active"
        v-model="active"
        type="checkbox"
        name="active"
        value="Active"
      />
      <label for="active">Active</label>
    </div>
    <div class="button-wrapper">
      <AppButton intent="cancel" title="Cancel" />
      <AppButton intent="create" title="Save" />
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import format from 'date-fns/format';
import AppInput from './AppInput.vue';
import AppButton from './AppButton.vue';

export default {
  name: 'ModalCreateSchedule',
  components: { AppInput, AppButton },
  data: () => {
    return {
      id: null,
      interval: '',
      runDate: '',
      channel: '',
      repeat: false,
      active: false,
    };
  },
  computed: {
    ...mapGetters({ getAllMessages: 'getAllMessages' }),
  },
  mounted() {
    this.fetchAllMessages();
  },
  methods: {
    ...mapActions({
      fetchAllMessages: 'fetchAllMessages',
      createSchedule: 'createSchedule',
    }),
    handleFormSubmit() {
      // handle form
      const schedule = {
        channel: this.channel,
        isActive: this.active,
        isRepeat: this.repeat,
        messageId: this.id,
        runDate: format(new Date(this.runDate), 'yyyy-MM-dd HH:mm:ss'),
        schedulerInterval: this.interval.split(' ')[1].toUpperCase(),
      };
      console.log(schedule);
      this.createSchedule(schedule);
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
