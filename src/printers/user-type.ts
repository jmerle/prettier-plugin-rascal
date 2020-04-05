import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printUserTypeNameNode(
  node: UserTypeNameNode,
  path: FastPath<UserTypeNameNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'UserType.Name' is not implemented yet");
}

export function printUserTypeParametricNode(
  node: UserTypeParametricNode,
  path: FastPath<UserTypeParametricNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'UserType.Parametric' is not implemented yet");
}
