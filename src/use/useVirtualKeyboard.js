export function keyDown() {
  let key = event.code
  try {
    document.getElementById(key).classList.add("keyboard__key--pressed")
  } catch (err) {
    // Empty catch error
  }
}

export function keyUp() {
  let k = event.code
  try {
    document.getElementById(k).classList.remove("keyboard__key--pressed")
  } catch (err) {
    // Empty catch error
  }
}
