import pool from '../../../../lib/db';

export default async function handler(req, res) {
    const { animeId } = req.query;

    if (req.method === 'POST') {
        const { numero, data_lancamento } = req.body;

        try {
            const result = await pool.query(
                'INSERT INTO episodios (anime_id, numero, data_lancamento) VALUES ($1, $2, $3) RETURNING *',
                [animeId, numero, data_lancamento]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error('Erro ao adicionar episódio:', error);
            res.status(500).json({ error: 'Erro ao adicionar episódio' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}