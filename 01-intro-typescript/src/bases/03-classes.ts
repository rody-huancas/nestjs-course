import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {

  get imageUrl(): string {
    // el this hace referencia a la instancia
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // public imageUrl: string
  ) {}

  scremam() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4`)
    console.log(data.moves);
    return data.moves;
  }
}

export const charmander = new Pokemon(1, "charmander");

// console.log(charmander);

// charmander.speak();
// charmander.scremam();


charmander.getMoves()