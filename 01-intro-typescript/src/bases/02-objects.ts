export const pokemonId = [1, 20, 30, 40, 50, 60];

// pokemonId.push('1'); //! Error
// pokemonId.push(+'1'); //! convertir a numero


interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 10,
}

// console.log(bulbasaur);

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasaur)

// console.log(pokemons);

