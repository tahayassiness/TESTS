const getLengthArray = require('./get_length_array')
const arr =['Strawberry', 'Banana', 'Mango','navet', 'pomme de terre', 'céleri', 'radis',"pigs",'pigs', 'goats',
'Strawberry', 'Banana', 'Mango','navet', 'pomme de terre', 'céleri', 'radis',
"pigs",'pigs', 'goats','Strawberry', 'Banana', 'Mango','navet', 'pomme de terre', 'céleri', 'radis',"pigs",'pigs', 'goats','Strawberry', 'Banana', 'Mango',
'navet', 'pomme de terre', 'céleri', 'radis',
"pigs",'pigs', 'goats',
'Strawberry', 'Banana', 'Mango',
'navet', 'pomme de terre', 'céleri', 'radis',
"pigs",'pigs', 'goats','element51'];


test(`le nombre d'éléments dont la longueur est supérieure strictement à 50`, () => {
  expect(getLengthArray(arr)).toBeGreaterThan(50);
});