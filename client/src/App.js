import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './elements/Homepage';
import Lobby from './elements/Lobby';
import Game from './elements/Game';
import io from 'socket.io-client';

const connectionOptions =  {
    "forceNew" : true,
    "reconnectionAttempts": "30", 
    "timeout" : 10000,                  
    "transports" : ["websocket"]
};

const ENDPOINT = (process.env.REACT_APP_SOCKET_HOST && process.env.REACT_APP_SOCKET_PORT ) ? 
  `http://${process.env.REACT_APP_SOCKET_HOST}:${process.env.REACT_APP_SOCKET_PORT}` : 
  'http://localhost:5000';
console.log(ENDPOINT);

const socket = io.connect(ENDPOINT, connectionOptions);

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage socket={socket}/>} />
        <Route path='/lobby' element={<Lobby socket={socket}/>} />
        <Route path='/game' element={<Game socket={socket}/>} />
      </Routes>
    </div>
  );
}

export default App;
