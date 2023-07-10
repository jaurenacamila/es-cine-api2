import { Pelicula } from "../models/index.js";

class PeliculaController {

    constructor() { }

    traerTodasLasPeliculas = async (req, res, next) => {
        try {
            const result = await Pelicula.findAll({
                attributes: ["idPelicula"]
            });

            if (result.length == 0) {
                const error = new Error("No hay peliculas cargadas");
                error.status = 400
                throw error
            }

            res
                .status(200)
                .send({ success: true, message: "id de peliculas:", result })

        } catch (error) {
            next(error)
        }
    };

    agregarPelicula = async (req, res, next) => {
        try {
            const { id } = req.body;
            console.log('recibi la peliiii el ID ES: ', id)
            // Verificar si la película ya existe en la base de datos
            const peliculaExistente = await Pelicula.findOne({
                where: {
                    idPelicula: id
                }
            });

            if (peliculaExistente) {
                const error = new Error("La película ya existe en la base de datos");
                error.status = 400;
                throw error;
            }

            // Crear la película en la base de datos
            const nuevaPelicula = await Pelicula.create({
                idPelicula: id
                // Agrega aquí los demás campos de la película que desees almacenar
            });

            res.status(200).send({ success: true, message: "Película agregada correctamente" });
        } catch (error) {
            next(error);
        }
    };
};

export default PeliculaController;