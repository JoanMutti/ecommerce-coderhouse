import React, { useState } from 'react'
import Input from '../Input'
import './styles.css'
import Swal from 'sweetalert2'

function BuyerForm({setShowFormBuyer, buyProduct}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const validate = () => {
        const cond1 = email.search(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/) !== -1
        const cond2 = name.search(/^[a-zA-Z\s][\w]*$/) !== -1
        const cond3 = phone.search(/^[0-9][0-9]*$/) !== -1
        if (cond1 && cond2 && cond3) {
            return true
        }else{
            return false
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            setShowFormBuyer(false)
            buyProduct({name, email, phone})
            Swal.fire(
                'Exitooo!',
                'Tu compra ya fue realizada',
                'success'
            )
        }else{
            Swal.fire(
                'Error!',
                'Comprueba que los campos esten completados correctamente',
                'error'
            )
        }
    }

    return (
        <div className='buyer-form-container' >
            <div className='form-card' >
                    <i className='close-modal' onClick={() => setShowFormBuyer(false)}><img src='/assets/images/close.svg' alt='Close Menu' /></i>
                <div className='content-card' >
                        <h3>Mis datos</h3>
                        <Input type='text' label='Nombre' onChange={setName} text={name} placeholder='Jose' />
                        <Input type='email' label='Mail' onChange={setEmail} text={email} placeholder='jose@mail.com' />
                        <Input type='phone' label='Telefono' onChange={setPhone} text={phone} placeholder='123456789' />
                        <button className='btn-comprar pagar' type='button' onClick={(e) => handleSubmit(e)} >Pagar</button>
                </div>
            </div>
        </div>
    )
}

export default BuyerForm
