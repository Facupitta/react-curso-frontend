import EstrellitaBlanca from './EstrellitaBlanca'

import './../styles/EstrellitaBlanca.css'

function Presentacion() {
    return <section className="presentacion">
        <div className="res">
            <img src="images/facupitta.png" alt="Facupitta 100% real no fake"/>
            <h2>FACUPITTA</h2>
            <EstrellitaBlanca></EstrellitaBlanca>
            <p>Ing. en Sistemas - UTN - No le sale bien CSS</p>
        </div>
    </section>
}

export default Presentacion