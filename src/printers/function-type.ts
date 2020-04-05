import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printFunctionTypeTypeArgumentsNode(
  node: FunctionTypeTypeArgumentsNode,
  path: FastPath<FunctionTypeTypeArgumentsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'FunctionType.TypeArguments' is not implemented yet");
}
