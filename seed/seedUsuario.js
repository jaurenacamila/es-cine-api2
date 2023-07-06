import { Usuario } from "../models/index.js";


const seedUsuario = async () => {
    try {

        await Usuario.bulkCreate([
            {
                nombre : 'admin',
                apellido : 'admin',
                email: 'admin@admin.com',
                contraseña: '1234',
                idRol: 1
            },
            
        ]);

    } catch (error) {
        console.log(error.message);
    }
};

export default seedUsuario;