import { keyDown, keyUp } from "@/use/useVirtualKeyboard.js"

export default function validateFormFields(validationFields) {
  validationFields.forEach(field => {
    const input = field.querySelector("input, textarea")
    input.addEventListener("focusin", () => {
      document.addEventListener("keydown", keyDown)
      document.addEventListener("keyup", keyUp)
    })
    input.addEventListener("focusout", () => {
      field.classList.add("is-visited")
      document.removeEventListener("keydown", keyDown)
      document.removeEventListener("keyup", keyUp)
    })
  })
}
export function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
