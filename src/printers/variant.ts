import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printVariantNAryConstructorNode(
  node: VariantNAryConstructorNode,
  path: FastPath<VariantNAryConstructorNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Variant.NAryConstructor' is not implemented yet");
}
