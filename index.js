
const contactForm = document.getElementById("contactform");
contactForm.addEventListener('submit', validate);
    console.log("here");


function validate(event){
    event.preventDefault();

    const feedbackBox = document.getAnimations("feedbackpanel");
    feedbackBox.innerText="wait";

    const thankYouBox = document.getElementById("thankyoubox");

    thankYouBox.innerText="Thank you.  Message sent.";

};