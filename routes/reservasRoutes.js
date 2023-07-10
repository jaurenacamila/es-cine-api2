import { Router } from "express";
import ReservaController from "../controller/ReservaController.js";

const reservaController = new ReservaController()

const reservaRoutes = Router();

reservaRoutes.get("/", reservaController.getReservas);

export default reservaRoutes;