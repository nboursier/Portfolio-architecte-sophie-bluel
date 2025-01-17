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


