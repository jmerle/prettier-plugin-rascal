import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printStrategyBottomUpNode(
  path: FastPath<StrategyBottomUpNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Strategy.BottomUp' is not implemented yet");
}

export function printStrategyBottomUpBreakNode(
  path: FastPath<StrategyBottomUpBreakNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Strategy.BottomUpBreak' is not implemented yet");
}

export function printStrategyInnermostNode(
  path: FastPath<StrategyInnermostNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Strategy.Innermost' is not implemented yet");
}

export function printStrategyOutermostNode(
  path: FastPath<StrategyOutermostNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Strategy.Outermost' is not implemented yet");
}

export function printStrategyTopDownNode(
  path: FastPath<StrategyTopDownNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Strategy.TopDown' is not implemented yet");
}

export function printStrategyTopDownBreakNode(
  path: FastPath<StrategyTopDownBreakNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Strategy.TopDownBreak' is not implemented yet");
}
