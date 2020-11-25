<template>
  <div id="kbd" class="keyboard">
    <div class="keyboard__row">
      <div id="Backquote" class="keyboard__key"></div>
      <div id="Digit1" class="keyboard__key"></div>
      <div id="Digit2" class="keyboard__key"></div>
      <div id="Digit3" class="keyboard__key"></div>
      <div id="Digit4" class="keyboard__key"></div>
      <div id="Digit5" class="keyboard__key"></div>
      <div id="Digit6" class="keyboard__key"></div>
      <div id="Digit7" class="keyboard__key"></div>
      <div id="Digit8" class="keyboard__key"></div>
      <div id="Digit9" class="keyboard__key"></div>
      <div id="Digit0" class="keyboard__key"></div>
      <div id="Minus" class="keyboard__key"></div>
      <div id="Equal" class="keyboard__key"></div>
      <div id="Backspace" class="keyboard__key keyboard__key--w2"></div>
    </div>
    <div class="keyboard__row">
      <div class="keyboard__key keyboard__key--w1-5"></div>
      <div id="KeyQ" class="keyboard__key"></div>
      <div id="KeyW" class="keyboard__key"></div>
      <div id="KeyE" class="keyboard__key"></div>
      <div id="KeyR" class="keyboard__key"></div>
      <div id="KeyT" class="keyboard__key"></div>
      <div id="KeyY" class="keyboard__key"></div>
      <div id="KeyU" class="keyboard__key"></div>
      <div id="KeyI" class="keyboard__key"></div>
      <div id="KeyO" class="keyboard__key"></div>
      <div id="KeyP" class="keyboard__key"></div>
      <div class="keyboard__key"></div>
      <div class="keyboard__key"></div>
      <div class="keyboard__key keyboard__key--w1-5"></div>
    </div>
    <div class="keyboard__row">
      <div id="CapsLock" class="keyboard__key keyboard__key--w1-75"></div>
      <div id="KeyA" class="keyboard__key"></div>
      <div id="KeyS" class="keyboard__key"></div>
      <div id="KeyD" class="keyboard__key"></div>
      <div id="KeyF" class="keyboard__key"></div>
      <div id="KeyG" class="keyboard__key"></div>
      <div id="KeyH" class="keyboard__key"></div>
      <div id="KeyJ" class="keyboard__key"></div>
      <div id="KeyK" class="keyboard__key"></div>
      <div id="KeyL" class="keyboard__key"></div>
      <div class="keyboard__key"></div>
      <div class="keyboard__key"></div>
      <div id="Enter" class="keyboard__key keyboard__key--w2-25"></div>
    </div>
    <div class="keyboard__row">
      <div id="ShiftLeft" class="keyboard__key keyboard__key--w1-25"></div>
      <div class="keyboard__key"></div>
      <div id="KeyZ" class="keyboard__key"></div>
      <div id="KeyX" class="keyboard__key"></div>
      <div id="KeyC" class="keyboard__key"></div>
      <div id="KeyV" class="keyboard__key"></div>
      <div id="KeyB" class="keyboard__key"></div>
      <div id="KeyN" class="keyboard__key"></div>
      <div id="KeyM" class="keyboard__key"></div>
      <div class="keyboard__key"></div>
      <div class="keyboard__key"></div>
      <div class="keyboard__key"></div>
      <div id="ShiftRight" class="keyboard__key keyboard__key--w2-75"></div>
    </div>
    <div class="keyboard__row">
      <div class="keyboard__key"></div>
      <div id="ControlLeft" class="keyboard__key"></div>
      <div id="AltLeft" class="keyboard__key"></div>
      <div id="MetaLeft" class="keyboard__key keyboard__key--w1-25"></div>
      <div id="Space" class="keyboard__key keyboard__key--space"></div>
      <div id="MetaRight" class="keyboard__key keyboard__key--w1-25"></div>
      <div id="AltRight" class="keyboard__key"></div>
      <div
        id="ArrowLeft"
        class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-left"
      ></div>
      <div
        id="ArrowUp"
        class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-up"
      ></div>
      <div
        id="ArrowDown"
        class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-down"
      ></div>
      <div
        id="ArrowRight"
        class="keyboard__key keyboard__key--h0-5 keyboard__key-arrow-right"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.keyboard {
  width: 900px;
  height: 300px;
  position: absolute;
  background: transparent;
  display: grid;
  gap: 2px;
}

.keyboard__row {
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(60, 1fr);
  grid-template-rows: 1fr 1fr;
  z-index: 0;
}
.keyboard__key {
  height: 100%;
  width: 100%;
  grid-column: span 4;
  grid-row: span 2;
  border-radius: 3px;
  /* border: 1px solid #1a1c33; */
  background-color: #2a2d462c;
  transition: 0.05s background ease-in;
}
.keyboard__key--h0-5 {
  grid-row: span 1;
}
.keyboard__key-arrow-up {
  grid-row: 1;
  grid-column-end: -5;
}
.keyboard__key-arrow-down {
  grid-column-end: -5;
  grid-row: 2;
}
.keyboard__key-arrow-left {
  grid-column-end: -9;
  grid-row: 2;
}
.keyboard__key-arrow-right {
  grid-column-end: -1;
  grid-row: 2;
}
.keyboard__key--w1-25 {
  grid-column: span 5;
}
.keyboard__key--w1-5 {
  grid-column: span 6;
}
.keyboard__key--w1-75 {
  grid-column: span 7;
}
.keyboard__key--w2 {
  grid-column: span 8;
}
.keyboard__key--w2-25 {
  grid-column: span 9;
}
.keyboard__key--w2-75 {
  grid-column: span 11;
}
.keyboard__key--space {
  grid-column: span 22;
}
.keyboard__key--pressed {
  background: rgba(211, 211, 211, 0.1);
}
</style>
