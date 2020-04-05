import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printTypeVarBoundedNode(
  node: TypeVarBoundedNode,
  path: FastPath<TypeVarBoundedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'TypeVar.Bounded' is not implemented yet");
}

export function printTypeVarFreeNode(
  node: TypeVarFreeNode,
  path: FastPath<TypeVarFreeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'TypeVar.Free' is not implemented yet");
}
