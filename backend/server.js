import "dotenv/config"

import app from "./src/app"
import conectarDB from "./src/config/database"

const PORT = process.env.PORT

const iniciarServidor = async () => {

    try {

        await conectarDB()
        app.listen(port, () => {
            console.log(`Servidor iniciado en http://${PORT}`);
        });

    } catch (error) {
        console.error("Error al iniciar servidor: ", error.message)
        process.exit(1)
    }


}

iniciarServidor()

