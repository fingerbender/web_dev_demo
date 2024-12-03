
const contactForm = document.getElementById("contactform");
contactForm.addEventListener('submit', validate);



function validate(event){
    //console.log(event);
    event.preventDefault();

    //get user input
    const feedbackBox = document.getElementById("feedbackpanel");
    let namebox = document.getElementById("namebox").value; 
    namebox = namebox.charAt(0).toUpperCase() + namebox.slice(1);
    const emailbox = document.getElementById("emailbox").value;
    const msgbox = document.getElementById("msgbox").value;
    
    //console.log(namebox, typeof(namebox));
    //console.log(emailbox, typeof(emailbox));
    //console.log(msgbox, typeof(msgbox));

    //validation
    nameRegex = /^[a-z]{2,}$/i;
    emailRegex = /^[\w]+[\w\.\-\_\+\=\!\#\$\%\^\&\*\{\}\'\/\]*[\w]*[\@][\w\-]+[\.][a-z]{2,4}$/i;
    if(!nameRegex.test(namebox)){
        feedbackBox.innerText = "Name must be at least 2 letters long";
    }else if (!emailRegex.test(emailbox)){
        feedbackBox.innerText = "Invalid email format";
    }else if (msgbox.length < 5){
        feedbackBox.innerText = "That's a very short message";
    }else{ //passed validation
        const thankYouBox = document.getElementById("thankyoubox");
        thankYouBox.innerText=`Thank you, ${namebox}!  Your message is sent.`;
        const contactform = document.getElementById("contactform");
        contactform.replaceChildren("");
        contactform.style.height = "0";
    }

    
};