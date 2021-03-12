import React from 'react';
import './card-style.css';

const Card = (props) => {
    return(
        <div key={props.pokemon.id} className='card-container'>
            <img alt="pokemon" src={`https://robohash.org/${props.pokemon.id}?set=set4`}></img>
            <h1>{props.pokemon.name}</h1>
            <p>{props.pokemon.email}</p>
        </div>
    );
}

export default Card;