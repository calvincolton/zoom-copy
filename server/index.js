const express = require("express");
const http = require("http");
const { v4: uuidv4 } = require("uuid");
const cors = requrie("cors");
const twilio = require("twilio");

const PORT = process.env.PORT || 5174;

const app = express();

const server = http.createServer(app);

app.use(cors());

const io = require("socket.io")(server, {
  corse: {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  },
});

const connectedUsers = [];
const rooms = [];

app.get(`/api/v1/rooms/${roomID}/exists`, (req, res) => {
  const { roomID } = req.params;
  const room = rooms.find((room) => room.id === roomID);

  if (room) {
    // res.send({ roomExists: true }).status(200);
    if (room.connectedUsers.length > 3) {
      return res.send({ roomExists: true, full: true });
      // return res.send({ roomExists: true, full: true }).status(409);
    } else {
      return res.send({ roomExists: true, full: false }).status(200);
    }
  } else {
    return res.send({ roomExists: false }).status(404);
  }
});

server.listen(PORT, () => {
  console.log("Server is listening on port:", PORT);
});
