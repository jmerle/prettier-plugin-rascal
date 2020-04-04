import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printVisibilityDefaultNode(
  path: FastPath<VisibilityDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Visibility.Default' is not implemented yet");
}

export function printVisibilityPrivateNode(
  path: FastPath<VisibilityPrivateNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Visibility.Private' is not implemented yet");
}

export function printVisibilityPublicNode(
  path: FastPath<VisibilityPublicNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Visibility.Public' is not implemented yet");
}
