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
        console.log('send request to DB')
        dbManager.getLeaders().then((result)=>{
            console.log(`get response from DB`);
            return res.send(result);
        })
        };


}


export default new RecordsController();