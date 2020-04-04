import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printEvalCommandDeclaration(
  path: FastPath<EvalCommandDeclarationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'EvalCommand.Declaration' is not implemented yet");
}

export function printEvalCommandImport(
  path: FastPath<EvalCommandImportNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'EvalCommand.Import' is not implemented yet");
}

export function printEvalCommandOutput(
  path: FastPath<EvalCommandOutputNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'EvalCommand.Output' is not implemented yet");
}

export function printEvalCommandStatement(
  path: FastPath<EvalCommandStatementNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'EvalCommand.Statement' is not implemented yet");
}
