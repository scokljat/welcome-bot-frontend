<template>
  <div class="wrapper">
    <MessageInput />
    <MessageTextarea />
  </div>
</template>

<script>
import MessageInput from './MessageInput.vue';
import MessageTextarea from './MessageTextarea.vue';

export default {
  name: 'ModalCreateMessage',
  components: { MessageInput, MessageTextarea },
};
</script>
