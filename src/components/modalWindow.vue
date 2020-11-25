<template>
  <div class="modal" @click="closeModal">
    <div class="modal__window">
      <button type="button" class="modal__button" @click="closeModal">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="times"
          class="svg-inline--fa fa-times fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          @click="closeModal"
        >
          <path
            fill="currentColor"
            d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
            @click="closeModal"
          ></path>
        </svg>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    let closeModal = ({ currentTarget, target }) => {
      if (currentTarget === target) context.emit("closemodal")
    }
    return { closeModal }
  }
}
</script>

<style lang="scss">
.modal {
  z-index: 1000;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  color: var(--main-dark-color);
  * {
    text-align: left;
  }
}
.modal__window {
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  max-width: 70ch;
  transform: translate(-50%, -50%);
  max-height: 80vh;
  overflow-y: scroll;
  padding: 2rem;
  border-radius: 20px;
  background: var(--complementary-light-color);
}
.modal__button {
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background: none;
  width: 3rem;
  height: 3rem;
  color: var(--main-complement-color);
  &:hover {
    cursor: pointer;
    svg {
      transform: rotate(180deg);
    }
  }
  svg {
    height: 2.5rem;
    width: 2.5rem !important;
    transition: transform 0.2s ease-in;
  }
}
</style>
