import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printRangeCharacterNode(
  node: RangeCharacterNode,
  path: FastPath<RangeCharacterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Range.Character' is not implemented yet");
}

export function printRangeFromToNode(
  node: RangeFromToNode,
  path: FastPath<RangeFromToNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Range.FromTo' is not implemented yet");
}
