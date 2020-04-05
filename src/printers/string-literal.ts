import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStringLiteralInterpolatedNode(
  node: StringLiteralInterpolatedNode,
  path: FastPath<StringLiteralInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringLiteral.Interpolated' is not implemented yet");
}

export function printStringLiteralNonInterpolatedNode(
  node: StringLiteralNonInterpolatedNode,
  path: FastPath<StringLiteralNonInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringLiteral.NonInterpolated' is not implemented yet");
}

export function printStringLiteralTemplateNode(
  node: StringLiteralTemplateNode,
  path: FastPath<StringLiteralTemplateNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'StringLiteral.Template' is not implemented yet");
}
