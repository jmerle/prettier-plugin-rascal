import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printTagDefaultNode(
  node: TagDefaultNode,
  path: FastPath<TagDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Tag.Default' is not implemented yet");
}

export function printTagEmptyNode(
  node: TagEmptyNode,
  path: FastPath<TagEmptyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Tag.Empty' is not implemented yet");
}

export function printTagExpressionNode(
  node: TagExpressionNode,
  path: FastPath<TagExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Tag.Expression' is not implemented yet");
}
