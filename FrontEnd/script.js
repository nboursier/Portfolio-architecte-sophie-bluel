

async function getworks() {
const response =  await fetch("http://localhost:5678/api/works")
const data = await response.json();
console.log(data)
return data
}


async function getcategories() {
    const response =  await fetch("http://localhost:5678/api/categories")
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
    title.textContent=data3
    let image = document.createElement("img")
    image.src=data4
    
    
    const fig = document.createElement("figure")
    fig.appendChild(image)
    fig.appendChild(title)
    gallery.appendChild(fig)
    gallery.classList.add("gallery")
    

}

async function filterid1 () {
    
    const data2 = await getworks()
    const data2id1 = data2.filter(obj => obj.categoryId==1)
    console.log (data2id1)    
    let j= data2id1.length
    const gallery = document.getElementById("gallery")
gallery.innerHTML=""

for (let c=0; c<j;c++){
    displaywork(data2id1[c])
    }
    
}
    
async function filterid2 () {
    const data2 = await getworks()
    const data2id2 = data2.filter(obj => obj.categoryId==2)
    console.log (data2id2)    
    let j= data2id2.length
    let gallery = document.getElementById("gallery")
    gallery.innerHTML=""


    for (let c=0; c<j;c++){
    displaywork(data2id2[c])
    
        }
    }
    


async function filterid3 () {
    const data2 = await getworks()
    const data2id3 = data2.filter(obj => obj.categoryId==3)
    console.log (data2id3)
    let j= data2id3.length
    const gallery = document.getElementById("gallery")
gallery.innerHTML=""
    
    for (let c=0; c<j;c++){
        displaywork(data2id3[c])
    
    
        }    
    }
    
    
let butt1 = document.getElementById("but1")
let butt2 = document.getElementById("but2")
let butt3 = document.getElementById("but3")
let butt4 = document.getElementById("but4")

    
    async function button1() {
       
        init()
    }

    async function button2() {
       
        filterid1()
    }

    async function button3() {
        
        filterid2()
    }

    async function button4() {
        
        filterid3()
    }

    async function init () {
        const data2 = await getworks()
        let j= data2.length
        
        for (let c=0; c<j;c++){
            displaywork(data2[c])
        }

        const categories = await getcategories()
        console.log(categories)
        }

        init()
        