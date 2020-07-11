import React from 'react'
import CharacterItem from './CharacterItem';
import Spinner from '../UI/Spinner';


function CharactersGrid({items,isloading}) {
    return (
        isloading===true?
        ( <Spinner/> )
        :( <div className="cards">
            {items.map((item)=>(
                <CharacterItem key={item.char_id} item={item} /> 
            ))}
            </div>)
        
    )
}

export default CharactersGrid
