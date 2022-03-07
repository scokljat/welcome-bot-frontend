<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
    <div class="sidebarlink">
      <SidebarLink to="/messages" icon="fas fa-envelope">Messages</SidebarLink>
      <SidebarLink to="/schedules" icon="fas fa-calendar-check"
        >Schedules</SidebarLink
      >
      <SidebarLink to="/triggers" icon="fas fa-comment-alt"
        >Triggers</SidebarLink
      >
    </div>
  </div>
</template>
<script>
import SidebarLink from './SidebarLink.vue';
import { collapsed, toggleSidebar, sidebarWidth } from './state';
export default {
  components: { SidebarLink },
  props: {},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>
<style scoped>
.sidebar {
  background-color: var(--blue);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.sidebarlink {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.collapse-icon {
  position: absolute;
  padding: 10px;
  color: var(--white-100);
  transition: 0.2s linear;
  margin-bottom: 20px;
}
.rotate-180 {
  transform: rotate(-180deg);
  transition: 0.2s linear;
}
@media (min-width: 768px) {
  .collapse-icon {
    display: none;
  }
  .rotate-180 {
    transform: none;
    transition: none;
  }
}
</style>
