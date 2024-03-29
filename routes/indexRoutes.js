import { Router } from "express";

import usuarioRoutes from "./usuarioRoutes.js";
import funcionRoutes from "./funcionRoutes.js";
import salaRoutes from "./salaRoutes.js";
import peliculaRoutes from "./peliculaRoutes.js";
import reservasRoutes from "./reservasRoutes.js";

const indexRoutes =  Router()

indexRoutes.use("/usuario", usuarioRoutes)

indexRoutes.use("/funcion", funcionRoutes)

indexRoutes.use("/sala", salaRoutes)

indexRoutes.use("/pelicula", peliculaRoutes)

indexRoutes.use("/reservas", reservasRoutes)

export default indexRoutes