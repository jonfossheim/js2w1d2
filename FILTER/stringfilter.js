const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const pokemon = [
  'Gengar',
  'Blaziken',
  'Onix',
  'Corphish',
  'Pikachu',
  'Charizard',
];

//console.log('original pokeArr: ' + pokemon);
//console.log('original wordsArr: ' + words);

const filterStrArr = (arr, lng) => {
  return arr.filter((item) => item.length > lng);
};

//console.log(filterStrArr(pokemon, 6));
