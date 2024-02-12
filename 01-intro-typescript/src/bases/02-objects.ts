export const pokemonId = [1, 20, 30, 40, 50, 60];

// pokemonId.push('1'); //! Error
// pokemonId.push(+'1'); //! convertir a numero


interface Pokemom {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemom = {
    id: 1,
    name: 'Bulbasaur',
    age: 10,
}

console.log(bulbasaur);
