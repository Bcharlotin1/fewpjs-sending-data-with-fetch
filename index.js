// Add your code here
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    submitData();
});


let formData = {
    name: "Bruce",
    email:"bruce@gotham.com"
}

let configObj = {
    // method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
}

function submitData(name, email) {
    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(function(error) {
        const errorMessage = document.createElement("h2")
        errorMessage.innerHTML = `${error.message}`;
        console.log(error.message);

        document.querySelector("body").append(errorMessage)
        

    })
}