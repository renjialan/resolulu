// JavaScript for the countdown timer
let intervalId;
let remainingTime = 0; // Initialize remaining time to 0 seconds

function startTimer(durationInSeconds) {
    clearInterval(intervalId);

    const timerDisplay = document.getElementById("timerDisplay");
    const endTime = new Date().getTime() + durationInSeconds * 1000;

    function updateTimer() {
        const currentTime = new Date().getTime();
        remainingTime = endTime - currentTime;

        if (remainingTime <= 0) {
            clearInterval(intervalId);
            timerDisplay.textContent = "00:00";
            alert("You have strengthened your resolution circuit!");
        } else {
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
            const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

            timerDisplay.textContent = formattedMinutes + ":" + formattedSeconds;
        }
    }

    updateTimer();
    intervalId = setInterval(updateTimer, 1000);
}

// JavaScript for adding and displaying quotes
const quoteInput = document.getElementById("quoteInput");
const addQuoteButton = document.getElementById("addQuote");
const quotesContainer = document.querySelector(".quotes");

addQuoteButton.addEventListener("click", () => {
    const quoteText = quoteInput.value.trim();
    if (quoteText !== "") {
        const quoteElement = document.createElement("p");
        quoteElement.textContent = quoteText;
        quotesContainer.appendChild(quoteElement);
        quoteInput.value = "";

        // Start the timer for 1 minute when the "Add Quote" button is clicked
        startTimer(60); // 60 seconds = 1 minute
    }
});
