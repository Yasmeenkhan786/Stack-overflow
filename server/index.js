import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import questionRoutes from "./routes/Questions.js";
import userRoutes from "./routes/users.js";
import answerRoutes from "./routes/Answers.js";

const app = express();
dotenv.config();
app.use(cors( {
origin : "https://stackoverflow-clone-yasmeen.netlify.app",
credentials :false
}));
app.use(function (req, res,next){
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type , Accept");
next();
})

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API yess");
});

const PORT = process.env.PORT;

const DATABASE_URL = process.env.CONNECTION_URL;
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
      console.log("Done");
    })
  )
  .catch((err) => console.log(err));
app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
