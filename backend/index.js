const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const express = require("express");
// var cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const mongoose = require("mongoose");
// const AuthRoutes = require("./routes/AuthRoutes");
// const TestRoutes = require("./routes/TestRoutes");
// const app = express();
// app.use(cors());
// const port = 5000;
// const conn_str =
//   "mongodb+srv://marcel:marcel@cluster0.tngtzq6.mongodb.net/?retryWrites=true&w=majority";

// //connenct to mongoDB atlas
// mongoose.connect(
//   conn_str,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) {
//       console.log("error in connection");
//     } else {
//       console.log("mongodb is connected");
//     }
//   }
// );

// // middleware
// app.use(express.json());
// app.use(helmet()), app.use(morgan("common"));
// app.use("/api/auth", AuthRoutes);
// app.use("/api/", TestRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.post("/login", (req, res) => {
//   console.log("req: ", req);
//   res.send("data received");
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
