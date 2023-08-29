const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4010;
const ChatRoute = require("./Routes/ChatRoute");
const MessageRoute = require("./Routes/MessageRoute");
const UserRoute = require("./Routes/UserRoute");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use("/chat", ChatRoute);
app.use("/message", MessageRoute);
app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`server started and running on port ${PORT}`);
});
