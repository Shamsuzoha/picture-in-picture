const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select a video

async function selectMediaStream(){
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({video: true});
        videoElement.srcObject = stream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.error('Error selecting media stream:', error);
    }
}

// Event listeners

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture mode
    await videoElement.requestPictureInPicture();
    // Enable button
    button.disabled = false;
})

// On load
selectMediaStream();