import express from "express";
import SessionController from "./controllers/SessionController";
import SpotController from "./controllers/SpotController";

const routes = express.Router();

const sessionController = new SessionController();
const spotsController = new SpotController();

routes.post("/sessions", sessionController.store);
routes.post("/spots", spotsController.store);

export default routes;
