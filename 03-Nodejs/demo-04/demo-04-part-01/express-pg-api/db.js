// install postgresql
// install gui 
// start the db server pgstart 
// create database and tables 
// connection api server >> db server

import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const pgclient = new pg.Client(process.env.DATABASE_URL);

export default pgclient;