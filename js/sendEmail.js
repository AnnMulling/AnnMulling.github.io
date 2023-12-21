 function sendEmail (e) {
    e.preventDefault();
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }


    emailjs.send('service_9idi6wb', 'template_0bplghj', params)
    .then(function(response) {
        alert("Email was successfully sent")
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        alert("Failed to send")
        console.log('FAILED...', error);
    });

 };
