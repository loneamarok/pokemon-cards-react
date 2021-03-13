import React from 'react';
import './card-style.css';

const Card = (props) => {
    return(
        <div key={props.pokemon.id} className='card-container'>
            {/* <img alt="pokemon" src={`https://robohash.org/${props.pokemon.id}?set=set4`}></img> */}
            <img alt="pokemon" className="center" 
            src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`}
            style={{height:`200px`, width:`200px`}}/>
            <h1>{props.pokemon.name}</h1>
            <p>{props.pokemon.id}</p>
        </div>
    );
}

export default Card;