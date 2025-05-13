import Link from "next/link";
import "./cabecera.css";

function Cabecera(){
    return (
        <header className="cabecera">
            <div className="cabecera__logo">
                <img src="next.svg"/>
            </div>
            <nav className="cabecera__nav">
                <Link href={`../peliculas`}>PELICULAS</Link>
            </nav>
            
        </header>
    )
}

export default Cabecera;