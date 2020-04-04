import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStatementAppend(
  path: FastPath<StatementAppendNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Append' is not implemented yet");
}

export function printStatementAssert(
  path: FastPath<StatementAssertNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Assert' is not implemented yet");
}

export function printStatementAssertWithMessage(
  path: FastPath<StatementAssertWithMessageNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.AssertWithMessage' is not implemented yet");
}

export function printStatementAssignment(
  path: FastPath<StatementAssignmentNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Assignment' is not implemented yet");
}

export function printStatementBreak(
  path: FastPath<StatementBreakNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Break' is not implemented yet");
}

export function printStatementContinue(
  path: FastPath<StatementContinueNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Continue' is not implemented yet");
}

export function printStatementDoWhile(
  path: FastPath<StatementDoWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.DoWhile' is not implemented yet");
}

export function printStatementEmptyStatement(
  path: FastPath<StatementEmptyStatementNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.EmptyStatement' is not implemented yet");
}

export function printStatementExpression(
  path: FastPath<StatementExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Expression' is not implemented yet");
}

export function printStatementFail(
  path: FastPath<StatementFailNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Fail' is not implemented yet");
}

export function printStatementFilter(
  path: FastPath<StatementFilterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Filter' is not implemented yet");
}

export function printStatementFor(
  path: FastPath<StatementForNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.For' is not implemented yet");
}

export function printStatementFunctionDeclaration(
  path: FastPath<StatementFunctionDeclarationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.FunctionDeclaration' is not implemented yet");
}

export function printStatementGlobalDirective(
  path: FastPath<StatementGlobalDirectiveNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.GlobalDirective' is not implemented yet");
}

export function printStatementIfThen(
  path: FastPath<StatementIfThenNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.IfThen' is not implemented yet");
}

export function printStatementIfThenElse(
  path: FastPath<StatementIfThenElseNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.IfThenElse' is not implemented yet");
}

export function printStatementInsert(
  path: FastPath<StatementInsertNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Insert' is not implemented yet");
}

export function printStatementNonEmptyBlock(
  path: FastPath<StatementNonEmptyBlockNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.NonEmptyBlock' is not implemented yet");
}

export function printStatementReturn(
  path: FastPath<StatementReturnNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Return' is not implemented yet");
}

export function printStatementSolve(
  path: FastPath<StatementSolveNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Solve' is not implemented yet");
}

export function printStatementSwitch(
  path: FastPath<StatementSwitchNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Switch' is not implemented yet");
}

export function printStatementThrow(
  path: FastPath<StatementThrowNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Throw' is not implemented yet");
}

export function printStatementTry(
  path: FastPath<StatementTryNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Try' is not implemented yet");
}

export function printStatementTryFinally(
  path: FastPath<StatementTryFinallyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.TryFinally' is not implemented yet");
}

export function printStatementVariableDeclaration(
  path: FastPath<StatementVariableDeclarationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.VariableDeclaration' is not implemented yet");
}

export function printStatementVisit(
  path: FastPath<StatementVisitNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.Visit' is not implemented yet");
}

export function printStatementWhile(
  path: FastPath<StatementWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Statement.While' is not implemented yet");
}
