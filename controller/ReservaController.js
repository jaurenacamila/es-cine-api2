import { Reserva, Asiento, Funcion } from "../models/index.js";

class ReservaController {

    constructor() { }

    trearReservaDeUsuario = async (req, res, next) => {
        try {
            const { idUsuario } = req.params;
            console.log('el ID DE USUARIO LLEGA ok', idUsuario)
            const result = await Reserva.findAll({
                attributes: ["idReserva", "idUsuario", "asientos"],
                include: [
                    {
                        model: Funcion,
                        attributes: ['Horario', 'sala', 'idPelicula'],
                    },
                ],
                where: {
                    idUsuario
                },
            });

            if (result.length == 0) {
                const error = new Error(`El Usuario ${idUsuario} no tiene Reservas`);
                error.status = 400
                throw error
            }

            res
                .status(200)
                .send({ success: true, message: `Reservas del Usuario ${idUsuario}:`, result })

        } catch (error) {

            next(error);
        }

    };

    crearReserva = async (req, res, next) => {
        try {
          const { asientos, usuario, funcion } = req.body;
          console.log(req.body)
          console.log('data funcion', funcion)
          console.log('data asientos', asientos)
          console.log('data usuario', usuario)
          const reserva = await Reserva.create({
            idFuncion: parseInt(funcion),
            idUsuario: parseInt(usuario),
            asientos: asientos.toString()
          });
      
          if (!reserva) {
            const error = new Error("Error al crear Reserva");
            error.status = 400;
            throw error;
          }
      
          // Asignar los asientos a la reserva en la tabla intermedia ReservaAsiento
          await reserva.addAsientos(asientos);
      
          res.status(200).send({ success: true, message: "Reserva Creada Exitosamente", reserva });
        } catch (error) {
          next(error);
        }
      };

      getReservas = async (req, res, next) => {
        try {
            const result = await Reserva.findAll({
                attributes: ["idReserva", "idFuncion", "idUsuario", "asientos"],
                /* include: [
                    {
                        model: Rol,
                        attributes: ["rol"],
                    },
                ], */
            });

            if (result.length == 0) {
                const error = new Error("no hay reservas cargados aun");
                error.status = 400
                throw error
            }

            res
                .status(200)
                .send({ success: true, message: "reservas encontrados:", result })

        } catch (error) {
            next(error)
        }
    };


}


export default ReservaController