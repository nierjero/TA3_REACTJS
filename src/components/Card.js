
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; 

const Card = ({ title, description, assignedPerson, startDate, endDate }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <p className="card-assigned-person"><strong>Persona asignada:</strong> {assignedPerson}</p>
            <p className="card-dates">
                <strong>Fecha inicio:</strong> {startDate} <br />
                <strong>Fecha de fin:</strong> {endDate}
            </p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    assignedPerson: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
};

export default Card;
