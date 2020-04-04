import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printIntegerLiteralDecimalIntegerLiteral(
  path: FastPath<IntegerLiteralDecimalIntegerLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'IntegerLiteral.DecimalIntegerLiteral' is not implemented yet");
}

export function printIntegerLiteralHexIntegerLiteral(
  path: FastPath<IntegerLiteralHexIntegerLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'IntegerLiteral.HexIntegerLiteral' is not implemented yet");
}

export function printIntegerLiteralOctalIntegerLiteral(
  path: FastPath<IntegerLiteralOctalIntegerLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'IntegerLiteral.OctalIntegerLiteral' is not implemented yet");
}
