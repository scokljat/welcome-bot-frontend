<template>
  <button class="collapseIcon" @click="toggleSidebar">
    <i class="fa-solid fa-bars"></i>
  </button>
  <div class="sidebar" :class="{ collapsed }">
    <div class="linkWrap">
      <router-link to="/messages" class="sidebarLink" @click="toggleSidebar"
        ><i class="fas fa-envelope"></i><span>Messages</span></router-link
      >
      <router-link to="/schedules" class="sidebarLink" @click="toggleSidebar"
        ><i class="fas fa-calendar-check"></i
        ><span>Schedules</span></router-link
      >
      <router-link to="/triggers" class="sidebarLink" @click="toggleSidebar"
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
    };
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
  flex: 0.2;

  &.collapsed {
    transform: translateX(-102%);
  }
}

.linkWrap {
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
}

.sidebarLink {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 0.63rem;
  margin: 1.25rem;
  color: var(--text-secondary-2);
  text-decoration: none;
}

.fas {
  font-size: $text-xl;
}

.sidebarLink.router-link-active {
  color: var(--text-secondary-1);
}

.collapseIcon {
  position: fixed;
  z-index: 100;
  left: 1.25rem;
  top: 0.38rem;
  padding: 0.31rem;
  transition: 0.2s ease;
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  color: var(--text-secondary-1);
}

@include tablet-md {
  .sidebar {
    position: relative;
    grid-column: 1/2;
    min-height: 100vh;

    &.collapsed {
      transform: translateX(0);
    }
  }

  .sidebarLink {
    padding: 0.63rem 2.38rem;
  }

  .collapseIcon {
    display: none;
  }
}
</style>
