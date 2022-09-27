import * as pg from 'pg'
const { Pool } = pg.default

// CONNECT DB
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'postgres',
    port: '5432'
})

