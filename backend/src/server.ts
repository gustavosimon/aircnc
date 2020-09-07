import routes from "./routes";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import path from "path";

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0.0uosr.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());

app.use(express.json());

app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);
