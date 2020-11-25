<template>
  <button
    class="hamburger"
    aria-label="Navigation opener"
    :class="{ 'hamburger--toggled': navIsOpen }"
    @click="updateNavStatus()"
  >
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
// import { watchEffect } from "vue"
export default {
  props: {
    navIsOpen: Boolean
  },
  setup(props, context) {
    const updateNavStatus = () => {
      context.emit("toggle")
    }
    /* watchEffect(() => {
      props.navIsOpen
        // ? document.querySelector("body").classList.add("no-scroll")
        // : document.querySelector("body").classList.remove("no-scroll")
    }) */
    return { updateNavStatus }
  }
}
</script>

<style lang="scss" scoped>
button {
  --dimensions: 60px;
  --line-hei: 3px;
  --hamb-line-space: 8px;
  --line-wid: calc(var(--dimensions) / 2);
  --hamb-hei: calc(var(--hamb-line-space) * 2 + var(--line-hei));
  --hamb-pos-top: calc((var(--dimensions) - var(--hamb-hei)) / 2);
  --line-color: var(--main-light-color);
}
.hamburger {
  display: block;
  width: var(--dimensions);
  height: var(--dimensions);
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;
  z-index: 100;
  background: transparent;
  border: 0;
}
span {
  display: block;
  position: absolute;
  height: var(--line-hei);
  width: var(--line-wid);
  opacity: 1;
  left: calc((var(--dimensions) - var(--line-wid)) / 2);
  transform: rotate(0deg);
  transition: all 0.15s ease-in-out;
  background: var(--line-color);
  &:first-child {
    top: var(--hamb-pos-top);
  }
  &:nth-child(2),
  &:nth-child(3) {
    top: calc(var(--hamb-pos-top) + var(--hamb-line-space));
  }
  &:last-child {
    top: calc(var(--hamb-pos-top) + (var(--hamb-line-space) * 2));
  }
}

.hamburger--toggled span:first-child,
.hamburger--toggled span:last-child {
  top: calc(var(--hamb-pos-top) + var(--hamb-line-space));
  width: 0;
  left: 50%;
}
.hamburger--toggled span:nth-child(2) {
  transform: rotate(45deg);
}
.hamburger--toggled span:nth-child(3) {
  transform: rotate(-45deg);
}

/* .hamburger--link-toggled span:nth-child(2),
.hamburger--link-toggled span:nth-child(3) {
  left: calc((var(--dimensions) - (2 * var(--line-wid) / 3)) / 2);
  width: calc(2 * var(--line-wid) / 3);
}
.hamburger--link-toggled span:first-child {
  left: calc((var(--dimensions) - (2 * var(--line-wid) / 3)) / 2);
  width: calc(3 * (2 * var(--line-wid) / 3) / 4);
  transform: translate(calc((3 * (2 * var(--line-wid) / 3) / 4) / -4), 3px)
    rotate(-45deg);
}
.hamburger--link-toggled span:last-child {
  left: calc((var(--dimensions) - (2 * var(--line-wid) / 3)) / 2);
  width: calc(var(--line-wid) / 2);
  transform: translate(calc((3 * (2 * var(--line-wid) / 3) / 4) / -4), -3px)
    rotate(45deg);
} */
</style>
