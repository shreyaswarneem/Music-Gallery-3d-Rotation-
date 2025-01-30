// Preloader: Hides after page loads
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        preloader.classList.add('hidden'); // Hides preloader
    }, 2000);
});

// Enable audio for mobile browsers
function enableAudio() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.muted = false; // Unmute all audio elements
    });
    alert("Audio enabled! Now click an album cover to play.");
}

// Play Audio Function (Fixes autoplay issues)
function playAudio(audioId) {
    const audioElement = document.getElementById(audioId);

    if (!audioElement) {
        console.error(`Audio element with ID ${audioId} not found.`);
        return;
    }

    // Pause all other audio elements before playing the new one
    document.querySelectorAll('audio').forEach(otherAudio => {
        if (otherAudio !== audioElement) {
            otherAudio.pause();
            otherAudio.currentTime = 0; // Reset to the beginning
        }
    });

    // Toggle Play/Pause for the selected audio
    if (audioElement.paused) {
        audioElement.play().catch(error => console.error("Playback error:", error));
    } else {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
}

// Stop Rotation Animation on Hover
const gallery = document.querySelector('.image-container');

if (gallery) {
    gallery.addEventListener('mouseenter', () => {
        gallery.style.animationPlayState = 'paused';
    });

    gallery.addEventListener('mouseleave', () => {
        gallery.style.animationPlayState = 'running';
    });
}
