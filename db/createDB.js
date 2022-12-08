import pg from 'pg'
import configDB from "./configDB.js";
const {Pool} = pg;
const pool = new Pool({
    user: configDB.user,
    password: configDB.password,
    host: configDB.host,
    port: configDB.port,
    max: 50,
    min: 0,
    idle: 20000,
    acquire: 20000
})
const createDB = async () => {
    await pool.query(`DROP DATABASE IF EXISTS ${configDB.database}`);
    await pool.query(`CREATE DATABASE ${configDB.database}`);
    const db = new Pool(configDB);
    await db.query(`
        CREATE TABLE games 
        (
            id SERIAL PRIMARY KEY,
            username CHARACTER VARYING(255), 
            score INTEGER
        );`)
    }
createDB()