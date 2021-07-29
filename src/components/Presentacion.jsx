import facupitta from './images/facupitta.png'
import estrellitaBlanca from './images/estrellita_blanca.png'

function Presentacion() {
    return  <div className="Presentacion">
                <div>
                    <img src={facupitta} alt="Facupitta"/>
                </div>
                <div>
                    <h1>FACUPITTA</h1>
                </div>
                <div className="Dibujito">
                    <div className="Rayita"></div>
                    <img src={estrellitaBlanca} alt="Estrellita blanca"/>
                    <div className="Rayita"></div>
                </div>
                <div>
                    <h2>Boludito - Canchero - Maleducado</h2>
                </div>
            </div>
}

export default Presentacion