import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB conectado");
    }
    catch(error){
        console.error("Error al conectar a Mongo: ", error.message);
        throw error;
    }
};

export default conectarDB;