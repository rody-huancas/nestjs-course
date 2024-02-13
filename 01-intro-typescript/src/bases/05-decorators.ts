class NewPokemon {
  constructor(public readonly id: number, public readonly name: string) {}

  scremam() {
    console.log(`No quiero!!!`);
  }

  speak() {
    console.log(`No quiero hablar!`);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    // console.log(target);
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public readonly name: string) {}

  scremam() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}

export const charmander = new Pokemon(4, "charmander");

charmander.scremam();
charmander.speak();
