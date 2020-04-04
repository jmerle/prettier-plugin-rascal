import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printKeywordArgument_ExpressionDefault(
  path: FastPath<KeywordArgument_ExpressionDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'KeywordArgument_Expression.Default' is not implemented yet");
}
