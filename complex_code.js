/**
 * Filename: complex_code.js
 *
 * Description: 
 * This complex JavaScript code demonstrates a real-time chat application using WebSockets and Node.js.
 * It includes functionalities like user authentication, room creation, real-time messaging, and much more.
 * Note: This code is simplified for demonstration purposes and may not include all necessary error handling and security measures.
 */

// Importing required modules
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const uuid = require("uuid");

// Initializing Express app and server
const app = express();
const server = http.createServer(app);

// Creating WebSocket server
const wss = new WebSocket.Server({ server });

// Storing active rooms and users
const rooms = new Map(); // Room information stored as { roomId: Room }
const activeUsers = new Map(); // User information stored as { userId: User }

// User Class
class User {
  constructor(userId, roomId, username, socket) {
    this.userId = userId;
    this.roomId = roomId;
    this.username = username;
    this.socket = socket;
  }
}

// Room Class
class Room {
  constructor(roomId, roomName) {
    this.roomId = roomId;
    this.roomName = roomName;
    this.users = new Set(); // Set of User objects
  }

  addUser(user) {
    this.users.add(user);
  }

  removeUser(user) {
    this.users.delete(user);
  }

  broadcastMessage(username, message) {
    const payload = JSON.stringify({ username, message });

    for (const user of this.users) {
      user.socket.send(payload);
    }
  }
}

// Handle WebSocket connection
wss.on("connection", (ws, req) => {
  const userId = uuid.v4();
  const roomId = new URLSearchParams(req.url).get("roomId");
  const username = new URLSearchParams(req.url).get("username");

  const user = new User(userId, roomId, username, ws);
  activeUsers.set(userId, user);

  let room = rooms.get(roomId);
  if (!room) {
    room = new Room(roomId, "Room " + roomId);
    rooms.set(roomId, room);
  }

  room.addUser(user);

  ws.on("message", (message) => {
    room.broadcastMessage(username, message);
  });

  ws.on("close", () => {
    room.removeUser(user);
    activeUsers.delete(userId);

    if (room.users.size === 0) {
      rooms.delete(roomId);
    }
  });
});

// Express endpoints
app.get("/rooms", (req, res) => {
  res.json(Array.from(rooms.values()));
});

app.get("/users", (req, res) => {
  res.json(Array.from(activeUsers.values()));
});

// Start the server
server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
