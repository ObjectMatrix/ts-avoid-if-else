/**
 * Don’t Use If-Else and Switch in TS/JavaScript, Use Object Literals
 */
interface Collection <T> {
  [name: string]: T
}

function calculate(num1: any, num2: any, action: keyof Collection<number>): number {
const actions = {
  add: (a: number, b: number) => a + b,
  subtract: (a: number, b: number) => a - b,
  multiply: (a: number, b: number) => a * b,
  divide: (a: number, b: number) => a / b,
};

/*
Optional chaining (?.)
======================
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)
*/

return actions[action]?.(num1, num2) ?? "Calculation is not recognised";
}

console.log(calculate(1, 2, 'add'));

interface IRhymes<T> {
  [name: string]: T
}

function getTranslationMap(rhyme: keyof Collection<string>): string {
const rhymes = {
  "apples and pears": "Stairs",
  "hampstead_heath": "Teeth",
  "loaf_of_bread": "Head",
  "pork_pies": "Lies",
  "whistle_and_flute": "Suit",
};
const index = rhyme;
console.log('index:', index);
return rhymes[index] ?? "Rhyme not found";
}

console.log(getTranslationMap('apples and pears'));

//  > ts-node  <filename.ts>