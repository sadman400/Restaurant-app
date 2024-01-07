import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { dbConnection } from "./database/dbCollection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/ReservationRoute.js';

const app = express();
dotenv.config({
    path: "./config/.env"
})

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json({
    limit: "16kb"
}));

app.use(express.urlencoded({
    extended: true
}))

// using routes 
app.use('/api/v1/reservation', reservationRouter);

// database connection 
dbConnection()


// using error 
app.use(errorMiddleware)

export default app;