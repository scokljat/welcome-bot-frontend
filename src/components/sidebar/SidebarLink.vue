<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />

    <span v-if="!collapsed">
      <slot />
    </span>
  </router-link>
</template>
<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { collapsed } from './state.js';
export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>
<style scoped>
.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  margin: 20px;
  color: var(--white-60);
  text-decoration: none;
}
.link.active {
  color: var(--white-100);
}
.link .icon {
  font-size: 24px;
}
</style>
