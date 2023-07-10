import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

import { setIsRoomHost } from "../../store/configuration";

const IntroPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setIsRoomHost(false))
  }, [setIsRoomHost, dispatch])

  return <div className="intro-page">
    <Card className='m-auto my-4 p-4'>
      <h1 className='mx-auto mb-4'>Zoom Copy</h1>
      <Button
        variant="light"
        onClick={() => navigate('/join-meeting')}
        className="mb-3 mx-auto"
      >
        Join a meeting
      </Button>
      <Button
        onClick={() => navigate('/host-meeting')}
        className='mx-auto'
      >
        Host a meeting
      </Button>
    </Card>
  </div>;
};

export default IntroPage;
