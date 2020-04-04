import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printCaseInsensitiveStringConstantLexical(
  path: FastPath<CaseInsensitiveStringConstantLexicalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'CaseInsensitiveStringConstant.Lexical' is not implemented yet");
}