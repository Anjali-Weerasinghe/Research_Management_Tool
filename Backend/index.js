const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");
const cors = require("cors");
const conversationRoute = require("./Routes/conversations");
const messageRoute = require("./Routes/messages");

const router = express.Router();
const path = require("path");

dotenv.config();


const fileRoute = require('./Routes/file');
const submitRoute = require('./Routes/submit');

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}));
app.use(cookieParser());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(submitRoute);


const supervisorRouter = require("./Routes/supervisorDetail");
app.use("/supervisor", supervisorRouter);


const GroupRegisterRoutes = require("./routes/GroupRegisterRoutes");
app.use("/groupdetail", GroupRegisterRoutes)

const requestSupervisorRoutes = require("./routes/requestSupervisorRoutes");
app.use("/requestSupervisor", requestSupervisorRoutes)

const PanelMembersRoutes = require("./routes/PanelMemberRoutes")
app.use("/panelMembers", PanelMembersRoutes)


const coSupRequsetRouter = require("./Routes/coSupRequest");
app.use("/coSupRequset", coSupRequsetRouter);

const researchTopicRouter = require("./Routes/researchTopic");
app.use("/researchTopic", researchTopicRouter);

app.use("/user", require("./routes/userRoutes"));





const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
