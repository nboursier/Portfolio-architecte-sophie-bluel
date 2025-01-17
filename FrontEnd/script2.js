

// login //



 
//   {"email": "sophie.bluel@test.tld" ,"password": "S0phie" }
// {
//     "email": "string",
//     "password": "string"
//   }

// const formu = document.getElementById("form")    
// const fomrdata = new FormData(formu)
// = Object.fromEntries(fomrdata)


async function login() { 
    console.log("salut")
    let dataform = JSON.stringify({
            "email": "sophie.bluel@test.tld" , "password" : "S0phie"
        })
    
    const response1 = await fetch("http://localhost:5678/api/users/login",{
        method: "POST",
        body:dataform
    });
    const data = await response1.json()
    console.log(data)
    return data
    
     
}

login()

// formu.addEventListener("submit", (event) => {
//     let baliseEmail = document.getElementById("email")
//     let email = baliseEmail.value

//     let baliseMdp = document.getElementById("password")
//     let mdp = baliseMdp.value
//     console.log(email)
//     console.log(mdp)
//     let regex = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+$");
//     let resultat = regex.test(email);
//     if (email === "") {
//         console.log('Le champ email est rempli');
//     } else {
//         console.log('Le champ email est vide');
//     }

//     if (resultat = true) {
//         console.log('Le champ email est conforme');
//     } else {
//         console.log('Le champ email est non conforme');
//     }
//     event.preventDefault()
//     console.log(data)
    
// })
