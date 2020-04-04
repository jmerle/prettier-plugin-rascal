import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printEvalCommandDeclarationNode(
  path: FastPath<EvalCommandDeclarationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'EvalCommand.Declaration' is not implemented yet");
}

export function printEvalCommandImportNode(
  path: FastPath<EvalCommandImportNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'EvalCommand.Import' is not implemented yet");
}

export function printEvalCommandOutputNode(
  path: FastPath<EvalCommandOutputNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'EvalCommand.Output' is not implemented yet");
}

export function printEvalCommandStatementNode(
  path: FastPath<EvalCommandStatementNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'EvalCommand.Statement' is not implemented yet");
}
