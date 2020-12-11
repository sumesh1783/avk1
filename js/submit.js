document.getElementById("contactForm").addEventListener("submit", (e)=> {
    e.preventDefault();
    document.getElementById("submit").value = "Sending Message";
    document.getElementById("submit").disabled = true;
    Email.send({
        SecureToken : "5e2d13d2-33db-4616-b301-30cf0122fe21",
        To : 'sumeshkukku1783@gmail.com',
        From : "service.avkfuturistics@gmail.com",
        Subject : "This is the subject",
        Body :` <b>Name</b> : ${document.getElementById("cName").value} <br>
                <b>Email</b> : ${document.getElementById("cEmail").value} <br>
                <b>Message</b> : ${document.getElementById("cMessage").value}`
    }).then( () => {
        document.getElementById("submit-alert-div").style.display = "block";
        document.getElementById("contactForm").reset();
        document.getElementById("submit").value = "Send Message";
        document.getElementById("submit").disabled = false;
        setTimeout(function(){
            document.getElementById("submit-alert-div").style.display = "none";
        }, 5000);
    });
    
});


 