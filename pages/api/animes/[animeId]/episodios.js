import pool from '../../../../lib/db';

export default async function handler(req, res) {
    const { animeId } = req.query;

    if (req.method === 'GET') {
        try {
            const result = await pool.query('SELECT * FROM episodios WHERE anime_id = $1', [animeId]);
            res.status(200).json(result.rows);
        } catch (error) {
            console.error('Erro ao consultar episódios:', error);
            res.status(500).json({ error: 'Erro ao consultar episódios' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}