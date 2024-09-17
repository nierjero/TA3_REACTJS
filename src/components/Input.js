import React, { useState } from 'react';

const Input = () => {
    const [inputValue, setInputValue] = useState('');

    
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder="Escribe algo..."
            />
            <p>Texto ingresado: {inputValue}</p>
        </div>
    );
};

export default Input;
