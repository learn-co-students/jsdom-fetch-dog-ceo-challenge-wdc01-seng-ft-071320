console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(response => response.json())
.then(dogResponse => renderImages(dogResponse.message))

function renderImages(imageArray)
{
    const dogDiv = document.querySelector('div#dog-image-container')
    imageArray.forEach(imageUrl => {
   
    let image = document.createElement("img")
    image.src = imageUrl 
    dogDiv.append(image)
    
    })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(response => response.json())
.then(breedResponse => renderBreeds(breedResponse.message))
function renderBreeds(breedHash)
{
    const breedUl = document.querySelector('ul#dog-breeds')
    for (breed in breedHash )
    {
        let breedLi = document.createElement("li")

        if (breedHash[breed].length > 0)
            breedHash[breed].forEach(subbreed => 
            {
            console.log(subbreed)
            
            breedLi.innerText =  subbreed + " " + breed 
            }) 
        else { breedLi.innerText = breed };
        function myFunction() {
           let  txt = document.querySelector("li")
            txt.innerText.style.color = "purple"
          }
        breedLi.setAttribute("onclick", "myFunction()")
        breedUl.append(breedLi) 

    }
}





// let image = document.createElement("img");
// image.setAttribute('src', imgUrl[i]);
// dog_div.appendChild(image)
 