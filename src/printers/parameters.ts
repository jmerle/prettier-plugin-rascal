import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printParametersDefaultNode(
  node: ParametersDefaultNode,
  path: FastPath<ParametersDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Parameters.Default' is not implemented yet");
}

export function printParametersVarArgsNode(
  node: ParametersVarArgsNode,
  path: FastPath<ParametersVarArgsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Parameters.VarArgs' is not implemented yet");
}
