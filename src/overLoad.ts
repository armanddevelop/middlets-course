export const parseStr = (input: string | string[]): string | string[] => {
  const response = Array.isArray(input) ? input.join('') : input.split('');
  return response;
};
const rtaArray = parseStr(['h', 'o', 'l', 'a']);
const rtaString = parseStr('paches');

console.log(rtaArray);
console.log(rtaString);
