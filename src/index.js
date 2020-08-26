console.log('%c HI', 'color: firebrick')

const div = document.querySelector("#dog-image-container")
const ul = document.querySelector("#dog-breeds")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(response => response.json())
.then(images => showImages(images))

function showImages(images) {
    images.message.forEach( image => {
        let img = document.createElement('img');
        img.src = image;
        div.append(img)
    })
    
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function addBreedsToUrl(letter = "all") {

    fetch(breedUrl)
    .then(response => response.json())
    .then(breeds => addBreed(breeds))

    function addBreed(breeds) {
        for ( const breed in breeds.message) {
            if (letter != "all" && breed[0] === letter) {
                let li = document.createElement('li');
                li.innerText = breed
                li.setAttribute("data-breed", "general")
                ul.append(li)
                if (breeds.message[breed].length > 0){
                    let innerUl = document.createElement("ul")
                    li.append(innerUl)
                    
                    breeds.message[breed].forEach( specificBreed => {
                        let innerLi = document.createElement('li')
                        innerLi.innerText = specificBreed
                        innerLi.setAttribute("data-breed", "specific")
                        innerUl.append(innerLi)
                    })
                }
                
            } else if (letter == "all") {
                let li = document.createElement('li');
                li.innerText = breed
                li.setAttribute("data-breed", "general")
                ul.append(li)
                if (breeds.message[breed].length > 0){
                    let innerUl = document.createElement("ul")
                    li.append(innerUl)
                    
                    breeds.message[breed].forEach( specificBreed => {
                        let innerLi = document.createElement('li')
                        innerLi.innerText = specificBreed
                        innerLi.setAttribute("data-breed", "specific")
                        innerUl.append(innerLi)
                    })
                }
                
            }
        }
    }
}

// function test(breeds){
//     let li = document.createElement('li');
//     li.innerText = breed
//     li.setAttribute("data-breed", "general")
//     ul.append(li)
//     if (breeds.message[breed].length > 0){
//         let innerUl = document.createElement("ul")
//         li.append(innerUl)
                    
//         breeds.message[breed].forEach( specificBreed => {
//             let innerLi = document.createElement('li')
//             innerLi.innerText = specificBreed
//             innerLi.setAttribute("data-breed", "specific")
//             innerUl.append(innerLi)
//         })
//     }
// }

ul.addEventListener("click", function(){
    switch(event.target.dataset.breed){
        case "general":
            event.target.style = "color: red;"
            break
        case "specific":
            event.target.style = "color: blue;"
            break
        }
})

addBreedsToUrl()

const selection = document.querySelector("#breed-dropdown")
// addBreedsToUrl(selection.value)
selection.addEventListener("change", function(){
    ul.innerText = "";
    switch(selection.value){
        case "all":
            addBreedsToUrl()
            break
        case "a":
            addBreedsToUrl("a")
            break
            
        case "b":
            addBreedsToUrl("b")
            break
        case "c":
            addBreedsToUrl("c")
            break
        case "d":
            addBreedsToUrl("d")
            break
    }

})






