import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printBodyToplevelsNode(
  node: BodyToplevelsNode,
  path: FastPath<BodyToplevelsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Body.Toplevels' is not implemented yet");
}
