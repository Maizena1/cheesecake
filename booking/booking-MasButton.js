

const masButton = document.getElementById("mas-button")
const bookingContentContainer = document.getElementById("booking-content-container")

let estado = true;

masButton.addEventListener(("click"), () => {
    
    if (estado) {
        bookingContentContainer.classList.add("booking-content-container-function-on")
        bookingContentContainer.classList.remove("booking-content-container-function-off")
        estado = false;
        
    }else{
        bookingContentContainer.classList.add("booking-content-container-function-off")
        estado = true ;
    }
})