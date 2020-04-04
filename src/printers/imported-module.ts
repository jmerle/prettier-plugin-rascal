import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printImportedModuleActuals(
  path: FastPath<ImportedModuleActualsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ImportedModule.Actuals' is not implemented yet");
}

export function printImportedModuleActualsRenaming(
  path: FastPath<ImportedModuleActualsRenamingNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ImportedModule.ActualsRenaming' is not implemented yet");
}

export function printImportedModuleDefault(
  path: FastPath<ImportedModuleDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ImportedModule.Default' is not implemented yet");
}

export function printImportedModuleRenamings(
  path: FastPath<ImportedModuleRenamingsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'ImportedModule.Renamings' is not implemented yet");
}
