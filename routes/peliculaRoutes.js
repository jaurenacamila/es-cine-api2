import { Router } from "express";
import PeliculaController from "../controller/PeliculaController.js";

const peliculaController = new PeliculaController()

const peliculaRoutes = Router();

peliculaRoutes.get("/",peliculaController.traerTodasLasPeliculas);

peliculaRoutes.post("/",peliculaController.agregarPelicula);

export default peliculaRoutes;