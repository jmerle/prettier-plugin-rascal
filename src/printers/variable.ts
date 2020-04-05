import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printVariableInitializedNode(
  node: VariableInitializedNode,
  path: FastPath<VariableInitializedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Variable.Initialized' is not implemented yet");
}

export function printVariableUnInitializedNode(
  node: VariableUnInitializedNode,
  path: FastPath<VariableUnInitializedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Variable.UnInitialized' is not implemented yet");
}
