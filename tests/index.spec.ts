import * as fs from 'fs';
import * as path from 'path';
import { format } from 'prettier';
import * as RascalPlugin from '../src';

const casesDirectory = path.resolve(__dirname, 'cases');
const cases = fs.readdirSync(casesDirectory);

for (const caseName of cases) {
  const input = fs.readFileSync(path.resolve(casesDirectory, caseName, 'input.rsc')).toString();
  const expected = fs.readFileSync(path.resolve(casesDirectory, caseName, 'output.rsc')).toString();

  test(caseName, () => {
    const actual = format(input, {
      plugins: [RascalPlugin],
      parser: 'rascal' as any,
      useTabs: true,
    });

    expect(actual).toBe(expected);
  });
}
