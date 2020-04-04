import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printShellCommandClear(
  path: FastPath<ShellCommandClearNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.Clear' is not implemented yet");
}

export function printShellCommandEdit(
  path: FastPath<ShellCommandEditNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.Edit' is not implemented yet");
}

export function printShellCommandHelp(
  path: FastPath<ShellCommandHelpNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.Help' is not implemented yet");
}

export function printShellCommandHistory(
  path: FastPath<ShellCommandHistoryNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.History' is not implemented yet");
}

export function printShellCommandListDeclarations(
  path: FastPath<ShellCommandListDeclarationsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.ListDeclarations' is not implemented yet");
}

export function printShellCommandListModules(
  path: FastPath<ShellCommandListModulesNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.ListModules' is not implemented yet");
}

export function printShellCommandQuit(
  path: FastPath<ShellCommandQuitNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.Quit' is not implemented yet");
}

export function printShellCommandSetOption(
  path: FastPath<ShellCommandSetOptionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.SetOption' is not implemented yet");
}

export function printShellCommandTest(
  path: FastPath<ShellCommandTestNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.Test' is not implemented yet");
}

export function printShellCommandUndeclare(
  path: FastPath<ShellCommandUndeclareNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.Undeclare' is not implemented yet");
}

export function printShellCommandUnimport(
  path: FastPath<ShellCommandUnimportNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ShellCommand.Unimport' is not implemented yet");
}
