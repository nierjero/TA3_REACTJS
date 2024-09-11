// src/App.js

import React from 'react';
import Card from './components/Card';
import './App.css'; // Importa estilos globales si los tienes

const App = () => {
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
            {cardsData.map((card, index) => (
                <Card
                    key={index} // Usa un índice o una clave única
                    title={card.title}
                    description={card.description}
                    assignedPerson={card.assignedPerson}
                    startDate={card.startDate}
                    endDate={card.endDate}
                />
            ))}
        </div>
    );
};

export default App;

