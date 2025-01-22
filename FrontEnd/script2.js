

// login //

// "email": "sophie.bluel@test.tld" , "password" : "S0phie"

 
//   {"email": "sophie.bluel@test.tld" ,"password": "S0phie" }
// {
//     "email": "string",
//     "password": "string"
//   }


async function login() { 
    const formu = document.getElementById("form")    
    const fomrdata = new FormData(formu)
    const dataf = Object.fromEntries(fomrdata)


    let dataform = JSON.stringify(dataf)
    console.log(dataform)
    const response1 = await fetch("http://localhost:5678/api/users/login",{
        method: "POST",
        body:dataform,
        headers:{
            "Content-Type":"application/json"
        }
    });
    let datar = await response1.json()
    
    localStorage.setItem('Auth',datar)
    console.log(datar)
    
    return datar
    
    
    
     
}




form.addEventListener("submit", (event) => {
    let baliseEmail = document.getElementById("email")
    let email = baliseEmail.value

    let baliseMdp = document.getElementById("mdp")
    let mdp = baliseMdp.value
    console.log(email)
    console.log(mdp)
    let regex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$");
    let resultat = regex.test(email);
    if (email === "") {
        console.log('Le champ email est vide');
    } else {
        console.log('Le champ email est rempli');
    }

    if (resultat = true) {
        console.log('Le champ email est conforme');
    } else {
        console.log('Le champ email est non conforme');
    }
    event.preventDefault()
    
    login()

   
})

const tokeni= localStorage.getItem('Auth')

console.log( tokeni)

// 