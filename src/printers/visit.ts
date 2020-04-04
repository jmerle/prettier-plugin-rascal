import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printVisitDefaultStrategyNode(
  path: FastPath<VisitDefaultStrategyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Visit.DefaultStrategy' is not implemented yet");
}

export function printVisitGivenStrategyNode(
  path: FastPath<VisitGivenStrategyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Visit.GivenStrategy' is not implemented yet");
}
