document.getElementById("toggleButton").addEventListener("click", function() {
    var image = document.getElementById("mainImage");
    image.src = "omer2.jpg"; // Change to your other image

    // Play the first audio
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();

    // Create and display the "ÖMERLENDİN" message
    var omerlendinMessage = document.createElement("div");
    omerlendinMessage.id = "omerlendinMessage";
    omerlendinMessage.textContent = "ÖMERLENDİN!";
    omerlendinMessage.classList.add("message");
    document.body.appendChild(omerlendinMessage);

    // Show the second button
    var respectButton = document.getElementById("respectButton");
    respectButton.style.display = 'block';
    
    // Hide this button
    this.style.display = 'none';
});

// Handle the second button click
document.getElementById("respectButton").addEventListener("click", function() {
    // Display the two new images
    var leftImage = document.getElementById("leftImage");
    var rightImage = document.getElementById("rightImage");
    leftImage.src = "left-image.jpg"; // Change to your left image
    rightImage.src = "right-image.jpg"; // Change to your right image
    leftImage.style.display = 'block';
    rightImage.style.display = 'block';

    // Display the "SAYGI GÖSTERİLDİ" message
    var respectMessage = document.createElement("div");
    respectMessage.textContent = "SAYGI GÖSTERİLDİ";
    respectMessage.classList.add("message");
    document.body.appendChild(respectMessage);

    // Play the second audio
    var respectAudioPlayer = document.getElementById("respectAudioPlayer");
    respectAudioPlayer.play();

    // Remove the "ÖMERLENDİN" message
    var omerlendinMessage = document.getElementById("omerlendinMessage");
    if (omerlendinMessage) {
        omerlendinMessage.remove();
    }

    // Change the background image
    document.body.classList.add("background-image");

    // Hide the second button
    this.style.display = 'none';
});
