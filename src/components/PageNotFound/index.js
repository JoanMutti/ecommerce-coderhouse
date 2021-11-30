import React from 'react'
import { useHistory } from 'react-router'
import './styles.css'

function PageNotFound() {
    const history = useHistory()

    return (
        <div className='container-404'>
            <div className='card-404'>
                <h3>Oops</h3>
                <h5>404 - Pagina no encontrada</h5>
                <p>La pagina que estas buscando no existe, ha sido eliminada o momentaneamente se encuentra inhabilitada.</p>
                <button 
                    className='btn-comprar'
                    onClick={ e => {
                        e.preventDefault()
                        history.push('/')
                    }}
                >Ir a Home</button>
            </div>
        </div>
    )
}

export default PageNotFound
