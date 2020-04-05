import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStrategyBottomUpNode(
  node: StrategyBottomUpNode,
  path: FastPath<StrategyBottomUpNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Strategy.BottomUp' is not implemented yet");
}

export function printStrategyBottomUpBreakNode(
  node: StrategyBottomUpBreakNode,
  path: FastPath<StrategyBottomUpBreakNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Strategy.BottomUpBreak' is not implemented yet");
}

export function printStrategyInnermostNode(
  node: StrategyInnermostNode,
  path: FastPath<StrategyInnermostNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Strategy.Innermost' is not implemented yet");
}

export function printStrategyOutermostNode(
  node: StrategyOutermostNode,
  path: FastPath<StrategyOutermostNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Strategy.Outermost' is not implemented yet");
}

export function printStrategyTopDownNode(
  node: StrategyTopDownNode,
  path: FastPath<StrategyTopDownNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Strategy.TopDown' is not implemented yet");
}

export function printStrategyTopDownBreakNode(
  node: StrategyTopDownBreakNode,
  path: FastPath<StrategyTopDownBreakNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Strategy.TopDownBreak' is not implemented yet");
}
