<template>
  <div class="sidebar" :style="{ width: width }">
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
    <div class="sidebarlink">
      <router-link to="/messages"
        ><i class="fas fa-envelope"></i
        ><span class="link_text">Messages</span></router-link
      >
      <router-link to="/schedules"
        ><i class="fas fa-calendar-check"></i
        ><span>Schedules</span></router-link
      >
      <router-link to="/triggers"
        ><i class="fas fa-comment-alt"></i><span>Triggers</span></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheSidebar',
  data: () => {
    return {
      collapsed: false,
      sidebarWidth: 100,
      sidebarWidthCollapsed: 55,
    };
  },
  computed: {
    width() {
      return `${
        this.collapsed ? this.sidebarWidthCollapsed : this.sidebarWidth
      }px`;
    },
  },
  methods: {
    toggleSidebar() {
      return (this.collapsed = !this.collapsed);
    },
  },
};
</script>
<style scoped lang="scss">
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
.router-link-active > i,
.router-link-active > .link_text {
  color: var(--white-100) !important;
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
@include tablet-md {
  .collapse-icon {
    display: none;
  }
  .rotate-180 {
    transform: none;
    transition: none;
  }
}
</style>
