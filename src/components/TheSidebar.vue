<template>
  <div ref="target">
    <button class="collapse-icon" @click="toggleSidebar">
      <i class="fa-solid fa-bars"></i>
    </button>

    <div class="sidebar" :class="{ collapsed }">
      <div class="link-wrap">
        <router-link to="/messages" class="sidebar-link" @click="closeSidebar"
          ><i class="fas fa-envelope"></i><span>Messages</span></router-link
        >
        <router-link to="/schedules" class="sidebar-link" @click="closeSidebar"
          ><i class="fas fa-calendar-check"></i
          ><span>Schedules</span></router-link
        >
        <router-link to="/triggers" class="sidebar-link" @click="closeSidebar"
          ><i class="fas fa-comment-alt"></i><span>Triggers</span></router-link
        >
        <button @click="handleLogout">
          <i class="fa-solid fa-arrow-right-from-bracket"></i
          ><span>Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStore } from 'vuex';

export default {
  name: 'TheSidebar',
  setup() {
    const store = useStore();
    const target = ref(null);
    let collapsed = ref(true);

    onClickOutside(target, () => {
      collapsed.value = true;
    });

    const toggleSidebar = () => {
      collapsed.value = !collapsed.value;
    };

    const closeSidebar = () => {
      collapsed.value = true;
    };

    const handleLogout = () => {
      store.dispatch('logout', store.state.token);
    };

    return {
      target,
      collapsed,
      toggleSidebar,
      closeSidebar,
      handleLogout,
    };
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
  z-index: 100;

  &.collapsed {
    transform: translateX(-102%);
  }
}

.link-wrap {
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
}

.sidebar-link,
button {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: var(--text-secondary-2);
  text-decoration: none;
  padding: 1.25rem;
  transition: all 0.25s ease-in-out;
}

.fas,
.fa-solid {
  font-size: $text-xl;
}

span {
  font-size: $text-sm;
}

.sidebar-link.router-link-active {
  color: var(--text-secondary-1);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--text-secondary-1);
    opacity: 0.1;
    z-index: 100;
  }
}

.sidebar-link:hover,
button:hover {
  color: var(--text-secondary-1);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--text-secondary-1);
    opacity: 0.1;
    z-index: 100;
  }
}

.collapse-icon {
  position: fixed;
  z-index: 101;
  left: 1.25rem;
  top: 0.75rem;
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

  button,
  .sidebar-link {
    padding: 1.8rem 2.1rem;
  }

  .collapse-icon {
    display: none;
  }
}
</style>
