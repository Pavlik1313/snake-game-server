import express from "express";
import recordsController from "../controllers/RecordsController.js";

const recordsRouter = express.Router();

recordsRouter.post('/add', recordsController.newGame)
             .get('/records', recordsController.getLeaders)
             .get('/records/:name', recordsController.getBestScoreByName)

export default recordsRouter;