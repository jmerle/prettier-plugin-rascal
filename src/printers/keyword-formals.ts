import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printKeywordFormalsDefaultNode(
  path: FastPath<KeywordFormalsDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'KeywordFormals.Default' is not implemented yet");
}

export function printKeywordFormalsNoneNode(
  path: FastPath<KeywordFormalsNoneNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'KeywordFormals.None' is not implemented yet");
}
