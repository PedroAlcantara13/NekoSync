import pool from '../../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await pool.query('SELECT * FROM animes');
            res.status(200).json(result.rows);
        } catch (error) {
            console.error('Erro ao consultar animes:', error);
            res.status(500).json({ error: 'Erro ao consultar animes' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}