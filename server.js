import express from "express";
import {routes} from "./routes.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

mongoose.connect("mongodb+srv://WrsDeveloper:1234@omnistack9.bru91.mongodb.net/ReactAvancado", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3001)