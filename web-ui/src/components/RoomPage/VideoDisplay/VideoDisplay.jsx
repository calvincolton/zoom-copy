import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  PiMicrophoneFill,
  PiMicrophoneSlashFill,
  PiVideoCameraBold,
  PiVideoCameraSlashBold
} from "react-icons/pi";
import { LuMonitor, LuMonitorOff } from "react-icons/lu";

const VideoDisplay = () => {
  const navigate = useNavigate();
  const [micMuted, setMicMuted] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [screenShared, setScreenShared] = useState(false);  

  const { roomID } = useSelector((state) => state.configuration);

  return (
    <div className="video-display vh-100 d-flex flex-column">
      <div className="mt-0 bg-primary text-light py-1 px-3 rounded-bottom text-center">
        ID: {roomID}
      </div>
      <div className="mt-4">
        Video content here
      </div>
      <div className="d-flex align-bottom mt-auto mb-3 justify-content-center">
        <Button className="me-2" onClick={() => setMicMuted(!micMuted)}>
          {micMuted ? <PiMicrophoneSlashFill /> : <PiMicrophoneFill />}
        </Button>
        <Button className="me-2" onClick={() => setVideoEnabled(!videoEnabled)}>
          {videoEnabled ? <PiVideoCameraBold /> : <PiVideoCameraSlashBold />}
        </Button>
        <Button variant="secondary" className="me-2" onClick={() => setScreenShared(!screenShared)}>
          {screenShared ? <><LuMonitorOff className="me-2" />Stop Sharing</> : <><LuMonitor className="me-2" />Share Screen</>}
        </Button>
        <Button
          variant="danger"
          className="me-2"
          onClick={() => navigate("/")}
        >
          Leave Room
        </Button>
      </div>
    </div>
  );
};

export default VideoDisplay;
