import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printConcretePartLexicalNode(
  node: ConcretePartLexicalNode,
  path: FastPath<ConcretePartLexicalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ConcretePart.Lexical' is not implemented yet");
}
