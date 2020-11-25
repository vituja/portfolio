<template>
  <div class="info-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
.info-card {
  overflow: hidden;
  position: relative;
  padding: 1.5rem;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 0px 8px #ccc;
  transition: box-shadow 0.2s ease-in-out;
  > * {
    margin: 0.5rem auto 0.5rem auto;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    > * {
      margin: 5px;
    }
  }
  &:hover {
    box-shadow: 0px 0px 15px 3px #ccc;
  }
}
</style>
