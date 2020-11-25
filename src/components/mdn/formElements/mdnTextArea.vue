<template>
  <div class="text-area">
    <textarea
      :name="name"
      :id="idInput"
      cols="30"
      rows="10"
      :required="isMandatory"
    ></textarea>
    <label class="text-area__label" for="message">
      {{ labelText }}
    </label>
    <div class="text-area__line"></div>
  </div>
</template>

<script>
export default {
  props: {
    idInput: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    isMandatory: {
      type: Boolean,
      default: false
    },
    labelText: {
      type: String,
      default: "Placeholder"
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
.text-area {
  position: relative;
  text-align: left;
  min-width: 280px;
  height: 384px;
  background: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 16px;
  textarea {
    resize: none;
    position: absolute;
    color: #fff;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 20px 12px 7px 16px;
    border-bottom: 1px solid #fff;
    background: transparent;
    box-shadow: none;
  }
  textarea:required + label::after {
    content: " *";
  }
  textarea:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  textarea:focus {
    border: none;
    background: rgba(0, 0, 0, 0.1);
    ~ .text-area__line {
      width: 100%;
      height: 2px;
      background: var(--main-complement-color);
    }
    + label {
      top: 20px;
      transform: translateY(-100%);
      font-size: 0.8rem;
      color: var(--main-complement-color);
    }
  }

  label {
    position: absolute;
    pointer-events: none;
    padding-left: 16px;
    top: 20px;
    color: gray;
    transition: all 0.1s ease;
  }
}
.text-area.is-visited {
  textarea:invalid {
    box-shadow: none;
    + label {
      top: 20px;
      transform: translateY(-100%);
      font-size: 0.8rem;
      color: red;
    }
  }
  textarea:required:valid + label {
    top: 20px;
    transform: translateY(-100%);
    font-size: 0.8rem;
    color: lightslategray;
  }
}
.text-area__line {
  position: absolute;
  width: 0;
  height: 0;
  bottom: 0;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s ease;
  pointer-events: none;
}
</style>
