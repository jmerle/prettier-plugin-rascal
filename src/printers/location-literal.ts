import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printLocationLiteralDefaultNode(
  node: LocationLiteralDefaultNode,
  path: FastPath<LocationLiteralDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'LocationLiteral.Default' is not implemented yet");
}
