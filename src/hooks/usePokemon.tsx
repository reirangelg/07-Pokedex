import { useState, useEffect } from "react";
import { PokemonApi } from "../api/pokemonApi";
import { PokemonFull } from "../interfaces/pokemonInterfaces";
import { PokemonScreen } from "../screens/PokemosnScreen";

export const usePokemon= (id:string) =>{
    
    const [ isLoading, setIsLoading] = useState( true )
    const [ pokemon, setPokemon] = useState<PokemonFull>( {} as PokemonFull )
    const loadPokemon = async () => {
        const resp = await PokemonApi.get<PokemonFull>( `https://pokeapi.co/api/v2/pokemon/${ id }`);
        setPokemon ( resp.data);
        setIsLoading( false )
    }
    useEffect(() => {
        loadPokemon();
          
    }, [])

    return{
        isLoading,
        pokemon
    }
}