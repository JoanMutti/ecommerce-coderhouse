import React from 'react'
import './styles.css'

function Input({type, label, onChange, text, placeholder}) {
    
    return (
        <div className='input-container' >
                <label>{label}</label>
                <input 
                    type={type}
                    value={text}
                    onChange={(e) => {
                        onChange(e.target.value)
                    } }
                    placeholder={placeholder} 
                    required
                />
        </div>
    )
}

export default Input
