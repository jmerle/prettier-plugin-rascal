import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printShellCommandClearNode(
  node: ShellCommandClearNode,
  path: FastPath<ShellCommandClearNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.Clear' is not implemented yet");
}

export function printShellCommandEditNode(
  node: ShellCommandEditNode,
  path: FastPath<ShellCommandEditNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.Edit' is not implemented yet");
}

export function printShellCommandHelpNode(
  node: ShellCommandHelpNode,
  path: FastPath<ShellCommandHelpNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.Help' is not implemented yet");
}

export function printShellCommandHistoryNode(
  node: ShellCommandHistoryNode,
  path: FastPath<ShellCommandHistoryNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.History' is not implemented yet");
}

export function printShellCommandListDeclarationsNode(
  node: ShellCommandListDeclarationsNode,
  path: FastPath<ShellCommandListDeclarationsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.ListDeclarations' is not implemented yet");
}

export function printShellCommandListModulesNode(
  node: ShellCommandListModulesNode,
  path: FastPath<ShellCommandListModulesNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.ListModules' is not implemented yet");
}

export function printShellCommandQuitNode(
  node: ShellCommandQuitNode,
  path: FastPath<ShellCommandQuitNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.Quit' is not implemented yet");
}

export function printShellCommandSetOptionNode(
  node: ShellCommandSetOptionNode,
  path: FastPath<ShellCommandSetOptionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.SetOption' is not implemented yet");
}

export function printShellCommandTestNode(
  node: ShellCommandTestNode,
  path: FastPath<ShellCommandTestNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.Test' is not implemented yet");
}

export function printShellCommandUndeclareNode(
  node: ShellCommandUndeclareNode,
  path: FastPath<ShellCommandUndeclareNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.Undeclare' is not implemented yet");
}

export function printShellCommandUnimportNode(
  node: ShellCommandUnimportNode,
  path: FastPath<ShellCommandUnimportNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ShellCommand.Unimport' is not implemented yet");
}
