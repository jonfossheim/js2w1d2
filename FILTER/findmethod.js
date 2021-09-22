const people = [
  { id: 1, name: 'doberman' },
  { id: 2, name: 'Labrador' },
  { id: 3, name: 'Terrier' },
  { id: 4, name: 'rottie' },
  { id: 5, name: 'Setter' },
  { id: 6, name: 'doge' },
  { id: 7, name: 'bulldog' },
  { id: 8, name: 'Beagle' },
];

const person = people.find((person) => {
  if (person.id === 2) {
    return true;
  }
});

//console.log(person);
