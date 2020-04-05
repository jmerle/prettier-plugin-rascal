import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printLiteralBooleanNode(
  node: LiteralBooleanNode,
  path: FastPath<LiteralBooleanNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Literal.Boolean' is not implemented yet");
}

export function printLiteralDateTimeNode(
  node: LiteralDateTimeNode,
  path: FastPath<LiteralDateTimeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Literal.DateTime' is not implemented yet");
}

export function printLiteralIntegerNode(
  node: LiteralIntegerNode,
  path: FastPath<LiteralIntegerNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Literal.Integer' is not implemented yet");
}

export function printLiteralLocationNode(
  node: LiteralLocationNode,
  path: FastPath<LiteralLocationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Literal.Location' is not implemented yet");
}

export function printLiteralRationalNode(
  node: LiteralRationalNode,
  path: FastPath<LiteralRationalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Literal.Rational' is not implemented yet");
}

export function printLiteralRealNode(
  node: LiteralRealNode,
  path: FastPath<LiteralRealNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Literal.Real' is not implemented yet");
}

export function printLiteralRegExpNode(
  node: LiteralRegExpNode,
  path: FastPath<LiteralRegExpNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Literal.RegExp' is not implemented yet");
}

export function printLiteralStringNode(
  node: LiteralStringNode,
  path: FastPath<LiteralStringNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Literal.String' is not implemented yet");
}
