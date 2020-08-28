breeds = []

document.addEventListener("DOMContentLoaded", (e) => {
    console.log('%c HI', 'color: firebrick')
    getDog()
    getBreed()
    dropdown()
})

function getDog(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(dogImages => dogImages.message.forEach(image => renderImage(image)))
    }

function renderImage(dogImage) {
    let div = document.querySelector("div#dog-image-container")
    let img = document.createElement("img")
    img.src = dogImage 
    div.append(img)
}
    

function getBreed() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breed => breedNames(Object.keys(breed.message)))
}


function breedNames(breedObject) {
    breedObject.forEach(breed => { 
        let ul = document.querySelector("ul#dog-breeds")
        let li = document.createElement("li")
        li.innerText = breed 
        ul.append(li)
        handleColorClick(li)
    })
}

function handleColorClick(li) {
    li.addEventListener("click", (e) => {
    li.style.color = "blue"
    console.log(li)
    })
}

function dropdown() {
let dp = document.querySelector("select#breed-dropdown")

dp.addEventListener("change", (e) => {
    document.querySelectorAll("li").forEach( li => 
        li.innerText[0] !== e.target.value? li.remove(): console.log("false"))
 
    // if (e.target.value === "b") {
    // } 
// console.log(typeof e.target.value)
})
}
