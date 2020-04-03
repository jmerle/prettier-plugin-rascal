import { Doc, FastPath, ParserOptions } from 'prettier';

export function print(path: FastPath, options: ParserOptions, print: (path: FastPath) => Doc): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  return 'TODO';
}
