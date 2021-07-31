import EstrellitaNegra from './EstrellitaNegra'

import './../styles/EstrellitaNegra.css'

const formItems = [
    {
        titulo: "Nombre completo",
        for: "nombre"
    },
    {
        titulo: "E-Mail",
        for: "email"
    },
    {
        titulo: "Teléfono",
        for: "telefono"
    },
    {
        titulo: "Mensaje",
        for: "mensaje"
    }
];

function Contact() {
    return <section className="contact" id="donde">
        <div className="res">
            <h2>DONDE ESTOY</h2>
            <EstrellitaNegra></EstrellitaNegra>
            <div className="formulario">
                {formItems.map(item => (
                <div className="formDiv">
                    <label htmlFor={item.for}>{item.titulo}</label>
                    <input type="text"/>
                </div>))}
                <button>Enviar</button>
            </div>
        </div>
    </section>
}

export default Contact