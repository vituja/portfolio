<template>
  <button class="mdn-btn mdn-btn--contained" @mousedown="rippleEffect">
    <slot>Placeholder</slot>
  </button>
</template>

<script>
export default {
  setup() {
    function rippleEffect() {
      const btn = event.currentTarget

      const circle = document.createElement("span")
      const diameter = Math.max(btn.clientWidth, btn.clientHeight)
      const radius = diameter / 2

      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`
      circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`
      circle.classList.add("ripple")

      const ripple = btn.getElementsByClassName("ripple")[0]

      if (ripple) {
        ripple.remove()
      }

      btn.appendChild(circle)
    }
    return { rippleEffect }
  }
}
</script>

<style lang="scss">
.mdn-btn {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  font-size: 1em;
  border-radius: 4px;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  width: max-content;
  cursor: pointer;
}
.mdn-btn--contained {
  color: var(--main-light-color);
  background: var(--main-complement-color);
}
.mdn-btn--contained:hover {
  background: #c0002d;
  cursor: pointer;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.mdn-btn--outlined {
  color: var(--main-complement-color);
  background: transparent;
  border: 1px solid var(--main-complement-color);
}
.mdn-btn--outlined:hover {
  cursor: pointer;
  background: #d800321f;
}
.mdn-btn--text {
}
.mdn-btn--disabled {
}
span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
