import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import { getParticipants } from "../../../store/configuration";

const Participants = () => {
  const dispatch = useDispatch();
  const { roomID, participants } = useSelector(state => state.configuration)

  useEffect(() => {
    const fetchParticpants = async () => {
      dispatch(getParticipants(roomID))
    }
    if (roomID) {
      fetchParticpants()
    }
  }, [roomID, dispatch, getParticipants])

  return (
    <div className="participants">
      <h5>Participants</h5>
      <ListGroup>
        {participants.map((p, idx) => (<ListGroupItem key={`${p}-${idx}`}>{p}</ListGroupItem>))}
      </ListGroup>
    </div>
  );
};

export default Participants;
