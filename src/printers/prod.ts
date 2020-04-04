import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printProdAll(
  path: FastPath<ProdAllNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.All' is not implemented yet");
}

export function printProdAssociativityGroup(
  path: FastPath<ProdAssociativityGroupNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.AssociativityGroup' is not implemented yet");
}

export function printProdFirst(
  path: FastPath<ProdFirstNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.First' is not implemented yet");
}

export function printProdLabeled(
  path: FastPath<ProdLabeledNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.Labeled' is not implemented yet");
}

export function printProdReference(
  path: FastPath<ProdReferenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.Reference' is not implemented yet");
}

export function printProdUnlabeled(
  path: FastPath<ProdUnlabeledNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Prod.Unlabeled' is not implemented yet");
}
