function sendMail(){
    let parms ={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,

    }
    emailjs.send("service_wuadg1j","template_t6394ov",parms).then(alert("Email sent!"))
}