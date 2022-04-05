<template>
  <div class="alert" :class="{ success: alert.success, visible: alert.active }">
    <i :class="alertIcon"></i>
    <span>{{ alert.message }}</span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AppAlert',
  computed: {
    ...mapGetters({ alert: 'getAlert' }),
    alertIcon() {
      return this.alert.success
        ? 'fa-solid fa-circle-check'
        : 'fa-solid fa-circle-exclamation';
    },
  },
  mounted() {
    setTimeout(() => this.hideAlert({ active: false }), 3000);
  },
  methods: {
    ...mapActions({ hideAlert: 'hideAlert' }),
  },
};
</script>

<style lang="scss">
.alert {
  position: fixed;
  display: flex;
  background-color: #d9534f;
  justify-content: center;
  align-items: center;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.2rem 1rem;
  color: white;
  z-index: 1000;
  border-radius: 0.25rem;
  min-width: 70%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1.2s ease-in-out;

  @include tablet-md {
    min-width: unset;
  }

  i {
    margin-right: 1rem;
  }

  span {
    width: max-content;
  }
}

.alert.success {
  background-color: #04aa6d;
}

.visible {
  visibility: visible;
  opacity: 1;
}
</style>
