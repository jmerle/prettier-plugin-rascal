import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStructuredTypeDefaultNode(
  node: StructuredTypeDefaultNode,
  path: FastPath<StructuredTypeDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StructuredType.Default' is not implemented yet");
}
