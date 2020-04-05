import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printOptionalExpressionExpressionNode(
  node: OptionalExpressionExpressionNode,
  path: FastPath<OptionalExpressionExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'OptionalExpression.Expression' is not implemented yet");
}

export function printOptionalExpressionNoExpressionNode(
  node: OptionalExpressionNoExpressionNode,
  path: FastPath<OptionalExpressionNoExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'OptionalExpression.NoExpression' is not implemented yet");
}
