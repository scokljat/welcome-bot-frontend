<template>
  <button class="collapse-icon" @click="toggleSidebar">
    <i class="fa-solid fa-bars"></i>
  </button>

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
  margin-top: 60px;
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
  left: 20px;
  top: 6px;
  padding: 5px;
  transition: 0.2s linear;
  margin-bottom: 20px;
  font-size: 25px;
  color: var(--text-primary-1);
}
.collapsed {
  transform: translateX(-102%);
}
@include tablet-md {
  .collapsed {
    transform: translateX(0);
  }
  .link {
    padding: 10px 38px;
  }
  .collapse-icon {
    display: none;
  }
}
</style>
