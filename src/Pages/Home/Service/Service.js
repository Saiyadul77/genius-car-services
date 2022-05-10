import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToService = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-style'>
            <h1>{name}</h1>
            <img src={img} className="w-100" alt="" />
            <h3>{price}</h3>
            <p>{description}</p>
            <button onClick={() => navigateToService(_id)}>Book: {name}</button>
        </div>
    );
};

export default Service;