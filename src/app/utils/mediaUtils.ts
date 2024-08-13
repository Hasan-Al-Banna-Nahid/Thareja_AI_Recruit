export const checkMicrophone = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    // Process the stream or check for audio input
    stream.getTracks().forEach((track) => track.stop()); // Stop the stream
  } catch (err) {
    console.error("Error accessing microphone", err);
  }
};

export const checkCamera = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    // Process the stream or check for video input
    stream.getTracks().forEach((track) => track.stop()); // Stop the stream
  } catch (err) {
    console.error("Error accessing camera", err);
  }
};
