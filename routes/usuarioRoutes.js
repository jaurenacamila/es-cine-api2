import { Router } from "express";

import UsuarioController from "../controller/UsuarioController.js";
import ReservaController from "../controller/ReservaController.js";
import validateAccess from "../middleware/validateAccess.js";

const usuarioController = new UsuarioController()
const reservaController = new ReservaController()


const usuarioRoutes = Router();

usuarioRoutes.get("/me", validateAccess, usuarioController.me)

usuarioRoutes.get("/:idUsuario", usuarioController.traerUsuarioPorId)

usuarioRoutes.get("/", validateAccess, usuarioController.traerTodosLosUsuarios)

usuarioRoutes.post("/login", usuarioController.login)

usuarioRoutes.post("/", usuarioController.crearUsuario)

usuarioRoutes.put("/:idUsuario", usuarioController.modificarUsuario)

usuarioRoutes.delete("/", usuarioController.delete)

usuarioRoutes.get("/:idUsuario/reserva",reservaController.trearReservaDeUsuario)

usuarioRoutes.post("/:idUsuario/reserva", reservaController.crearReserva)


usuarioRoutes.use(validateAccess);

usuarioRoutes.post("/logout", usuarioController.logout);


export default usuarioRoutes