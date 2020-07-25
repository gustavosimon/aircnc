import express from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import SessionController from "./controllers/SessionController";
import SpotController from "./controllers/SpotController";
import DashboardController from "./controllers/DashboardController";
import BookingController from "./controllers/BookingController";

const routes = express.Router();
const upload = multer(uploadConfig);

const sessionController = new SessionController();
const spotsController = new SpotController();
const dashboardController = new DashboardController();
const bookingController = new BookingController();

routes.post("/sessions", sessionController.store);

routes.post("/spots", upload.single("thumbnail"), spotsController.store);
routes.get("/spots", spotsController.index);

routes.get("/dashboard", dashboardController.show);

routes.post("/spots/:spot_id/bookings", bookingController.store);

export default routes;
