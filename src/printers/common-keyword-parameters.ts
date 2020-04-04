import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printCommonKeywordParametersAbsentNode(
  path: FastPath<CommonKeywordParametersAbsentNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'CommonKeywordParameters.Absent' is not implemented yet");
}

export function printCommonKeywordParametersPresentNode(
  path: FastPath<CommonKeywordParametersPresentNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'CommonKeywordParameters.Present' is not implemented yet");
}
