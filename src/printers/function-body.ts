import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printFunctionBodyDefaultNode(
  node: FunctionBodyDefaultNode,
  path: FastPath<FunctionBodyDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionBody.Default' is not implemented yet");
}
