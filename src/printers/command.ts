import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printCommandDeclarationNode(
  node: CommandDeclarationNode,
  path: FastPath<CommandDeclarationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Command.Declaration' is not implemented yet");
}

export function printCommandExpressionNode(
  node: CommandExpressionNode,
  path: FastPath<CommandExpressionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Command.Expression' is not implemented yet");
}

export function printCommandImportNode(
  node: CommandImportNode,
  path: FastPath<CommandImportNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Command.Import' is not implemented yet");
}

export function printCommandShellNode(
  node: CommandShellNode,
  path: FastPath<CommandShellNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Command.Shell' is not implemented yet");
}

export function printCommandStatementNode(
  node: CommandStatementNode,
  path: FastPath<CommandStatementNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Command.Statement' is not implemented yet");
}
