<template>
  <form class="wrapper" @submit.prevent="handleFormSubmit">
    <AppSelect v-model="id" :items="messages" is-messages-select />
    <AppSelect v-model="trigger" :items="events" :is-messages-select="false" />
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
import AppSelect from './AppSelect.vue';

export default {
  name: 'ModalCreateTrigger',
  components: { AppInput, AppButton, AppSelect },
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
        triggerEvent: this.trigger,
        channel: this.channel,
        isActive: this.active,
      };

      this.createTrigger(trigger);
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
