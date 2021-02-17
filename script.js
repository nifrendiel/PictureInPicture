// Constants and globales variables

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error
        console.log('whoops, error here: ', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button when clicked
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
})

// On load
selectMediaStream();