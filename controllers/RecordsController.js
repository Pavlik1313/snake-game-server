import dbManager from "../managers/DbManager.js";
class RecordsController {
    async newGame (req, res){
        const {name, score} = req.body;
        await dbManager.addGame(name, Number(score));
        return res.sendStatus(200);
    }
    async getBestScoreByName (req, res){
        const name = req.params.name;
        return res.send(await dbManager.getBestScoreByName(name));
    }
    async getLeaders (req, res){
        return res.send(await dbManager.getLeaders());
    }
}


export default new RecordsController();