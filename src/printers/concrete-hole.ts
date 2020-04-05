import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printConcreteHoleOneNode(
  node: ConcreteHoleOneNode,
  path: FastPath<ConcreteHoleOneNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ConcreteHole.One' is not implemented yet");
}
