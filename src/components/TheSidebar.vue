<template>
  <span
    class="collapse-icon"
    :class="{ 'rotate-180': collapsed }"
    @click="toggleSidebar"
  >
    <i class="fas fa-angle-double-left" />
  </span>
  <div class="sidebar" :class="{ collapsed: collapsed }">
    <div class="sidebarlink">
      <router-link to="/messages" class="link"
        ><i class="fas fa-envelope"></i><span>Messages</span></router-link
      >
      <router-link to="/schedules" class="link"
        ><i class="fas fa-calendar-check"></i
        ><span>Schedules</span></router-link
      >
      <router-link to="/triggers" class="link"
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
      this.collapsed = !this.collapsed;
    },
  },
};
</script>
<style scoped lang="scss">
.sidebar {
  background-color: var(--primary);
  position: fixed;
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
  color: var(--text-primary-2);
  text-decoration: none;
}
.fas {
  font-size: 24px;
}
.link.router-link-active {
  color: var(--text-primary-1);
}
.collapse-icon {
  position: fixed;
  z-index: 100;
  top: 10px;
  left: 10px;
  padding: 5px;
  color: var(--icon-nav);
  transition: 0.2s linear;
  margin-bottom: 20px;
  font-size: 25px;
}
.collapsed {
  transform: translateX(-100%);
}
.rotate-180 {
  transform: rotate(-180deg);
  transition: 0.2s linear;
}
@include tablet-md {
  .link {
    padding: 10px 38px;
  }
  .collapse-icon {
    display: none;
  }
  .collapsed {
    display: none;
  }
  .rotate-180 {
    transform: none;
    transition: none;
  }
}
</style>
