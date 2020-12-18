import React, {useState, useEffect} from 'react'
import axios from "axios";
import './Pokemoncards.css'


export default function PokemonCards (props) {

    const [ pokemon, setPokemon ] = useState ();


    useEffect (() => {
        async function fetchPokemonData () {
            try {
                const result = await axios.get (`https://pokeapi.co/api/v2/pokemon/${props.name}`
                );
                setPokemon (result.data);
            } catch (e) {
                console.error (e);
            }
        }
        fetchPokemonData();

    }, [props.name]);

    console.log (pokemon)

    return (

        <div className="pokemonCards">

            <h1> { pokemon?.name } </h1>

            <img className="image" alt="pokemon?.name" src={ pokemon?.sprites.front_default }/>

            <ul>
                <h4>Moves : { pokemon?.moves.length } </h4>
                <h4>Weight : { pokemon?.weight } </h4>
            </ul>

            <ul>
                <h5 className="abilities"> Abilities : </h5>
                <h5 className="abilities-h5"> { pokemon?.abilities.map (( ability ) => {
                        return <li key= { ability.ability.name }>{ ability.ability.name }</li>
                    })} </h5>
            </ul>

        </div>

    )

}