import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import IntroPage from './IntroPage'
import JoinRoomPage from './JoinRoomPage';
import CreateRoomPage from './CreateRoomPage';
import RoomPage from './RoomPage'

const App = () => {
  return (
      <div className="app">
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path='/' element={<IntroPage />} />
              <Route path='/join-meeting' element={<JoinRoomPage />} />
              <Route path='/host-meeting' element={<CreateRoomPage />} />
              <Route path='/room' element={<RoomPage />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </div>
  )
}

export default App
