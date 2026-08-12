const cards = document.querySelectorAll(".profile-card");
const profileSlider = document.querySelector(".profile-slider");

let currentProfileSlide = 0;
let previous;
let next;

/* ===========================
    Profile Slider
=========================== */

function updateProfileSlider() {

    previous = currentProfileSlide - 1;
    next = currentProfileSlide + 1;

    if (previous < 0) {
        previous = cards.length - 1;
    }

    if (next >= cards.length) {
        next = 0;
    }

    cards.forEach((card, cardIndex) => {

        card.classList.remove("previous", "current", "next", "hidden");

        if (cardIndex === currentProfileSlide) {
            card.classList.add("current");
        }

        if (cardIndex === previous) {
            card.classList.add("previous");
        }

        if (cardIndex === next) {
            card.classList.add("next");
        }

        if (
            cardIndex !== currentProfileSlide &&
            cardIndex !== previous &&
            cardIndex !== next
        ) {
            card.classList.add("hidden");
        }

    });
}

// Next Button

function ProfileNextSlide() {

    if (currentProfileSlide === cards.length - 1) {
        currentProfileSlide = 0;
    } else {
        currentProfileSlide = currentProfileSlide + 1;
    }

    updateProfileSlider();
}

// Previous Button

function ProfilePreviousSlide() {

    if (currentProfileSlide === 0) {
        currentProfileSlide = cards.length - 1;
    } else {
        currentProfileSlide = currentProfileSlide - 1;
    }

    updateProfileSlider();
}

// Initial setup
updateProfileSlider();

// On-Click Profile Slider
cards.forEach((card, cardIndex) => {
    card.addEventListener("click", () => {
        if (cardIndex === previous) {
            currentProfileSlide = previous;
            updateProfileSlider();
        }

        if (cardIndex === next) {
            currentProfileSlide = next;
            updateProfileSlider();
        }
    });
});

/* ===========================
    Explore me Slider
=========================== */

const exploreSlider = document.querySelector(".explore-slider");

let exploreAutoSlide;

function startExploreAutoSlide() {
    if (exploreAutoSlide) return;
    exploreAutoSlide = setInterval(nextExploreSlide, 5000);
}

function stopExploreAutoSlide() {
    clearInterval(exploreAutoSlide);
    exploreAutoSlide = null;
}

startExploreAutoSlide();

// Start/Stop on Hover
exploreSlider.addEventListener("mouseenter", stopExploreAutoSlide);
exploreSlider.addEventListener("mouseleave", startExploreAutoSlide);

// Explore me Slider
const exploreCards = document.querySelectorAll(".explore-card");

let currentExploreSlide = 0;

function updateExploreSlider() {
    exploreCards.forEach((card, cardIndex) => {

        card.classList.remove("current", "previous", "next","hidden");

        if (cardIndex === currentExploreSlide) {
            card.classList.add("current");
        } else if (cardIndex === 
            (currentExploreSlide - 1 + exploreCards.length) % exploreCards.length) {
            card.classList.add("previous");
        } else if (cardIndex === 
            (currentExploreSlide + 1) % exploreCards.length) {
            card.classList.add("next");
        } else {
            card.classList.add("hidden");
        }
    });
}

function nextExploreSlide() {

    if (currentExploreSlide === exploreCards.length - 1) {
        currentExploreSlide = 0;
    } else {
        currentExploreSlide++;
    }

    updateExploreSlider();
}

function prevExploreSlide() {

    if (currentExploreSlide === 0) {
        currentExploreSlide = exploreCards.length - 1;
    } else {
        currentExploreSlide--;
    }

    updateExploreSlider();
}

updateExploreSlider();

// On-Click Exploreme Slider
exploreCards.forEach((card, cardIndex) => {

    card.addEventListener("click", () => {

        if (card.classList.contains("previous")) {
            currentExploreSlide--;

            if (currentExploreSlide < 0) {
                currentExploreSlide = exploreCards.length - 1;
            }

            updateExploreSlider();
        }

        if (card.classList.contains("next")) {
            currentExploreSlide++;

            if (currentExploreSlide >= exploreCards.length) {
                currentExploreSlide = 0;
            }

            updateExploreSlider();
        }

    });

});