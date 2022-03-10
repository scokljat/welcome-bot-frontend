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
      sidebarWidth: 6.25,
      sidebarWidthCollapsed: 3.4375,
    };
  },
  computed: {
    width() {
      return `${
        this.collapsed ? this.sidebarWidthCollapsed : this.sidebarWidth
      }rem`;
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
  margin-top: 3.75rem;
}

.link {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 0.625rem;
  margin: 1.25rem;
  color: var(--text-primary-2);
  text-decoration: none;
}

.fas {
  font-size: 1.5rem;
}

.link.router-link-active {
  color: var(--text-primary-1);
}

.collapse-icon {
  position: fixed;
  z-index: 100;
  left: 1.25rem;
  top: 0.375rem;
  padding: 0.3125rem;
  transition: 0.2s linear;
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
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
    padding: 0.625rem 2.375rem;
  }

  .collapse-icon {
    display: none;
  }
}
</style>
