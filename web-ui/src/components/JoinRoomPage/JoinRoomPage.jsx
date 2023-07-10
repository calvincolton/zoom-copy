import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Card, Form, Button } from 'react-bootstrap'

import { setAudioOnly, getRoomExists, setIdentity } from "../../store/configuration";

const JoinRoomPage = () => {
  const [roomID, setRoomID] = useState('')
  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { audioOnly } = useSelector(state => state.configuration)

  const handleSubmit = async e => {
    e.preventDefault();

    if (!roomID) {
      setErrorMessage('Please enter a room ID')
      return
    }

    const res = await dispatch(getRoomExists(roomID))
    console.log(res)

    if (res?.error) {
      setErrorMessage(res.error.message)
    } else {
      const { roomExists, full } = res;
      if (full) {
        setErrorMessage('Meeting is full, please try again later.')
      } else {
        dispatch(setRoomID(roomID))
        dispatch(setIdentity(name))
        // navigate(`/rooms/${roomID}`)
      }
    }
  }

  const handleOnRoomIDChange = e => {
    setErrorMessage('')
    setRoomID(e.target.value)
  }

  const handleOnNameChange = e => {
    setErrorMessage('')
    setName(e.target.value)
  }

  const handleCheckboxOnChange = e => {
    dispatch(setAudioOnly(!audioOnly))
  }

  const handleOnClick = e => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <Card className='m-auto my-4 p-4'>
      <div className="mx-auto w-auto">
        <Form onSubmit={handleSubmit}>
          <h1 className="mb-3">Join a Meeting</h1>
          <Form.Control
            className="mb-3"
            value={roomID}
            onChange={handleOnRoomIDChange}
            placeholder="Enter meeting ID"
          />
          <Form.Control
            className="mb-3"
            placeholder="Enter your name"
            value={name}
            onChange={handleOnNameChange}
          />
          <Form.Check
            type="checkbox"
            className="mb-3"
            value={audioOnly}
            onChange={handleCheckboxOnChange}
            label="Audio only"
          />
          <div className="d-flex justify-content-between">
            <Button type="button" variant="light" onClick={handleOnClick}>Back</Button>
            <Button type="submit" onClick={handleSubmit}>Join Room</Button>
          </div>
          {errorMessage && <p className="mt-4 mb-0 text-center text-danger">{errorMessage}</p>}
        </Form>
      </div>
    </Card>
  );
};

export default JoinRoomPage;
