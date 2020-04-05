import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printIntegerLiteralDecimalIntegerLiteralNode(
  node: IntegerLiteralDecimalIntegerLiteralNode,
  path: FastPath<IntegerLiteralDecimalIntegerLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'IntegerLiteral.DecimalIntegerLiteral' is not implemented yet");
}

export function printIntegerLiteralHexIntegerLiteralNode(
  node: IntegerLiteralHexIntegerLiteralNode,
  path: FastPath<IntegerLiteralHexIntegerLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'IntegerLiteral.HexIntegerLiteral' is not implemented yet");
}

export function printIntegerLiteralOctalIntegerLiteralNode(
  node: IntegerLiteralOctalIntegerLiteralNode,
  path: FastPath<IntegerLiteralOctalIntegerLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'IntegerLiteral.OctalIntegerLiteral' is not implemented yet");
}
