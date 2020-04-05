import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printImportDefaultNode(
  node: ImportDefaultNode,
  path: FastPath<ImportDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Import.Default' is not implemented yet");
}

export function printImportExtendNode(
  node: ImportExtendNode,
  path: FastPath<ImportExtendNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Import.Extend' is not implemented yet");
}

export function printImportExternalNode(
  node: ImportExternalNode,
  path: FastPath<ImportExternalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Import.External' is not implemented yet");
}

export function printImportSyntaxNode(
  node: ImportSyntaxNode,
  path: FastPath<ImportSyntaxNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Import.Syntax' is not implemented yet");
}
