import React, { useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import './App.css';

const App = () => {
    const [inputText, setInputText] = useState('');

    const cardsData = [
        {
            title: "Card 1",
            description: "Descripción 1",
            assignedPerson: "Snake",
            startDate: "2024-09-01",
            endDate: "2024-12-31"
        },
        {
            title: "Card 2",
            description: "Descripción 2",
            assignedPerson: "Raiden",
            startDate: "2024-10-01",
            endDate: "2024-11-30"
        },
        {
            title: "Card 3",
            description: "Descripción 3",
            assignedPerson: "Venom",
            startDate: "2024-10-01",
            endDate: "2024-11-01"
        }
    ];

    return (
        <div className="App">
            <h1>Mi Aplicación</h1>
            <Input onChange={setInputText} />
            <h2>Tarjetas</h2>
            {cardsData.map((card, index) => (
                <Card key={index}>
                    <h2 className="card-title">{card.title}</h2>
                    <p className="card-description">{card.description}</p>
                    <p className="card-assigned-person">
                        <strong>Persona asignada:</strong> {card.assignedPerson}
                    </p>
                    <p className="card-dates">
                        <strong>Fecha inicio:</strong> {card.startDate} <br />
                        <strong>Fecha de fin:</strong> {card.endDate}
                    </p>
                </Card>
            ))}
            <h2>Texto ingresado:</h2>
            <p>{inputText}</p>
        </div>
    );
};

export default App;

