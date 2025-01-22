async function getworks() {
    const response = await fetch("http://localhost:5678/api/works")
    const data = await response.json();
    console.log(data)
    return data
}

async function getcategories() {
    const response = await fetch("http://localhost:5678/api/categories")
    const data = await response.json();
    console.log(data)
    return data
}

function displaywork(data) {
    let gallery = document.getElementById("gallery")
    const data3 = data.title
    const data4 = data.imageUrl
    console.log(data3)
    const title = document.createElement("p")
    title.textContent = data3
    let image = document.createElement("img")
    image.src = data4
    const fig = document.createElement("figure")
    fig.appendChild(image)
    fig.appendChild(title)
    gallery.appendChild(fig)
    gallery.classList.add("gallery")
}

let buttonclass = []
let buttonfiltertous = document.getElementById("buttonfiltertous")


async function filterbyid(i) {
    const data = await getworks()
    const dataid = data.filter(obj => obj.categoryId == i)
    console.log(dataid)
    let j = dataid.length
    const gallery = document.getElementById("gallery")
    gallery.innerHTML = ""
    for (let c = 0; c < j; c++) {
        displaywork(dataid[c])
    }
}

async function displaycategories() {
    const filter = document.getElementById("filter")
    const categories = await getcategories()
    let j = categories.length
    for (let d = 0; d < j; d++) {
        let button = document.createElement("button")
        button.textContent = categories[d].name
        filter.appendChild(button)
        button.classList.add("filteroff")
        buttonclass.push(button)
        buttonclass[d].addEventListener("click", function () {
            filterbyid(d + 1)
            buttonclass.forEach(element => {
                element.classList.add("filteroff")
                element.classList.remove("filter")
            })
            buttonclass[d].classList.add("filter")
            buttonclass[d].classList.remove("filteroff")

            buttonfiltertous.classList.add("filteroff")
            buttonfiltertous.classList.remove("filter")
        }
        )
    }





    buttonfiltertous.addEventListener("click", function () {
        const gallery = document.getElementById("gallery")
        gallery.innerHTML = ""
        init()
        buttonfiltertous.classList.add("filter")
        buttonfiltertous.classList.remove("filteroff")
        buttonclass.forEach(element => {
            element.classList.add("filteroff")
            element.classList.remove("filter")
        })
    }
    )
}



displaycategories()


async function init() {
    const data2 = await getworks()
    let j = data2.length

    for (let c = 0; c < j; c++) {
        displaywork(data2[c])
    }
}

init()


async function initmodal() {
    const data = await getworks()
    console.log(data)
    let j = data.length
    
    
    for (let c = 0; c < j; c++) {
        
        const data2= data[c].imageUrl
    const photomodal = document.getElementById("photomodal")
    photomodal.classList.add("modal--window__containerproject")
    const imagediv = document.createElement("figure")
    imagediv.classList.add("modal--window__img")
    const image = document.createElement("img")
    const trashcontainer = document.createElement("div")
    trashcontainer.classList.add("modal--window__trashiconcontainer")
    image.classList.add("modal--window__img2")
    const trashicon = document.createElement("svg")
    trashicon.innerHTML = '<svg class="modal--window__trashicon"  id="trashicon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>'
    trashicon.classList.add("modal--window__trashicon")
    image.src = data2
    trashcontainer.appendChild(trashicon)
    imagediv.appendChild(trashcontainer)
    imagediv.appendChild(image)
    photomodal.appendChild(imagediv)
    }

   
}
    


initmodal()

const dialog = document.querySelector("dialog");
const showButton = document.getElementById("dialogopen");
const closeButton = document.getElementById("dialogclose");
showButton.addEventListener("click", () => {
    dialog.showModal()})
closeButton.addEventListener("click", () => {
        dialog.close()})
