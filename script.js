// Get the person's name from the URL
const name = "Magaleyy";

const personName = document.getElementById("personName");

// Show the name automatically
if (name && name.trim() !== "") {
    personName.textContent = name;
} else {
    personName.textContent = "Dear";
}


// Open the surprise
function openSurprise() {

    // Start birthday song
    const song = document.getElementById("birthdaySong");

    if (song) {
        song.play().catch(() => {
            console.log("Music could not start automatically.");
        });
    }

    // Go to the message page
    window.location.href = "message.html";
}