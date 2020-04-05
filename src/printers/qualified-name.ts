import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printQualifiedNameDefaultNode(
  node: QualifiedNameDefaultNode,
  path: FastPath<QualifiedNameDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'QualifiedName.Default' is not implemented yet");
}
