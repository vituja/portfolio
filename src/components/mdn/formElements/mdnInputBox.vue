<template>
  <div class="text-field">
    <input
      :id="idInput"
      :type="type"
      :name="fieldName"
      :required="isMandatory"
    />
    <label class="text-field__label" :for="idInput">{{ lableText }}</label>
    <div class="text-field__line"></div>
    <div v-if="helpMsg != ''" class="text-field__help-text">
      {{ helpMsg }}
    </div>
    <div class="text-field__error-text">
      {{ errorMsg }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idInput: {
      type: String,
      required: true
    },
    fieldName: {
      type: String,
      default: "Name"
    },
    type: {
      type: String,
      required: true
    },
    lableText: {
      type: String,
      default: "Placeholder"
    },
    helpMsg: {
      type: String,
      required: false
    },
    errorMsg: {
      type: String
    },
    isMandatory: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
.text-field {
  position: relative;
  text-align: left;
  min-width: 280px;
  height: 48px;
  background: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 26px;
  input {
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
  input:required + label::after {
    content: " *";
  }
  input:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  input:focus {
    border: none;
    background: rgba(0, 0, 0, 0.1);
    ~ .text-field__line {
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
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    transition: all 0.1s ease;
  }
}
.text-field.is-visited {
  input:invalid {
    box-shadow: none;
    ~ .text-field__error-text {
      display: initial;
    }
    + label {
      top: 20px;
      transform: translateY(-100%);
      font-size: 0.8rem;
      color: red;
    }
  }
  input:required:valid + label {
    top: 20px;
    transform: translateY(-100%);
    font-size: 0.8rem;
    color: lightslategray;
  }
}
.text-field__line {
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
.text-field__error-text {
  position: absolute;
  display: none;
  font-size: 0.7rem;
  bottom: -16px;
  width: 100%;
  padding: 0 12px 0 16px;
  color: red;
}
.text-field__help-text {
  position: absolute;
  font-size: 0.7rem;
  bottom: -16px;
  width: 100%;
  padding: 0 12px 0 16px;
  color: gray;
}
</style>
