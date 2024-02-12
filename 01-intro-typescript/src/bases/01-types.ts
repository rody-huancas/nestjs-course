export const name: string = "Rody";
export let age: number = 23;

age = 30;

export const templateString = `Esto es un string
multilinea
que puede tener 
" dobles
' simples
inyectatar valore ${name}
expresiones ${1 + 1}
`;

console.log(templateString);
