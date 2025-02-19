'use client';
import { Header } from "@/components/Header";
import { useState, useEffect } from 'react';
import { format } from "date-fns"
import { parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {

  const animes = [
    { id: 1, title: "Neko Wars", date: "29 JAN.", color: "bg-blue-500", tag: "DEMO", genres: ["Luta", "Ação", "Anime", "Esportes"] },
    { id: 2, title: "Kitsune Legends", date: "29 JAN.", color: "bg-red-500", tag: "", genres: ["Chuva de Balas", "Cyberpunk", "Casual"] },
    { id: 3, title: "Samurai Spirits", date: "30 JAN.", color: "bg-green-500", tag: "PC", genres: ["Gráficos Pixel", "Estratégia", "Relaxante"]},
    { id: 4, title: "Cyber Neko", date: "30 JAN.", color: "bg-yellow-500", tag: "CONSOLE", genres: ["Chuva de Balas", "Cyberpunk", "Casual"] },
    { id: 5, title: "Otaku Battle", date: "30 JAN.", color: "bg-purple-500", tag: "", genres: ["Gráficos Pixel", "Estratégia", "Relaxante"] },
    { id: 6, title: "Mecha Horizon", date: "30 JAN.", color: "bg-pink-500", tag: "", genres: ["Luta", "Ação", "Anime", "Esportes"]  },
    { id: 7, title: "Shonen Strike", date: "31 JAN.", color: "bg-gray-500", tag: "", genres: ["Luta", "Ação", "Anime", "Esportes"]  },
  ];

  const episodes = [
    { id: 1, rating: "9.9", anime: "One Piece", episode: "EP - 1112", color: "bg-blue-600" },
    { id: 2, rating: "9.8", anime: "Demon Slayer", episode: "Hashira Training EP 8", color: "bg-red-600" },
    { id: 3, rating: "9.7", anime: "One Piece", episode: "EP - 1100", color: "bg-orange-500" },
    { id: 4, rating: "9.6", anime: "Jujutsu Kaisen", episode: "EP - 43", color: "bg-purple-600" },
  ];

  return (
    <div className="bg-base-100">
    <Header />
    <div className="grid grid-cols-4 gap-4 p-4 h-screen">
      {/* Barra lateral grande */}
      <div className="col-span-1 bg-secondary rounded-lg">
      <div className="w-auto bg-secondary p-4 rounded-2xl text-white relative">
            <div className="space-y-4">
                {animes.map((anime, index) => (
                    <div key={index} className="bg-base-200 p-3 rounded-lg shadow-md relative">
                        <div className="flex gap-3">
                            {/* Imagem temporária com cor de fundo */}
                            <div className={`w-20 h-24 ${anime.color} rounded-md`}></div>

                            {/* Informações do anime */}
                            <div className="flex-1">
                                <h3 className="text-sm font-bold">{anime.title}</h3>

                                {/* Gêneros */}
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {anime.genres.map((genre, i) => (
                                        <span key={i} className="bg-[#292929] text-[10px] px-2 py-1 rounded-md text-gray-300">
                                            {genre}
                                        </span>
                                    ))}
                                </div>

                                {/* Botão "Verifique" */}
                                <button className="mt-2 w-full bg-[#2e2e2e] text-white text-xs py-1 rounded-md hover:bg-gray-700 transition">
                                    Verifique
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <div className="col-span-3 flex flex-col gap-4">
        {/* Bloco grande no topo */}
        <div className="bg-secondary rounded-lg">
          <div className="p-4">
            <h2 className="text-white text-lg font-bold mb-2">CALENDÁRIO DE ANIMES</h2>
            <div className="flex overflow-x-auto space-x-4">
              {animes.map((anime) => (
                <div key={anime.id} className={`relative w-36 h-48 flex-shrink-0 rounded-lg ${anime.color} flex items-center justify-center`}>
                  <span className="absolute bottom-0 left-0 bg-neutral text-primary text-sm px-2 py-1">
                    {anime.date}
                  </span>
                    <span className="absolute top-1 right-1 bg-primary text-black text-xs px-1 py-0.5 rounded">
                      {anime.title}
                    </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blocos menores abaixo */}
        <div className="grid grid-cols-2 gap-4">
          {episodes.map((ep) => (
          <div key={ep.id} className={`relative ${ep.color} h-48 rounded-xl p-4 flex items-center`}>
            {/* Texto à esquerda */}
            <div className="flex flex-col text-left w-2/3">
              {/* Nota */}
              <div className="text-white text-5xl font-bold flex items-center">
                ⭐ {ep.rating}
              </div>
              {/* Nome do anime e episódio */}
              <div className="text-white text-xl font-bold mt-1">{ep.anime}</div>
              <div className="text-gray-300 text-sm">{ep.episode}</div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
