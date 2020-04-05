import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printTypeArgDefaultNode(
  node: TypeArgDefaultNode,
  path: FastPath<TypeArgDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'TypeArg.Default' is not implemented yet");
}

export function printTypeArgNamedNode(
  node: TypeArgNamedNode,
  path: FastPath<TypeArgNamedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'TypeArg.Named' is not implemented yet");
}
