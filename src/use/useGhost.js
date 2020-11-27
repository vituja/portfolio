//based on https://dribbble.com/shots/3913847-404-page

var pageX = document.width()
var pageY = document.height
var mouseY = 0
var mouseX = 0

document.addEventListener("mousemove", function(event) {
  //verticalAxis
  mouseY = event.pageY
  let yAxis = ((pageY / 2 - mouseY) / pageY) * 300
  //horizontalAxis
  mouseX = event.pageX / -pageX
  let xAxis = -mouseX * 100 - 100

  let ghostEyes = document.querySelector(".box__ghost-eyes")
  ghostEyes.style.transform = `translate(${xAxis}%,-${yAxis}%)`
})
