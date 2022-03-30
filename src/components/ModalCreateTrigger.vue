<template>
  <form class="wrapper" @submit.prevent="handleFormSubmit">
    <div class="input-box">
      <select v-model="id" class="input-text">
        <option
          v-for="message in messages"
          :key="message.messageId"
          :value="message.messageId"
        >
          {{ message.title }}
        </option>
      </select>
      <label class="input-label">Message</label>
    </div>
    <div class="input-box">
      <select v-model="trigger" class="input-text">
        <option v-for="event in events" :key="event.value" :value="event.value">
          {{ event.label }}
        </option>
      </select>
      <label class="input-label">Trigger</label>
    </div>
    <AppInput
      v-model="channel"
      title="Channel"
      placeholder="Enter the channel name..."
    />
    <div class="input-checkbox">
      <input id="active" type="checkbox" name="active" :value="active" />
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
import AppInput from './AppInput.vue';
import AppButton from './AppButton.vue';
import { formatEvent } from '../utils/FormatUtils';

export default {
  name: 'ModalCreateTrigger',
  components: { AppInput, AppButton },
  data() {
    return {
      id: null,
      trigger: '',
      channel: '',
      active: false,
      events: [
        { value: 'APP_MENTION_EVENT', label: 'On app mention' },
        { value: 'CHANNEL_JOINED', label: 'On channel join' },
        { value: 'CHANNEL_LEFT', label: 'On channel left' },
      ],
    };
  },
  computed: {
    ...mapGetters({ messages: 'getAllMessages' }),
  },
  mounted() {
    this.fetchAllMessages();
  },
  methods: {
    ...mapActions({
      fetchAllMessages: 'fetchAllMessages',
      createTrigger: 'createTrigger',
    }),
    handleFormSubmit() {
      const trigger = {
        messageId: this.id,
        triggerEvent: formatEvent(this.trigger),
        channel: this.channel,
        isActive: this.active,
      };

      this.createTrigger(trigger);
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
