import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printOptionalExpressionExpression(
  path: FastPath<OptionalExpressionExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'OptionalExpression.Expression' is not implemented yet");
}

export function printOptionalExpressionNoExpression(
  path: FastPath<OptionalExpressionNoExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'OptionalExpression.NoExpression' is not implemented yet");
}
