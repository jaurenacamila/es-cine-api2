import { Funcion } from "../models/index.js";

class FuncionController {

    constructor() { }

    traerTodasLasFunciones = async (req, res, next) => {
        try {
            const result = await Funcion.findAll({
                attributes: ['idFuncion', "sala", "horario", "idPelicula"]
            });

            if (result.length == 0) {
                const error = new Error("no hay Funciones cargadas");
                error.status = 400
                throw error
            }

            res
                .status(200)
                .send({ success: true, message: "Funciones:", result })

        } catch (error) {
            next(error)
        }
    };

    traerFuncionesDeUnaSala = async (req, res, next) => {
        try {
            const { sala } = req.params;

            const result = await Funcion.findAll({
                attributes: ['idFuncion', "sala", "horario", "idPelicula"],
                where: {
                    sala
                },
            });

            if (result.length == 0) {
                const error = new Error("no hay Funciones cargadas para sala " + sala);
                error.status = 400
                throw error
            }

            res
                .status(200)
                .send({ success: true, message: "Funciones de Sala: " + sala, result })

        } catch (error) {
            next(error)
        }
    };

    traerFuncionesDeUnHorario = async (req, res, next) => {
        try {
            const { horario } = req.params;

            const result = await Funcion.findAll({
                attributes: ['idFuncion', "sala", "horario", "idPelicula"],
                where: {
                    horario
                },
            });

            if (result.length == 0) {
                const error = new Error("No Funciones Programadas en el horario " + horario);
                error.status = 400
                throw error
            }

            res
                .status(200)
                .send({ success: true, message: "Funciones en horario " + horario + ":", result })

        } catch (error) {
            next(error)
        }
    };

    traerFuncionesDeUnaPelicula = async (req, res, next) => {
        try {
            const { idPelicula } = req.params;

            const result = await Funcion.findAll({
                attributes: ['idFuncion', "sala", "horario", "idPelicula"],
                where: {
                    idPelicula
                },
            });

            if (result.length == 0) {
                const error = new Error("No Funciones Programadas para esa Pelicula ");
                error.status = 400
                throw error
            }

            res
                .status(200)
                .send({ success: true, message: "Funciones para la pelicula con ID " + idPelicula + ":", result })

        } catch (error) {
            next(error)
        }
    };

    crearFuncion = async (req, res, next) => {
        try {

            const { sala, horario, idPelicula } = req.body;
            console.log("DATOSD DE LA FUNCION ENTRANTES:", req.body)
            const result = await Funcion.create({
                sala,
                horario,
                idPelicula,
            });

            if (!result) {
                const error = new Error("Error al crear la Funcion");
                error.status = 400;
                throw error;
            } else {
                console.log("se creo la funicon")
            }

            res
                .status(200)
                .send({ success: true, message: "Funcion Creada Exitosamente", result });

        } catch (error) {
            next(error);
        }
    };

};

export default FuncionController;