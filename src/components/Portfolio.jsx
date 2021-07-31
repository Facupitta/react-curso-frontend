import EstrellitaNegra from './EstrellitaNegra'
import './../styles/EstrellitaNegra.css'

const items = [
    {
        className: "primero",
        nombre: "Pichula triste",
        imagen: "images/pichula.png",
    },
    {
        className: "segundo",
        nombre: "Pichula triste",
        imagen: "images/pichula.png",
    },
    {
        className: "tercero",
        nombre: "Pichula triste",
        imagen: "images/pichula.png",
    },
    {
        className: "cuarto",
        nombre: "Pichula triste",
        imagen: "images/pichula.png",
    },
    {
        className: "quinto",
        nombre: "Pichula triste",
        imagen: "images/pichula.png",
    },
    {
        className: "sexto",
        nombre: "Pichula triste",
        imagen: "images/pichula.png",
    }
]

function Portfolio() {
    return <section className="portfolio" id="como">
        <div className="res">
            <h2>COMO ESTOY</h2>
            <EstrellitaNegra></EstrellitaNegra>
            <ul>
                {items.map(item => (
                <li className={item.className}>
                    <img src={item.imagen} alt={item.nombre}/>
                </li>))}
            </ul>
        </div>
    </section>
}

export default Portfolio