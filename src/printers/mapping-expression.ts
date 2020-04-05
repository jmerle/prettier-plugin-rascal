import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printMapping_ExpressionDefaultNode(
  node: Mapping_ExpressionDefaultNode,
  path: FastPath<Mapping_ExpressionDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Mapping_Expression.Default' is not implemented yet");
}
