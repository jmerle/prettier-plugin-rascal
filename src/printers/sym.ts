import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printSymAlternativeNode(
  path: FastPath<SymAlternativeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Alternative' is not implemented yet");
}

export function printSymCaseInsensitiveLiteralNode(
  path: FastPath<SymCaseInsensitiveLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.CaseInsensitiveLiteral' is not implemented yet");
}

export function printSymCharacterClassNode(
  path: FastPath<SymCharacterClassNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.CharacterClass' is not implemented yet");
}

export function printSymColumnNode(
  path: FastPath<SymColumnNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Column' is not implemented yet");
}

export function printSymEmptyNode(
  path: FastPath<SymEmptyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Empty' is not implemented yet");
}

export function printSymEndOfLineNode(
  path: FastPath<SymEndOfLineNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.EndOfLine' is not implemented yet");
}

export function printSymExceptNode(
  path: FastPath<SymExceptNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Except' is not implemented yet");
}

export function printSymFollowNode(
  path: FastPath<SymFollowNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Follow' is not implemented yet");
}

export function printSymIterNode(
  path: FastPath<SymIterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Iter' is not implemented yet");
}

export function printSymIterSepNode(
  path: FastPath<SymIterSepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.IterSep' is not implemented yet");
}

export function printSymIterStarNode(
  path: FastPath<SymIterStarNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.IterStar' is not implemented yet");
}

export function printSymIterStarSepNode(
  path: FastPath<SymIterStarSepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.IterStarSep' is not implemented yet");
}

export function printSymLabeledNode(
  path: FastPath<SymLabeledNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Labeled' is not implemented yet");
}

export function printSymLiteralNode(
  path: FastPath<SymLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Literal' is not implemented yet");
}

export function printSymNonterminalNode(
  path: FastPath<SymNonterminalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Nonterminal' is not implemented yet");
}

export function printSymNotFollowNode(
  path: FastPath<SymNotFollowNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.NotFollow' is not implemented yet");
}

export function printSymNotPrecedeNode(
  path: FastPath<SymNotPrecedeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.NotPrecede' is not implemented yet");
}

export function printSymOptionalNode(
  path: FastPath<SymOptionalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Optional' is not implemented yet");
}

export function printSymParameterNode(
  path: FastPath<SymParameterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Parameter' is not implemented yet");
}

export function printSymParametrizedNode(
  path: FastPath<SymParametrizedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Parametrized' is not implemented yet");
}

export function printSymPrecedeNode(
  path: FastPath<SymPrecedeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Precede' is not implemented yet");
}

export function printSymSequenceNode(
  path: FastPath<SymSequenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Sequence' is not implemented yet");
}

export function printSymStartNode(
  path: FastPath<SymStartNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Start' is not implemented yet");
}

export function printSymStartOfLineNode(
  path: FastPath<SymStartOfLineNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.StartOfLine' is not implemented yet");
}

export function printSymUnequalNode(
  path: FastPath<SymUnequalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Sym.Unequal' is not implemented yet");
}
