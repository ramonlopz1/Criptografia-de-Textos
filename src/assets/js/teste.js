const cryptoMSG = ["ai", "enter", "imes", "ober", "ufat"]

for (let [index, value] of cryptoMSG) {
    console.log(index, value)
    
}


//   /^[a-z ,.!?;:()]+$/g.test

let input = "ramonA";

// Look for "Hello"




let allowedCharacters = /^[a-z]+$/g

let result1 = allowedCharacters.test(input)

if(input.match(allowedCharacters)) {
    console.log('apenas letras minusculas')
} else {
    console.log('outros caracteres')
}


console.log(result1)
