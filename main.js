console.log("hello")

// vanilla JS
// let specialRow = document.getElementById("special-row")
// specialRow.addEventListener("click", specialClick)

// function specialClick(e) {
//     alert("special")
// }
// let container = document.getElementsByClassName("container")[0]
// container.addEventListener("click", containerClick)

// let items = document.getElementsByClassName("item")

// for (let i = 0; i < items.length; i++) {
//     items[i].addEventListener("click", itemClick)
// }

// function itemClick(e) {
//     console.log(e)
//     e.target.setAttribute("style", "background: purple;")
//     let newButton = document.createElement("button")
//     newButton.innerHTML = "Hello Button"
//     newButton.addEventListener("click", buttonClick)
//     newButton.setAttribute("style", "height: 200px;")
//     document.body.appendChild(newButton)
// }

// function containerClick(){
//     console.log("container click")

// }

// function buttonClick(){
//     console.log("button click")

// }

//JQUERY
let items2 = $(".item")
let row2 = $('#special-row').css("background", "yellow")
items2.click(function () {
    alert("item click 2")
})

