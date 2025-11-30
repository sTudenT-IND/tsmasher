// ------------------- FLASHCARD AUTO SWIPE -------------------

const flashcards = [
    "Welcome to TargetSmasher!",
    "Track your goals easily",
    "Stay consistent everyday",
    "Add tasks",
    "Measure your progress",
    "Compare your previous day performances with today's score card",
    "Smash your long-term targets!"
];

let index = 0;
const card = document.getElementById("flashcard");

// Set first card
card.textContent = flashcards[index];

function nextCard() {
    // 1️⃣ Swipe current card left
    card.classList.add("swipe-left");

    setTimeout(() => {
        // 2️⃣ Move instantly to right (off-screen)
        card.classList.remove("swipe-left");
        card.classList.add("reset");

        // Update text
        index = (index + 1) % flashcards.length;
        card.textContent = flashcards[index];
    }, 700);

    setTimeout(() => {
        // 3️⃣ Bring new card to center
        card.classList.remove("reset");
        card.classList.add("show");
    }, 720);
}

setInterval(nextCard, 3000);   // Auto-rotate every 3 seconds



// Smooth scroll for nav links
document.querySelectorAll('.nav-center a').forEach(a=>{
a.addEventListener('click', e=>{
e.preventDefault();
const id = a.getAttribute('href').slice(1);
document.getElementById(id).scrollIntoView({behavior:'smooth'});
})
});

//==================================================================================================
//different file and caalling it, html components
// fetch("navbar.html")
//    .then(response => response.text())
//    .then(data => {
//      document.getElementById("navbar-container").innerHTML = data;
//    });

//fancy image section
// Array of image file names
const images = [
    "https://cdn.dribbble.com/userupload/18039493/file/still-1cac34a25e5b465618e9b8c70dc3a41a.png?format=webp&resize=450x338&vertical=center",
    "https://cdn.dribbble.com/userupload/28140537/file/original-c62d26414fc277105d3418e25bb20a01.png?format=webp&resize=450x338&vertical=center",
    "https://cdn.dribbble.com/userupload/17482626/file/original-e134afc50a045c731686adcdf46f9b1b.png?format=webp&resize=450x338&vertical=center",
    "https://media.istockphoto.com/id/1341547247/photo/clipboard-with-green-check-marks-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=HBTxoGbyl5UEs_d1ZYte2jWvVYYcGwBnfzLocncwG7g=",
    "https://cdn.dribbble.com/userupload/12445306/file/original-07e0afce7299b68f69dbe5dbf344eb48.png?format=webp&resize=450x338&vertical=center",
    "https://cdn.dribbble.com/userupload/21810288/file/original-dfc7f0825dc0229971b3928612dc876f.png?format=webp&resize=450x338&vertical=center",
    "https://cdn.dribbble.com/userupload/31288014/file/original-581227a73969f80fc3db94918e92a20e.jpg?format=webp&resize=450x338&vertical=center",
    "https://cdn.dribbble.com/userupload/25514621/file/original-4aa1ec96760ed8d4bc6a95bb998a205f.png?format=webp&resize=450x338&vertical=center"
];

let currentIndex = 0;
const heroImg = document.getElementById("hero-image");


function changeImage() {
    currentIndex++;                         // move to next image
    if (currentIndex >= images.length) {    // loop back to first
        currentIndex = 0;
    }
    heroImg.src = images[currentIndex];     // update image source
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 4000);
