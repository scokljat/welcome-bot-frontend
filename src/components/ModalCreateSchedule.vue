<template>
  <form class="wrapper">
    <div class="input-box">
      <select v-model="selectedMessage" class="input-text">
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
      <input class="input-text" type="date" name="date" />
      <label class="input-label">Run At</label>
    </div>
    <div class="input-box">
      <select
        v-model="selectedInterval"
        class="input-text"
        @change="onChangeInterval($event)"
      >
        <option name="Option 1">Every minute</option>
        <option name="Option 2">Every hour</option>
        <option name="Option 3">Every day</option>
      </select>
      <label class="input-label">Interval</label>
    </div>
    <GlobalInput
      title-input="Channel"
      placeholder-input="Enter the channel name..."
    />
    <div class="input-checkbox">
      <input id="repeat" type="checkbox" name="repeat" value="Repeat" />
      <label for="repeat">Repeat</label>
    </div>
    <div class="input-checkbox">
      <input id="active" type="checkbox" name="active" value="Active" />
      <label for="active">Active</label>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GlobalInput from './GlobalInput.vue';

export default {
  name: 'ModalCreateSchedule',
  components: { GlobalInput },
  data: () => {
    return { selectedMessage: null, selectedInterval: null };
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
    }),
    onChangeInterval(event) {
      let interval = event.target.value.split(' ')[1].toUpperCase();
      console.log(interval);
      return interval;
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
</style>
