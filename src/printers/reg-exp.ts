import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printRegExpLexicalNode(
  node: RegExpLexicalNode,
  path: FastPath<RegExpLexicalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'RegExp.Lexical' is not implemented yet");
}
