import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printPatternWithActionArbitraryNode(
  node: PatternWithActionArbitraryNode,
  path: FastPath<PatternWithActionArbitraryNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'PatternWithAction.Arbitrary' is not implemented yet");
}

export function printPatternWithActionReplacingNode(
  node: PatternWithActionReplacingNode,
  path: FastPath<PatternWithActionReplacingNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'PatternWithAction.Replacing' is not implemented yet");
}
