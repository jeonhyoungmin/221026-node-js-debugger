console.dir(document.body.children[0])

const textDiv = document.body.children[0]

textDiv.addEventListener('click', (target) => {
  // console.log(target)
  // console.dir(target)
  // console.dir(textDiv.style)
  if(textDiv.style.color === "blue") {
    textDiv.style.color = "red"
  } else {
    textDiv.style.color = "blue"
  }
})