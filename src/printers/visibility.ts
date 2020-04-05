import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printVisibilityDefaultNode(
  node: VisibilityDefaultNode,
  path: FastPath<VisibilityDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Visibility.Default' is not implemented yet");
}

export function printVisibilityPrivateNode(
  node: VisibilityPrivateNode,
  path: FastPath<VisibilityPrivateNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Visibility.Private' is not implemented yet");
}

export function printVisibilityPublicNode(
  node: VisibilityPublicNode,
  path: FastPath<VisibilityPublicNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Visibility.Public' is not implemented yet");
}
