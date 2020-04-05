import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printAssocAssociativeNode(
  node: AssocAssociativeNode,
  path: FastPath<AssocAssociativeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assoc.Associative' is not implemented yet");
}

export function printAssocLeftNode(
  node: AssocLeftNode,
  path: FastPath<AssocLeftNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assoc.Left' is not implemented yet");
}

export function printAssocNonAssociativeNode(
  node: AssocNonAssociativeNode,
  path: FastPath<AssocNonAssociativeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assoc.NonAssociative' is not implemented yet");
}

export function printAssocRightNode(
  node: AssocRightNode,
  path: FastPath<AssocRightNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Assoc.Right' is not implemented yet");
}
