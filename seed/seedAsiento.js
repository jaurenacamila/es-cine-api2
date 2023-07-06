import { Asiento } from "../models/index.js";


const seedAsiento = async () => {
    try {

        await Asiento.bulkCreate([
            {
                numeroAsiento: 1,
                sala: 'A',
                estado: false,
            },
            {
                numeroAsiento: 2,
                sala: 'A',
                estado: false,
            },
            {
                numeroAsiento: 3,
                sala: 'A',
                estado: false,
            },
            {
                numeroAsiento: 4,
                sala: 'A',
                estado: false,
            },
            {
                numeroAsiento: 5,
                sala: 'A',
                estado: false,
            },
            {
                numeroAsiento: 1,
                sala: 'B',
                estado: false,
            },
            {
                numeroAsiento: 2,
                sala: 'B',
                estado: false,
            },
            {
                numeroAsiento: 3,
                sala: 'B',
                estado: false,
            },
            {
                numeroAsiento: 4,
                sala: 'B',
                estado: false,
            },
            {
                numeroAsiento: 5,
                sala: 'B',
                estado: false,
            },
            {
                numeroAsiento: 1,
                sala: 'C',
                estado: false,
            },
            {
                numeroAsiento: 2,
                sala: 'C',
                estado: false,
            },
            {
                numeroAsiento: 3,
                sala: 'C',
                estado: false,
            },
            {
                numeroAsiento: 4,
                sala: 'C',
                estado: false,
            },
            {
                numeroAsiento: 5,
                sala: 'C',
                estado: false,
            },
        ]);

    } catch (error) {
        console.log(error.message);
    }
};

export default seedAsiento;