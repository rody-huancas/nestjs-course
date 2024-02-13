// import { name } from './bases/01-types'
// import { bulbasaur, pokemonId, pokemons } from './bases/02-objects'
// import { charmander } from './bases/04-injection'
// import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators2'

import './style.css'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <h1>${pokemons.join(',')}</h1>    
//     <h1>Hello ${bulbasaur.name}</h1>    
//   </div>
// `
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${charmander.name}!</h1>    
  </div>
`
