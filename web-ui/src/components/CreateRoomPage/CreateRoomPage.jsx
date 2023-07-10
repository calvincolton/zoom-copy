import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Form, Button } from "react-bootstrap";

import { setIsRoomHost, setAudioOnly } from "../../store/configuration";

const CreateRoomPage = () => {
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { audioOnly } = useSelector((state) => state.configuration);

  useEffect(() => {
    dispatch(setIsRoomHost(true));
  }, [setIsRoomHost, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // navigate(`/rooms/${roomID}`)
  };

  const handleOnNameChange = (e) => {
    setErrorMessage("");
    setName(e.target.value);
  };

  const handleCheckboxOnChange = (e) => {
    dispatch(setAudioOnly(!audioOnly));
  };

  const handleBackOnClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <Card className="m-auto my-4 p-4">
      <div className="mx-auto w-auto">
        <h1 className="mb-3">Host a Meeting</h1>
        <Form onSubmit={handleSubmit}>
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
            <Button type="button" variant="light" onClick={handleBackOnClick}>
              Back
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Host Room
            </Button>
          </div>
          {errorMessage && (
            <p className="mt-4 mb-0 text-center text-danger">{errorMessage}</p>
          )}
        </Form>
      </div>
    </Card>
  );
};

export default CreateRoomPage;
