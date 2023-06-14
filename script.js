console.log("hello")

var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault(); //prevent form submission(optional)

    //perform your desired action here
    console.log("Button clicked");
});

