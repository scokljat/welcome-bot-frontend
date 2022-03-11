<template>
  <div class="wrapper">
    <div class="select-wrapper">
      <select class="select-box">
        <option name="Option 1">Some message title One</option>
        <option name="Option 2">Some message title Two</option>
        <option name="Option 3">Some message title Three</option>
      </select>
      <div class="select-label">Message</div>
    </div>
    <div class="select-wrapper">
      <select class="select-box">
        <option name="channel-join">On channel join</option>
      </select>
      <div class="select-label">Trigger</div>
    </div>
    <div class="channel-title">
      <div class="label">Channel</div>
      <input
        class="channel-input"
        type="text"
        name="title"
        placeholder="Enter the channel name..."
      />
    </div>
    <div class="message-state">
      <input id="active" type="checkbox" name="active" value="Active" />
      <label for="active">Active</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCreateTrigger',
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
}

.select-label {
  position: absolute;
  top: -21%;
  left: 2%;
  color: var(--text-secondary-2);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.13ren 0.38rem;
  background-color: var(--text-primary-1);
}

.select-box {
  width: 100%;
  background-color: transparent;
  outline: none;
  border: 0.06rem solid var(--border-color-1);
  padding: 0.63rem;
  border-radius: 0.25rem;
  margin-bottom: 1.25rem;
  font-size: 0.81rem;
  font-weight: 400;
  color: var(--text-secondary-1);
}

.message-state {
  display: flex;
  align-items: center;
  margin-bottom: 0.38rem;
}

.message-state > label {
  margin-left: 0.63rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--text-secondary-2);
}

.channel-title {
  width: 100%;
  position: relative;
  padding-bottom: 1.25rem;
}

.label {
  position: absolute;
  color: var(--text-secondary-2);
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.13rem 0.38rem;
  background-color: var(--text-primary-1);
  left: 2%;
  top: -21%;
}
.channel-input {
  width: 100%;
  padding: 0.63rem;
  border-radius: 0.25rem;
  outline: none;
  border: 0.06rem solid var(--border-color-1);
  color: var(--text-secondary-1);
  font-size: 0.81rem;
}

@include tablet-sm {
  .select-box {
    font-size: 0.88rem;
    padding: 0.75rem 0.63rem;
  }

  .message-state {
    margin-bottom: 0.63rem;
  }

  .message-state > label {
    font-size: 0.81rem;
  }

  .channel-input {
    padding: 0.75rem 0.63rem;
    font-size: 0.88rem;
  }
}

@include laptop {
  .select-box {
    margin-bottom: 1.63rem;
    font-size: 1rem;
  }

  .message-state > label {
    font-size: 0.88rem;
  }

  .channel-input {
    font-size: 1rem;
  }
}
</style>
