import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printKeywordFormalDefaultNode(
  node: KeywordFormalDefaultNode,
  path: FastPath<KeywordFormalDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'KeywordFormal.Default' is not implemented yet");
}
