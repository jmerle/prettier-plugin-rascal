import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printDateTimeLiteralDateAndTimeLiteralNode(
  path: FastPath<DateTimeLiteralDateAndTimeLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'DateTimeLiteral.DateAndTimeLiteral' is not implemented yet");
}

export function printDateTimeLiteralDateLiteralNode(
  path: FastPath<DateTimeLiteralDateLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'DateTimeLiteral.DateLiteral' is not implemented yet");
}

export function printDateTimeLiteralTimeLiteralNode(
  path: FastPath<DateTimeLiteralTimeLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'DateTimeLiteral.TimeLiteral' is not implemented yet");
}
