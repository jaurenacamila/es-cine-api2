import { Sala, Asiento } from "../models/index.js";

class SalaController {

  constructor() { }

  traerTodasLasSalas = async (req, res, next) => {
    try {
      const result = await Sala.findAll({
        attributes: ["sala", "capacidad"],
        include: {
          model: Asiento,
          attributes: ['numeroAsiento', 'idAsiento'],
        }

      });

      if (result.length == 0) {
        const error = new Error("no hay salas cargadas");
        error.status = 400
        throw error
      }

      res
        .status(200)
        .send({ success: true, message: "salas:", result })

    } catch (error) {
      next(error)
    }
  };

  traerSala = async (req, res, next) => {
    try {
      const { sala } = req.params;

      const result = await Sala.findOne({
        attributes: ["sala"],
        include: {
          model: Asiento,
          attributes: ['numeroAsiento', 'idAsiento', 'estado'],
        },
        where: {
          sala
        },

      });

      if (!result) {
        const error = new Error(`la sala '${sala}' no esta cargada`);
        error.status = 400
        throw error
      }

      res
        .status(200)
        .send({ success: true, message: "sala:", result })

    } catch (error) {
      next(error)
    }
  };

  crearSala = async (req, res, next) => {
    try {

      const { sala, capacidad } = req.body;


      //if (capacidad.length >= 3 || capacidad.length < 1) { ?????
      if (capacidad < 1 || capacidad >= 30) {
        console.log("dasds")
        const error = new Error("La capacidad tiene que ser menor a 30 y mayor a 0")
        error.status = 400;
        throw error;
      }

      const result = await Sala.create({ sala, capacidad })

      if (!result) {
        const error = new Error("Error");
        error.status = 400
        throw error
      }

      res
        .status(200)
        .send({ success: true, message: "Sala Creada Exitosamente", result });



      // estaria bueno crear automaticamente los asintos para las Salas, BulkCreate maybe


    } catch (error) {

      next(error);

    }
  }

  //cambia el estado de los asientos de la sala
    cambiarDisponibilidadAsientos = async (req, res, next) => {
        try {
            const { asientos, sala } = req.body;
            console.log('asinetooo',asientos) //array
            console.log('salaaaa',sala) //char
            // Actualizar la disponibilidad de los asientos en la sala

             asientos.forEach(async (asiento) => {
                await Asiento.update({ estado: true }, {
                    where: {
                    numeroAsiento: asiento,
                    sala: sala
                    }
                });
                });
        
            res.status(200).json({ message: 'Disponibilidad de asientos actualizada correctamente' });
          } catch (error) {
            next(error);
            console.log('error al actualizar asientos')
          }
    }

};

export default SalaController;