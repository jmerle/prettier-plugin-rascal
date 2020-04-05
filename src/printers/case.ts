import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printCaseDefaultNode(
  node: CaseDefaultNode,
  path: FastPath<CaseDefaultNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Case.Default' is not implemented yet");
}

export function printCasePatternWithActionNode(
  node: CasePatternWithActionNode,
  path: FastPath<CasePatternWithActionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Case.PatternWithAction' is not implemented yet");
}
