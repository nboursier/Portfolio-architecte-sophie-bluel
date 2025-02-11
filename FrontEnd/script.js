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
        })
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
    })
}

displaycategories()

async function initmodal(tokeni) {
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
    const trashcontainer = document.createElement("button")
    trashcontainer.classList.add("modal--window__trashiconcontainer")
    image.classList.add("modal--window__img2")
    trashcontainer.addEventListener("click",async () => {
        console.log(data[c].id)
        const response = await fetch(`http://localhost:5678/api/works/${data[c].id}`,{
            method: "DELETE",
            headers :{
                'Authorization': 'Berear '+ tokeni                 
            }, 
            })
            console.log(response)
if (response.status !== 204 ){
    alert("erreur")
 }
 else{
    
    dialog.close()
    window.open('./index.html')
 }
    })
    const trashicon = document.createElement("svg")
    trashicon.innerHTML = '<svg class="modal--window__trashicon"  id="trashicon"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z"/></svg>'
    trashicon.classList.add("modal--window__trashicon")
    image.src = data2
    trashcontainer.appendChild(trashicon)
    imagediv.appendChild(trashcontainer)
    imagediv.appendChild(image)
    photomodal.appendChild(imagediv)
 
    }   
    const modalbutton = document.getElementById("modalbutton");
   const dialog2 = document.getElementById("modal2");
   const closeButton2 = document.getElementById("dialogclose2");
   modalbutton.addEventListener("click", () => {
    dialog2.showModal()})
    closeButton2.addEventListener("click", () => {
        dialog2.close()})
    const dialogarrowleft = document.getElementById("dialogarrowleft")
    dialogarrowleft.addEventListener("click",() => {
        dialog2.close()
        dialog.showModal()
    })
}
    
function  displayimage(){
    const modal2buttoninputfile = document.getElementById("modal2buttoninputfile");
    const modal2inputfile = document.getElementById("modal2inputfile");
    modal2buttoninputfile.addEventListener("click", () => {
        modal2inputfile.click()
        console.log(modal2inputfile.files[0])    
    })
    const inputPhoto = document.getElementById('modal2inputfile');   
   inputPhoto.addEventListener("change", function(event) {
    event.preventDefault()
    const modalwindowcontainerphotoicon = document.getElementById('modalwindowcontainerphotoicon')
   modalwindowcontainerphotoicon.classList.add("modal--window__container__photo__icon-none")
   const modalwindowcontainerphotobutton = document.getElementById('modal2buttoninputfile')
   modalwindowcontainerphotobutton.classList.add("modal--window__containerphotobuttoninput")
   const modalwindowcontainerphototxt = document.getElementById('modalwindowcontainerphototxt')
   modalwindowcontainerphototxt.classList.add("modal--window__container__photo__txt-none")
   const image = document.getElementById('image');
    image.classList.add("modal--window__container__photo__preview")
    image.classList.remove("modal--window__container__photo__preview-none")
    const modal2button2 = document.getElementById("modalbutton2");
    modal2button2.classList.remove("modal--buttongrey")
    modal2button2.classList.add("modal--button")
    const file = event.target.files[0];
    console.log(file)
    const filename = file.name.split(".")
    const extensionaccepted =[ "jpeg","jpg", "png"]
    if (extensionaccepted.includes(filename[filename.length-1])){
    const reader = new FileReader();
   
    reader.onload = function(e) {
       image.src = e.target.result;
    
    };

    reader.readAsDataURL(file);
}
  }) 
}

function submitimage() {
const formmodal2button= document.getElementById('modalbutton2');
formmodal2button.addEventListener("click", async (event) => {
    event.preventDefault()
const inputphoto = document.getElementById('modal2inputfile')
const file = inputphoto.files[0]
console.log(file)
const title = document.getElementById('title')
const category = document.getElementById('category')
console.log(title.value)
console.log(category.value)
const formdata = new FormData()
formdata.append("image",file )
formdata.append("title",title.value)
formdata.append("category",category.value)
console.log(formdata)
const token = localStorage.getItem("Auth")
const response = await fetch("http://localhost:5678/api/works", {
    method: 'POST',
    headers: {        
        'Authorization': `Bearer ${token}`
    },
    body: formdata
    }
    )
console.log(response)
if (response.status !== 201 ){
    alert("erreur")
 }
 else{
    

    window.open('./index.html')
 }
}
) 
}

const dialog = document.querySelector("dialog");
const showButton = document.getElementById("dialogopen");
const closeButton = document.getElementById("dialogclose");
showButton.addEventListener("click", () => {
    dialog.showModal()})
closeButton.addEventListener("click", () => {
        dialog.close()})


 async function init() {
            const data2 = await getworks()
            let j = data2.length        
            for (let c = 0; c < j; c++) {
                displaywork(data2[c])
            }
        const tokeni= localStorage.getItem('Auth')
        console.log( tokeni)        
            if (tokeni ) {
                const headerlog = document.getElementById("headerlog")
                headerlog.classList.add("connected");                
                console.log( headerlog)
                const dialogopen = document.getElementById("dialogopen")
                const iconmodif = document.createElement('svg')
                iconmodif.innerHTML = '<svg   xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#5f6368"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>'
                iconmodif.classList.add("projet--svg")
                const txtmodif = document.createElement('div')
                txtmodif.innerHTML ='modifier'
                txtmodif.classList.add("projet--text")
                dialogopen.appendChild(iconmodif)
                dialogopen.appendChild(txtmodif)
                dialogopen.classList.add("projet--modif")
                dialogopen.classList.add("connected")
                const login = document.getElementById("login")
                login.innerHTML = 'logout'
                login.addEventListener("click", () =>{localStorage.removeItem('Auth')
                    link(index.html)
                })
                initmodal(tokeni)
                displayimage()
                submitimage()            
            } else {                
            }            
        }        
        init()