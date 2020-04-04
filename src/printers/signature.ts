import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printSignatureNoThrows(
  path: FastPath<SignatureNoThrowsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Signature.NoThrows' is not implemented yet");
}

export function printSignatureWithThrows(
  path: FastPath<SignatureWithThrowsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Signature.WithThrows' is not implemented yet");
}
