import React, {useState} from 'react'
import Swal from 'sweetalert2'
import Input from '../Input'
import './styles.css'

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [consulta, setConsulta] = useState('')

    return (
        <div className='form-container'>
            <form className='contact-form' onSubmit={(e) => {
                e.preventDefault()
                Swal.fire(
                    'Tu consulta fue enviada!',
                    'A la brevedad recibiras nuestra respuesta',
                    'success'
                )
                setName('')
                setEmail('')
                setConsulta('')
            }}>
                <h3>Dejanos tu consulta</h3>
                <Input type='text' label='Nombre' onChange={setName} text={name} placeholder='Jose' />
                <Input type='email' label='Mail' onChange={setEmail} text={email} placeholder='jose@mail.com' />
                <Input type='text' label='Consulta' onChange={setConsulta} text={consulta} placeholder='Escribe aqui tu consulta' />
                <button className='btn-comprar pagar' type='submit' >Enviar consulta</button>
            </form>
        </div>
    )
}

export default ContactForm
