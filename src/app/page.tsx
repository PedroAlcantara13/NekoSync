'use client';
import { Header } from "@/components/Header";
import { useState, useEffect } from 'react';

export default function Home() {
  const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch('/api/animes')
            .then(res => res.json())
            .then(data => setAnimes(data));
    }, []);

  return (
    <>
    <Header />
    {animes.map(anime => (
                <div key={anime.id}>
                    <h2>{anime.titulo}</h2>
                    <img src={anime.capa_url} alt={anime.titulo} width="200" />
                    <p>{anime.descricao}</p>
                </div>
            ))}
    </>
  );
}
