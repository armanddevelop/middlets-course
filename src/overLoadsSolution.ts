export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'boolean') {
    return true;
  }
}
const rtaArray = parseStr('paches');
const rtaString = parseStr(['h', 'o', 'l', 'a']);
const rtaBool = parseStr(12);
rtaArray.reverse();
console.log(rtaArray);
console.log(rtaString.toUpperCase());
console.log(rtaBool);
