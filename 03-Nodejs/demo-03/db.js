import dotenv from 'dotenv';
import pg from 'pg';


dotenv.config();

const pgclient = new pg.Client(process.env.DATABASE_URL);

export default pgclient;