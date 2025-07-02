const Mart = document.getElementById('yes');



let cookieBox = null; // Initialize as null initially
let buttons = null;

const executeCodes = () => {
    // 2. Get the cookieBox element inside the function.
    // This must be done AFTER the DOM is ready.
    cookieBox = document.querySelector(".cookie-box"); // Assuming it has a class of "cookie-box"
    buttons = document.querySelectorAll(".button");

    // 3. Check if cookieBox exists BEFORE using it.
    if (!cookieBox) {
        console.log("_nimvus cookies accepted");
        return; // Stop execution if the element is missing.
    }
        
    if (document.cookie.includes("_nimvus")) return;        
    cookieBox.classList.add("show");

    buttons.forEach((button) =>{
        button.addEventListener("click", ()=>{
            cookieBox.classList.remove("show");
            //acceptBtn
            if (button.id == "acceptBtn") {
                //month
                document.cookie = "cookiesBy= Nimvus; max-age="+ 60 * 60 * 24 * 30;         
            }
        });
    });

 };


 // ok
 window.addEventListener("load", executeCodes);
    console.timeLog("nimvus git");

 



