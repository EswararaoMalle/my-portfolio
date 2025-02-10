function SendMail(){
    var parms ={
        from_name:document.getElementById("fullname").value,
        email_id:document.getElementById("email_id").value,
       
        message:document.getElementById("message").value,

    }
    emailjs.send("service_wuadg1j","template_7tlr8jx",parms).then(function(res){
        alert("Success! " + res.status);
    })
}
