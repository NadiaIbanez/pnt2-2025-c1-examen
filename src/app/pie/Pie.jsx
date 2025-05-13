import "./pie.css"

function PieDePagina(){
    return(
        <footer className="pie"> 
            <div className="pie__info">
                Todos los derechos reservados
            </div>
            <nav className="pie__nav">
                <a href="">Politica de Privacidad</a>
                <br></br>
                <a href="">Terminos y Condiciones</a>
                <br></br>
                <a href="">Ayuda</a>
            </nav>
        </footer>
    )
}

export default PieDePagina;