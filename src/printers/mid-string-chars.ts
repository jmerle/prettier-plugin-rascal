import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printMidStringCharsLexicalNode(
  node: MidStringCharsLexicalNode,
  path: FastPath<MidStringCharsLexicalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'MidStringChars.Lexical' is not implemented yet");
}
