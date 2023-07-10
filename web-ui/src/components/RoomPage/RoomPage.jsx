import { useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap'

import Participants from "./Participants";
import VideoDisplay from "./VideoDisplay";
import Chat from "./Chat";

const RoomPage = () => {

  return (
    <div className="room-page">
      <Row>
        <Col xs={3} className="mt-4">
          <Participants />
        </Col>
        <Col xs={6}>
          <VideoDisplay />
          
        </Col>
        <Col xs={3}>
          <Chat />
        </Col>
      </Row>
    </div>
  );
};

export default RoomPage;
