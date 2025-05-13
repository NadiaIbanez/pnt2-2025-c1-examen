"use client";
import Image from "next/image";
import Cabecera from './cabecera/Cabecera';
import Pie from './pie/Pie'
import {useState, useEffect} from "react";
import MovieList from "./peliculas/MovieList";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1")
    .then((response) => response.json())
    .then((data) => {
      setMovies(data.sort((a,b) => b.imdb.rating - a.imdb.rating).slice(0,5))
    })
    .catch(error => console.log(error))
  },[]);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Cabecera />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>TOP 5 MEJORES PELICULAS</h1>
        <MovieList movies ={movies}/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Pie/>
      </footer>
    </div>
  );
}
