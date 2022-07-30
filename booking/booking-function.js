const masButton = document.getElementById("mas-button")
const bookingContentContainer = document.getElementById("booking-content-container")

masButton.addEventListener(("click"), () => {
    bookingContentContainer.classList.add("booking-content-container-function")
})