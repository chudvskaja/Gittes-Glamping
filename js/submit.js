document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const successDiv = document.querySelector('.success');

    const popUpMessage = {
        success: "Hej",
        failure: "User is allready exist",
};

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    successDiv.classList.add('shown');
    successDiv.appendChild(statusMessage);
    

    const nameSub = document.getElementById('name').value;
    console.log(nameSub);

    const emailSub = document.getElementById('email').value;
    console.log(emailSub);

    const messageSub = document.getElementById('message').value;
    console.log(messageSub);

    const subjectSub = document.getElementById('topic').value;
    console.log(subjectSub);


    if (subjectSub !== "booking" && subjectSub !== "question") {
        alert("Please select a valid subject: 'booking' or 'question'");
        return; 
    }

     const newSubscribe = {
        "name": nameSub,
        "email": emailSub,
        "message": messageSub,
        "subject": subjectSub,
    }
 

    fetch ("https://glamping.webmcdm.dk/contact", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(newSubscribe),
        })
        .then(  (response) => {
            if (!response.ok) {
                throw Error(statusMessage.innerHTML = 
        `<p class="error-text">Du har enten testet ugyldigt navn eller en e-mail, eller brugeren allerede er registreret</p>
        <a href="./membership.html" class="btn-success">Prøv igen</button>`);
            }
             return response;
        }).then (response => response.json())
        .then(() => {
            statusMessage.innerHTML = `
                <h2 class="success-title">Hej</h2> 
                <p class="accent-text">${newSubscribe.name},</p>
                <p class="success-text">Tak for din besked!</p>
                <p class="success-text">Du hører fra os snarest.</p>
                <a href="./index.html" class="btn-success">Tilbage</a>
            `;
        }) 
        .catch(function(error) {
            console.log(error);
        });
     
});
});

 