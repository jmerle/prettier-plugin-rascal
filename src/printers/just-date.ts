import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printJustDateLexical(
  path: FastPath<JustDateLexicalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'JustDate.Lexical' is not implemented yet");
}
