import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printDateTimeLiteralDateAndTimeLiteralNode(
  node: DateTimeLiteralDateAndTimeLiteralNode,
  path: FastPath<DateTimeLiteralDateAndTimeLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'DateTimeLiteral.DateAndTimeLiteral' is not implemented yet");
}

export function printDateTimeLiteralDateLiteralNode(
  node: DateTimeLiteralDateLiteralNode,
  path: FastPath<DateTimeLiteralDateLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'DateTimeLiteral.DateLiteral' is not implemented yet");
}

export function printDateTimeLiteralTimeLiteralNode(
  node: DateTimeLiteralTimeLiteralNode,
  path: FastPath<DateTimeLiteralTimeLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'DateTimeLiteral.TimeLiteral' is not implemented yet");
}
