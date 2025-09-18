let homePointsEl = document.getElementById("home-count-el")

let homePoints = 0


function countHomePointsUpOne() {
    homePoints += 1
    homePointsEl.textContent = homePoints
}

function countHomePointsUpTwo() {
    homePoints += 2
    homePointsEl.textContent = homePoints
}

function countHomePointsUpThree() {
    homePoints += 3
    homePointsEl.textContent = homePoints
}


let guestPointsEl = document.getElementById("guest-count-el")

let guestPoints = 0

function countGuestPointsUpOne() {
    guestPoints += 1
    guestPointsEl.textContent = guestPoints
}

function countGuestPointsUpTwo() {
    guestPoints += 2
    guestPointsEl.textContent = guestPoints
}

function countGuestPointsUpThree() {
    guestPoints += 3
    guestPointsEl.textContent = guestPoints
}
