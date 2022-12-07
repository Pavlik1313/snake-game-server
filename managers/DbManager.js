import pg from 'pg';
import configDB from "../db/configDB.js";

const {Pool} = pg;
const db = new Pool(configDB);

export default {
    addGame: async (name, score) => {
       await db.query(`INSERT INTO games (username, score) VALUES ('${name}', '${score}')`);
    },
    getBestScoreByName: async (name) => {
        const result = await db.query(`SELECT username as name, MAX (score) as score FROM games WHERE username = '${name}' GROUP BY username `)
        return result.rows[0]
    },
    getLeaders: async () => {
        const result = await db.query(`SELECT username as name, MAX (score) as score FROM games GROUP BY username ORDER BY MAX (score) desc LIMIT 1000`)
        return result.rows
    }
}