import pool from '../../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { titulo, descricao, data_lancamento, total_episodios, status, capa_url } = req.body;

        try {
            const result = await pool.query(
                'INSERT INTO animes (titulo, descricao, data_lancamento, total_episodios, status, capa_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [titulo, descricao, data_lancamento, total_episodios, status, capa_url]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error('Erro ao adicionar anime:', error);
            res.status(500).json({ error: 'Erro ao adicionar anime' });
        }
    } else {
        res.status(405).json({ error: 'Método não permitido' });
    }
}