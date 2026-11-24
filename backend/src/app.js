import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API Corriendo correctamente by Marlon Casagallo"
    });
});

app.use("/api/auth", authRoutes);

app.use((req, res) => {
    res.status(404).json({
        mensaje: "ruta no encontrada"
    })
})

app.use(errorMiddleware);

export default app;