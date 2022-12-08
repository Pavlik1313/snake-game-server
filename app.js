import express from 'express';
import cors from 'cors'
import recordsRouter from "./routers/recordsRouter.js";

const PORT = process.env.PORT || 3030;
const app = express();

const start = () => {
    app.use(express.json());

    app.use(cors({origin:'*'}));
    app.use((req, res, next)=>{
        console.log(`${req.method} on ${req.url}`);
        next();
    })
    app.use(recordsRouter);
    app.listen(PORT, () => {
        console.log(`Server started. http://localhost:${PORT}`)
    })
}

start();