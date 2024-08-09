import CameraTest from "@/components/CameraTest/CameraTest";
import MicrophoneTest from "@/components/MicrophoneTest/MicrophoneTest";
import ScreenShare from "@/components/ScreenShare/ScreenShare";

const TestPage = () => (
  <div>
    <h1>Test Your Microphone and Camera</h1>
    <MicrophoneTest />
    <CameraTest />
    <ScreenShare />
  </div>
);

export default TestPage;
