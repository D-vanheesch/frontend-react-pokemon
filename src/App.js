import React, {useState, useEffect} from 'react'
import PokemonCards from "./components/PokemonCards";
import Buttons from "./navigation/Buttons";
import './App.css';
import Pokemon from "./assets/Pokemon.png";
import axios from "axios";


function App () {

    const [ pokemons, setPokemons ] = useState ( null );
    const [ page, setPage ] = useState ( 0 );

    const getPrevious = () => {
        if ( page !== 0) setPage ( page - 20 )
    }

    const getNext = () => {
        if ( page < 1100  ) setPage ( page + 20 )
    }

    useEffect ( () => {
        async function fetchPokemons () {
            try {
                const response = await axios.get (
                    `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20` );
                setPokemons ( response.data.results );
            } catch (e) {
                console.error ( e );
            }
        }

        fetchPokemons ();

    }, [ page ] );

    if (!pokemons) {
        return <p>Loading...</p>
    } else {
        return (
            <div className="pokemonApp">

                <header className="header">
                    <img className="pokemonLogo" src={Pokemon} alt="pokemon-Logo"/>
                    <Buttons next={getNext} previous={getPrevious}/>
                </header>

                <ul className="pokemon-list">
                    {pokemons?.map ( ( pokemon ) => {
                        return <PokemonCards key={pokemon.name} name={pokemon.name}/>
                    } )}
                </ul>

            </div>
        )
    }
}

export default App
