import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStatementAppendNode(
  node: StatementAppendNode,
  path: FastPath<StatementAppendNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Append' is not implemented yet");
}

export function printStatementAssertNode(
  node: StatementAssertNode,
  path: FastPath<StatementAssertNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Assert' is not implemented yet");
}

export function printStatementAssertWithMessageNode(
  node: StatementAssertWithMessageNode,
  path: FastPath<StatementAssertWithMessageNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.AssertWithMessage' is not implemented yet");
}

export function printStatementAssignmentNode(
  node: StatementAssignmentNode,
  path: FastPath<StatementAssignmentNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Assignment' is not implemented yet");
}

export function printStatementBreakNode(
  node: StatementBreakNode,
  path: FastPath<StatementBreakNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Break' is not implemented yet");
}

export function printStatementContinueNode(
  node: StatementContinueNode,
  path: FastPath<StatementContinueNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Continue' is not implemented yet");
}

export function printStatementDoWhileNode(
  node: StatementDoWhileNode,
  path: FastPath<StatementDoWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.DoWhile' is not implemented yet");
}

export function printStatementEmptyStatementNode(
  node: StatementEmptyStatementNode,
  path: FastPath<StatementEmptyStatementNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.EmptyStatement' is not implemented yet");
}

export function printStatementExpressionNode(
  node: StatementExpressionNode,
  path: FastPath<StatementExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Expression' is not implemented yet");
}

export function printStatementFailNode(
  node: StatementFailNode,
  path: FastPath<StatementFailNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Fail' is not implemented yet");
}

export function printStatementFilterNode(
  node: StatementFilterNode,
  path: FastPath<StatementFilterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Filter' is not implemented yet");
}

export function printStatementForNode(
  node: StatementForNode,
  path: FastPath<StatementForNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.For' is not implemented yet");
}

export function printStatementFunctionDeclarationNode(
  node: StatementFunctionDeclarationNode,
  path: FastPath<StatementFunctionDeclarationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.FunctionDeclaration' is not implemented yet");
}

export function printStatementGlobalDirectiveNode(
  node: StatementGlobalDirectiveNode,
  path: FastPath<StatementGlobalDirectiveNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.GlobalDirective' is not implemented yet");
}

export function printStatementIfThenNode(
  node: StatementIfThenNode,
  path: FastPath<StatementIfThenNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.IfThen' is not implemented yet");
}

export function printStatementIfThenElseNode(
  node: StatementIfThenElseNode,
  path: FastPath<StatementIfThenElseNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.IfThenElse' is not implemented yet");
}

export function printStatementInsertNode(
  node: StatementInsertNode,
  path: FastPath<StatementInsertNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Insert' is not implemented yet");
}

export function printStatementNonEmptyBlockNode(
  node: StatementNonEmptyBlockNode,
  path: FastPath<StatementNonEmptyBlockNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.NonEmptyBlock' is not implemented yet");
}

export function printStatementReturnNode(
  node: StatementReturnNode,
  path: FastPath<StatementReturnNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Return' is not implemented yet");
}

export function printStatementSolveNode(
  node: StatementSolveNode,
  path: FastPath<StatementSolveNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Solve' is not implemented yet");
}

export function printStatementSwitchNode(
  node: StatementSwitchNode,
  path: FastPath<StatementSwitchNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Switch' is not implemented yet");
}

export function printStatementThrowNode(
  node: StatementThrowNode,
  path: FastPath<StatementThrowNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Throw' is not implemented yet");
}

export function printStatementTryNode(
  node: StatementTryNode,
  path: FastPath<StatementTryNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Try' is not implemented yet");
}

export function printStatementTryFinallyNode(
  node: StatementTryFinallyNode,
  path: FastPath<StatementTryFinallyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.TryFinally' is not implemented yet");
}

export function printStatementVariableDeclarationNode(
  node: StatementVariableDeclarationNode,
  path: FastPath<StatementVariableDeclarationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.VariableDeclaration' is not implemented yet");
}

export function printStatementVisitNode(
  node: StatementVisitNode,
  path: FastPath<StatementVisitNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.Visit' is not implemented yet");
}

export function printStatementWhileNode(
  node: StatementWhileNode,
  path: FastPath<StatementWhileNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Statement.While' is not implemented yet");
}
