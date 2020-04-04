import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStringLiteralInterpolated(
  path: FastPath<StringLiteralInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringLiteral.Interpolated' is not implemented yet");
}

export function printStringLiteralNonInterpolated(
  path: FastPath<StringLiteralNonInterpolatedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringLiteral.NonInterpolated' is not implemented yet");
}

export function printStringLiteralTemplate(
  path: FastPath<StringLiteralTemplateNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'StringLiteral.Template' is not implemented yet");
}
