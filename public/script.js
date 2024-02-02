
let button = document.getElementById("sub").addEventListener("click", myFunction);
//let Delete = document.getElementById("button").addEventListener("click", buttonFunction);

function myFunction(params) {
    let nameInput = document.getElementById("name").value;
    let ageInput = document.getElementById("age").value;
    let EmailInput = document.getElementById("email").value;

    fetch("/addName", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
        body:JSON.stringify({name : nameInput, age : ageInput, email : EmailInput} )
    });
}



