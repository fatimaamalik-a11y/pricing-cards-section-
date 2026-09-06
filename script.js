// ================= PRICING BUTTONS =================

// Select all pricing buttons
const planButtons = document.querySelectorAll(".plan-button");


// Add click event to every button
planButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get selected plan
        const selectedPlan = button.getAttribute("data-plan");

        // Show confirmation message
        alert(
            "You selected the " +
            selectedPlan +
            " plan. Thank you for choosing us!"
        );

    });

});


// ================= CARD HOVER EFFECT =================

const pricingCards = document.querySelectorAll(".pricing-card");

pricingCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transition = "0.3s ease";

    });

});


// ================= CURRENT YEAR =================

// Automatically update copyright year

const currentYear = new Date().getFullYear();

console.log("Current Year: " + currentYear);