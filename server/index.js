const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const connectToMongo = require('./db');
const userRoutes = require("./routes/userRoutes")
const messagesRoute = require("./routes/messagesRoute")
const socket = require("socket.io");

const app = express();
require("dotenv").config();

//used to relax the security applied to api
app.use(cors());
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/messages", messagesRoute);

// harry method
// connectToMongo();

// kishan sheth
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

//   harry tarika
//   app.listen(() => {
//     console.log(`chat-app backend listening at http://localhost:5000`)
//   })

const server = app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);

const io = socket(server, {
  cors:{
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();

io.on("connection",(socket)=>{
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if(sendUserSocket){
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});
