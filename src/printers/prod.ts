import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printProdAllNode(
  path: FastPath<ProdAllNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.All' is not implemented yet");
}

export function printProdAssociativityGroupNode(
  path: FastPath<ProdAssociativityGroupNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.AssociativityGroup' is not implemented yet");
}

export function printProdFirstNode(
  path: FastPath<ProdFirstNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.First' is not implemented yet");
}

export function printProdLabeledNode(
  path: FastPath<ProdLabeledNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.Labeled' is not implemented yet");
}

export function printProdReferenceNode(
  path: FastPath<ProdReferenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.Reference' is not implemented yet");
}

export function printProdUnlabeledNode(
  path: FastPath<ProdUnlabeledNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.Unlabeled' is not implemented yet");
}
