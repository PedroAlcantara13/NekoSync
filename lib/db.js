import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',        // Substitua pelo seu usuário
    host: 'localhost',
    database: 'anime_db',       // Nome do banco de dados
    password: '!Raizan123',      // Substitua pela sua senha
    port: 5432,
});

export default pool;