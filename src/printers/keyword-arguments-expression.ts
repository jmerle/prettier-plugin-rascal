import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printKeywordArguments_ExpressionDefault(
  path: FastPath<KeywordArguments_ExpressionDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'KeywordArguments_Expression.Default' is not implemented yet");
}

export function printKeywordArguments_ExpressionNone(
  path: FastPath<KeywordArguments_ExpressionNoneNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'KeywordArguments_Expression.None' is not implemented yet");
}
