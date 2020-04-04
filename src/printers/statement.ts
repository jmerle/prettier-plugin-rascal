import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStatementAppendNode(
  path: FastPath<StatementAppendNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Append' is not implemented yet");
}

export function printStatementAssertNode(
  path: FastPath<StatementAssertNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Assert' is not implemented yet");
}

export function printStatementAssertWithMessageNode(
  path: FastPath<StatementAssertWithMessageNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.AssertWithMessage' is not implemented yet");
}

export function printStatementAssignmentNode(
  path: FastPath<StatementAssignmentNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Assignment' is not implemented yet");
}

export function printStatementBreakNode(
  path: FastPath<StatementBreakNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Break' is not implemented yet");
}

export function printStatementContinueNode(
  path: FastPath<StatementContinueNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Continue' is not implemented yet");
}

export function printStatementDoWhileNode(
  path: FastPath<StatementDoWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.DoWhile' is not implemented yet");
}

export function printStatementEmptyStatementNode(
  path: FastPath<StatementEmptyStatementNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.EmptyStatement' is not implemented yet");
}

export function printStatementExpressionNode(
  path: FastPath<StatementExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Expression' is not implemented yet");
}

export function printStatementFailNode(
  path: FastPath<StatementFailNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Fail' is not implemented yet");
}

export function printStatementFilterNode(
  path: FastPath<StatementFilterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Filter' is not implemented yet");
}

export function printStatementForNode(
  path: FastPath<StatementForNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.For' is not implemented yet");
}

export function printStatementFunctionDeclarationNode(
  path: FastPath<StatementFunctionDeclarationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.FunctionDeclaration' is not implemented yet");
}

export function printStatementGlobalDirectiveNode(
  path: FastPath<StatementGlobalDirectiveNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.GlobalDirective' is not implemented yet");
}

export function printStatementIfThenNode(
  path: FastPath<StatementIfThenNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.IfThen' is not implemented yet");
}

export function printStatementIfThenElseNode(
  path: FastPath<StatementIfThenElseNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.IfThenElse' is not implemented yet");
}

export function printStatementInsertNode(
  path: FastPath<StatementInsertNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Insert' is not implemented yet");
}

export function printStatementNonEmptyBlockNode(
  path: FastPath<StatementNonEmptyBlockNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.NonEmptyBlock' is not implemented yet");
}

export function printStatementReturnNode(
  path: FastPath<StatementReturnNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Return' is not implemented yet");
}

export function printStatementSolveNode(
  path: FastPath<StatementSolveNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Solve' is not implemented yet");
}

export function printStatementSwitchNode(
  path: FastPath<StatementSwitchNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Switch' is not implemented yet");
}

export function printStatementThrowNode(
  path: FastPath<StatementThrowNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Throw' is not implemented yet");
}

export function printStatementTryNode(
  path: FastPath<StatementTryNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Try' is not implemented yet");
}

export function printStatementTryFinallyNode(
  path: FastPath<StatementTryFinallyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.TryFinally' is not implemented yet");
}

export function printStatementVariableDeclarationNode(
  path: FastPath<StatementVariableDeclarationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.VariableDeclaration' is not implemented yet");
}

export function printStatementVisitNode(
  path: FastPath<StatementVisitNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Visit' is not implemented yet");
}

export function printStatementWhileNode(
  path: FastPath<StatementWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.While' is not implemented yet");
}
