// import { name } from './bases/01-types'
import { bulbasaur, pokemonId } from './bases/02-objects'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${pokemonId.join(',')}</h1>    
    <h1>Hello ${bulbasaur.name}</h1>    
  </div>
`
