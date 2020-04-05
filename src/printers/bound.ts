import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printBoundDefaultNode(
  node: BoundDefaultNode,
  path: FastPath<BoundDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Bound.Default' is not implemented yet");
}

export function printBoundEmptyNode(
  node: BoundEmptyNode,
  path: FastPath<BoundEmptyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Bound.Empty' is not implemented yet");
}
