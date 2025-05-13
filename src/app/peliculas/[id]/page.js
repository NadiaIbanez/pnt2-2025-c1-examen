"use client"
import {useState,useEffect,use} from "react";

export default function PageDetails({params}){
    const {id} = use(params);
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch("https://mflixbackend.azurewebsites.net/api/movies")
        .then((response) => response.json())
        .then((data) => {setMovie(data.find(m => m._id == id))})
        .catch(error => console.log(error))
    },[]);

    return(
        <>
        <div>
            <div>
                <img src={movie.poster} alt={movie.title}/>
            </div>
            <div>
               <p>{movie.title}</p> 
               <p>{movie.fullplot}</p>
            </div>
        </div>

        </>

    )
}