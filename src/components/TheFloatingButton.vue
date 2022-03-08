<template>
  <div class="wrapper">
    <i class="fa-solid fa-plus"></i>
  </div>
</template>

<script>
export default {
  name: 'TheFloatingButton',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* 375px Mobile */
.wrapper {
  width: 45px;
  height: 45px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 1.4rem;
  right: 0.8rem;
  padding: 10px;
  background-color: var(--blue);
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 4px 5px 0 rgba(0, 0, 0, 0.14);
  cursor: pointer;
  i {
    font-size: 0.88rem;
    color: var(--white-60);
  }
}
/* 411px */
@media only screen and (min-width: 411px) {
  .wrapper {
    width: 48px;
    height: 48px;
    right: 1rem;
    padding: 12px;
    i {
      font-size: 1rem;
    }
  }
}
/* 768px tablet */
@media only screen and (min-width: 768px) {
  .wrapper {
    width: 55px;
    height: 55px;
    right: 1.4rem;
    bottom: 1.6rem;
    i {
      font-size: 1.2rem;
    }
  }
}
/* 1366px laptop */
@media only screen and (min-width: 1366px) {
  .wrapper {
    width: 58px;
    height: 58px;
    right: 2.2rem;
    bottom: 2.2rem;
    padding: 14px;
    i {
      font-size: 1.4rem;
    }
  }
}
</style>
