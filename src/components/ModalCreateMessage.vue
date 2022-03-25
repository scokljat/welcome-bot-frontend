<template>
  <form class="wrapper">
    <GlobalInput
      title-input="Title"
      placeholder-input="Enter the message title..."
    />
    <GlobalTextarea />
  </form>
</template>

<script>
import GlobalInput from './GlobalInput.vue';
import GlobalTextarea from './GlobalTextarea.vue';

export default {
  name: 'ModalCreateMessage',
  components: { GlobalInput, GlobalTextarea },
};
</script>
