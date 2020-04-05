import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printCommandsCommandlistNode(
  node: CommandsCommandlistNode,
  path: FastPath<CommandsCommandlistNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Commands.Commandlist' is not implemented yet");
}
