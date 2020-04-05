import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printProdModifierAssociativityNode(
  node: ProdModifierAssociativityNode,
  path: FastPath<ProdModifierAssociativityNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ProdModifier.Associativity' is not implemented yet");
}

export function printProdModifierBracketNode(
  node: ProdModifierBracketNode,
  path: FastPath<ProdModifierBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ProdModifier.Bracket' is not implemented yet");
}

export function printProdModifierTagNode(
  node: ProdModifierTagNode,
  path: FastPath<ProdModifierTagNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'ProdModifier.Tag' is not implemented yet");
}
