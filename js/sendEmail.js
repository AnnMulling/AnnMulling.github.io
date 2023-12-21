 function sendEmail () {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_9idi6wb",
                 "template_0bplghj",
                 params).then(alert("Email was successfully sent"))
}
