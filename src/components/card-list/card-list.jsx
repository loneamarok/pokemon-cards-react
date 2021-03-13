import React from 'react';
import './card-list-style.css';
import Card from './card'

const CardList = (props) => {
    //console.log(props);
    return(
        <div className='card-list'>
            {props.pokemon.map(pokemon => 
                <Card pokemon={pokemon}/>
            )}
        </div>
    );
}

export default CardList;