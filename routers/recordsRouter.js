import express from "express";
import recordsController from "../controllers/RecordsController.js";

const recordsRouter = express.Router();

recordsRouter.post('/add', recordsController.newGame)
             .get('/records', recordsController.getLeaders)
             .get('/records/:name', recordsController.getBestScoreByName)
             .get('/', (req, res) => res.send('working'))

export default recordsRouter;