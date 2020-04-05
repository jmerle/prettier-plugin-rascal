import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printSymAlternativeNode(
  node: SymAlternativeNode,
  path: FastPath<SymAlternativeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Alternative' is not implemented yet");
}

export function printSymCaseInsensitiveLiteralNode(
  node: SymCaseInsensitiveLiteralNode,
  path: FastPath<SymCaseInsensitiveLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.CaseInsensitiveLiteral' is not implemented yet");
}

export function printSymCharacterClassNode(
  node: SymCharacterClassNode,
  path: FastPath<SymCharacterClassNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.CharacterClass' is not implemented yet");
}

export function printSymColumnNode(
  node: SymColumnNode,
  path: FastPath<SymColumnNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Column' is not implemented yet");
}

export function printSymEmptyNode(
  node: SymEmptyNode,
  path: FastPath<SymEmptyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Empty' is not implemented yet");
}

export function printSymEndOfLineNode(
  node: SymEndOfLineNode,
  path: FastPath<SymEndOfLineNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.EndOfLine' is not implemented yet");
}

export function printSymExceptNode(
  node: SymExceptNode,
  path: FastPath<SymExceptNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Except' is not implemented yet");
}

export function printSymFollowNode(
  node: SymFollowNode,
  path: FastPath<SymFollowNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Follow' is not implemented yet");
}

export function printSymIterNode(
  node: SymIterNode,
  path: FastPath<SymIterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Iter' is not implemented yet");
}

export function printSymIterSepNode(
  node: SymIterSepNode,
  path: FastPath<SymIterSepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.IterSep' is not implemented yet");
}

export function printSymIterStarNode(
  node: SymIterStarNode,
  path: FastPath<SymIterStarNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.IterStar' is not implemented yet");
}

export function printSymIterStarSepNode(
  node: SymIterStarSepNode,
  path: FastPath<SymIterStarSepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.IterStarSep' is not implemented yet");
}

export function printSymLabeledNode(
  node: SymLabeledNode,
  path: FastPath<SymLabeledNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Labeled' is not implemented yet");
}

export function printSymLiteralNode(
  node: SymLiteralNode,
  path: FastPath<SymLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Literal' is not implemented yet");
}

export function printSymNonterminalNode(
  node: SymNonterminalNode,
  path: FastPath<SymNonterminalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Nonterminal' is not implemented yet");
}

export function printSymNotFollowNode(
  node: SymNotFollowNode,
  path: FastPath<SymNotFollowNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.NotFollow' is not implemented yet");
}

export function printSymNotPrecedeNode(
  node: SymNotPrecedeNode,
  path: FastPath<SymNotPrecedeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.NotPrecede' is not implemented yet");
}

export function printSymOptionalNode(
  node: SymOptionalNode,
  path: FastPath<SymOptionalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Optional' is not implemented yet");
}

export function printSymParameterNode(
  node: SymParameterNode,
  path: FastPath<SymParameterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Parameter' is not implemented yet");
}

export function printSymParametrizedNode(
  node: SymParametrizedNode,
  path: FastPath<SymParametrizedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Parametrized' is not implemented yet");
}

export function printSymPrecedeNode(
  node: SymPrecedeNode,
  path: FastPath<SymPrecedeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Precede' is not implemented yet");
}

export function printSymSequenceNode(
  node: SymSequenceNode,
  path: FastPath<SymSequenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Sequence' is not implemented yet");
}

export function printSymStartNode(
  node: SymStartNode,
  path: FastPath<SymStartNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Start' is not implemented yet");
}

export function printSymStartOfLineNode(
  node: SymStartOfLineNode,
  path: FastPath<SymStartOfLineNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.StartOfLine' is not implemented yet");
}

export function printSymUnequalNode(
  node: SymUnequalNode,
  path: FastPath<SymUnequalNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(node);
  throw new Error("Node type 'Sym.Unequal' is not implemented yet");
}
