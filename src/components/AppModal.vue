<template>
  <div class="container">
    <div class="header">
      <h2>{{ modalTitle }}</h2>
      <i class="fa-solid fa-x"></i>
    </div>
    <div class="form_body">
      <slot />
    </div>
    <div class="footer">
      <button class="cancel">Cancel</button>
      <button class="save">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    modalTitle: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* 375px Mobile */
.container {
  position: fixed;
  width: 84vw;
  z-index: 900;
  background-color: var(--white-100);
  border-radius: 4px;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.1),
    0 16px 24px 2px rgba(0, 0, 0, 0.1);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.3rem;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    text-align: left;
    h2 {
      font-size: 17px;
      color: var(--gray);
      font-weight: 700;
    }
    i {
      font-size: 0.85rem;
      cursor: pointer;
      color: var(--gray-60);
    }
  }
  .form_body {
    padding: 10px 0px;
    font-weight: 400;
  }
  .footer {
    padding-top: 8px;
    padding-bottom: 6px;
    display: flex;
    align-items: center;
    justify-content: right;
    button {
      min-width: 90px;
      border-radius: 4px;
      padding: 10px;
      border: none;
      outline: none;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      font-weight: 500;
      cursor: pointer;
    }
    .cancel {
      color: var(--gray);
      background: transparent;
    }
    .save {
      background: var(--blue);
      margin-left: 3px;
      color: var(--white-100);
    }
  }
}
/* 411px */
@media only screen and (min-width: 411px) {
  .container {
    padding: 1.4rem;
  }
}
/* 768px tablet */
@media only screen and (min-width: 768px) {
  .container {
    width: 72vw;
    padding: 1.7rem;
    .header {
      h2 {
        font-size: 22px;
      }
      i {
        font-size: 1.08rem;
      }
    }
    .footer {
      padding-top: 26px;
      button {
        min-width: 110px;
        font-size: 16px;
        padding: 12px 10px;
      }
    }
  }
}
/* 768px tablet */
@media only screen and (min-width: 900px) {
  .container {
    width: 45vw;
  }
}
/* 1366px laptop */
@media only screen and (min-width: 1366px) {
  .container {
    width: 40vw;
    padding: 2rem;
    .header {
      h2 {
        font-size: 24px;
      }
      svg {
        width: 35px;
        height: 35px;
      }
    }
    .footer {
      padding-top: 36px;
      button {
        min-width: 130px;
        font-size: 18px;
        padding: 14px 10px;
      }
    }
  }
}
</style>
