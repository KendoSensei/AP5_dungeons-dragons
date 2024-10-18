import express, { Application } from "express";
import morgan from "morgan";
import { router } from "./character-router";

const application: Application = express();

application.use(morgan("tiny"));

application.use("/", router);

application.listen(3000, () => console.log("c'est good !"));
