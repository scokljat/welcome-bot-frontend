<template>
  <div class="wrapper">
    <GlobalInput />
    <GlobalTextarea />
  </div>
</template>

<script>
import GlobalInput from './GlobalInput.vue';
import GlobalTextarea from './GlobalTextarea.vue';

export default {
  name: 'ModalCreateMessage',
  components: { GlobalInput, GlobalTextarea },
};
</script>
