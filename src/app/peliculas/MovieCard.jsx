import React, { useState } from 'react';
import Link from "next/link";

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="w-[90px] text-center">
      <Link href={`/peliculas/${movie._id}`}>
      
      {movie.poster && !imageError ? (
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="w-full h-[135px] object-cover rounded-md"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-[135px] bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-xs text-gray-600 text-center">{movie.title}</span>
        </div>
      )}
      <p className="text-xs mt-1 truncate">{movie.title}</p>
      <p>{movie.year}</p>
      </Link>
    </div>
  );
}