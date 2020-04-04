import { doc, Doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function printExpressionAdditionNode(
  path: FastPath<ExpressionAdditionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Addition' is not implemented yet");
}

export function printExpressionAllNode(
  path: FastPath<ExpressionAllNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.All' is not implemented yet");
}

export function printExpressionAndNode(
  path: FastPath<ExpressionAndNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.And' is not implemented yet");
}

export function printExpressionAntiNode(
  path: FastPath<ExpressionAntiNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Anti' is not implemented yet");
}

export function printExpressionAnyNode(
  path: FastPath<ExpressionAnyNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Any' is not implemented yet");
}

export function printExpressionAppendAfterNode(
  path: FastPath<ExpressionAppendAfterNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.AppendAfter' is not implemented yet");
}

export function printExpressionAsTypeNode(
  path: FastPath<ExpressionAsTypeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.AsType' is not implemented yet");
}

export function printExpressionBracketNode(
  path: FastPath<ExpressionBracketNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Bracket' is not implemented yet");
}

export function printExpressionCallOrTreeNode(
  path: FastPath<ExpressionCallOrTreeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.CallOrTree' is not implemented yet");
}

export function printExpressionClosureNode(
  path: FastPath<ExpressionClosureNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Closure' is not implemented yet");
}

export function printExpressionCompositionNode(
  path: FastPath<ExpressionCompositionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Composition' is not implemented yet");
}

export function printExpressionComprehensionNode(
  path: FastPath<ExpressionComprehensionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Comprehension' is not implemented yet");
}

export function printExpressionConcreteNode(
  path: FastPath<ExpressionConcreteNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Concrete' is not implemented yet");
}

export function printExpressionDescendantNode(
  path: FastPath<ExpressionDescendantNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Descendant' is not implemented yet");
}

export function printExpressionDivisionNode(
  path: FastPath<ExpressionDivisionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Division' is not implemented yet");
}

export function printExpressionEnumeratorNode(
  path: FastPath<ExpressionEnumeratorNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Enumerator' is not implemented yet");
}

export function printExpressionEqualsNode(
  path: FastPath<ExpressionEqualsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Equals' is not implemented yet");
}

export function printExpressionEquivalenceNode(
  path: FastPath<ExpressionEquivalenceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Equivalence' is not implemented yet");
}

export function printExpressionFieldAccessNode(
  path: FastPath<ExpressionFieldAccessNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.FieldAccess' is not implemented yet");
}

export function printExpressionFieldProjectNode(
  path: FastPath<ExpressionFieldProjectNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.FieldProject' is not implemented yet");
}

export function printExpressionFieldUpdateNode(
  path: FastPath<ExpressionFieldUpdateNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.FieldUpdate' is not implemented yet");
}

export function printExpressionGetAnnotationNode(
  path: FastPath<ExpressionGetAnnotationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.GetAnnotation' is not implemented yet");
}

export function printExpressionGreaterThanNode(
  path: FastPath<ExpressionGreaterThanNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.GreaterThan' is not implemented yet");
}

export function printExpressionGreaterThanOrEqNode(
  path: FastPath<ExpressionGreaterThanOrEqNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.GreaterThanOrEq' is not implemented yet");
}

export function printExpressionHasNode(
  path: FastPath<ExpressionHasNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Has' is not implemented yet");
}

export function printExpressionIfDefinedOtherwiseNode(
  path: FastPath<ExpressionIfDefinedOtherwiseNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.IfDefinedOtherwise' is not implemented yet");
}

export function printExpressionIfThenElseNode(
  path: FastPath<ExpressionIfThenElseNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.IfThenElse' is not implemented yet");
}

export function printExpressionImplicationNode(
  path: FastPath<ExpressionImplicationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Implication' is not implemented yet");
}

export function printExpressionInNode(
  path: FastPath<ExpressionInNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.In' is not implemented yet");
}

export function printExpressionInsertBeforeNode(
  path: FastPath<ExpressionInsertBeforeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.InsertBefore' is not implemented yet");
}

export function printExpressionIntersectionNode(
  path: FastPath<ExpressionIntersectionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Intersection' is not implemented yet");
}

export function printExpressionIsNode(
  path: FastPath<ExpressionIsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Is' is not implemented yet");
}

export function printExpressionIsDefinedNode(
  path: FastPath<ExpressionIsDefinedNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.IsDefined' is not implemented yet");
}

export function printExpressionItNode(
  path: FastPath<ExpressionItNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.It' is not implemented yet");
}

export function printExpressionJoinNode(
  path: FastPath<ExpressionJoinNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Join' is not implemented yet");
}

export function printExpressionLessThanNode(
  path: FastPath<ExpressionLessThanNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.LessThan' is not implemented yet");
}

export function printExpressionLessThanOrEqNode(
  path: FastPath<ExpressionLessThanOrEqNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.LessThanOrEq' is not implemented yet");
}

export function printExpressionListNode(
  path: FastPath<ExpressionListNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.List' is not implemented yet");
}

export function printExpressionLiteralNode(
  path: FastPath<ExpressionLiteralNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Literal' is not implemented yet");
}

export function printExpressionMapNode(
  path: FastPath<ExpressionMapNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Map' is not implemented yet");
}

export function printExpressionMatchNode(
  path: FastPath<ExpressionMatchNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Match' is not implemented yet");
}

export function printExpressionModuloNode(
  path: FastPath<ExpressionModuloNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Modulo' is not implemented yet");
}

export function printExpressionMultiVariableNode(
  path: FastPath<ExpressionMultiVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.MultiVariable' is not implemented yet");
}

export function printExpressionNegationNode(
  path: FastPath<ExpressionNegationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Negation' is not implemented yet");
}

export function printExpressionNegativeNode(
  path: FastPath<ExpressionNegativeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Negative' is not implemented yet");
}

export function printExpressionNoMatchNode(
  path: FastPath<ExpressionNoMatchNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.NoMatch' is not implemented yet");
}

export function printExpressionNonEmptyBlockNode(
  path: FastPath<ExpressionNonEmptyBlockNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.NonEmptyBlock' is not implemented yet");
}

export function printExpressionNonEqualsNode(
  path: FastPath<ExpressionNonEqualsNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.NonEquals' is not implemented yet");
}

export function printExpressionNotInNode(
  path: FastPath<ExpressionNotInNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.NotIn' is not implemented yet");
}

export function printExpressionOrNode(
  path: FastPath<ExpressionOrNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Or' is not implemented yet");
}

export function printExpressionProductNode(
  path: FastPath<ExpressionProductNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Product' is not implemented yet");
}

export function printExpressionQualifiedNameNode(
  path: FastPath<ExpressionQualifiedNameNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.QualifiedName' is not implemented yet");
}

export function printExpressionRangeNode(
  path: FastPath<ExpressionRangeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Range' is not implemented yet");
}

export function printExpressionReducerNode(
  path: FastPath<ExpressionReducerNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Reducer' is not implemented yet");
}

export function printExpressionReifiedTypeNode(
  path: FastPath<ExpressionReifiedTypeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.ReifiedType' is not implemented yet");
}

export function printExpressionReifyTypeNode(
  path: FastPath<ExpressionReifyTypeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.ReifyType' is not implemented yet");
}

export function printExpressionRemainderNode(
  path: FastPath<ExpressionRemainderNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Remainder' is not implemented yet");
}

export function printExpressionSetNode(
  path: FastPath<ExpressionSetNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Set' is not implemented yet");
}

export function printExpressionSetAnnotationNode(
  path: FastPath<ExpressionSetAnnotationNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.SetAnnotation' is not implemented yet");
}

export function printExpressionSliceNode(
  path: FastPath<ExpressionSliceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Slice' is not implemented yet");
}

export function printExpressionSliceStepNode(
  path: FastPath<ExpressionSliceStepNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.SliceStep' is not implemented yet");
}

export function printExpressionSpliceNode(
  path: FastPath<ExpressionSpliceNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Splice' is not implemented yet");
}

export function printExpressionSplicePlusNode(
  path: FastPath<ExpressionSplicePlusNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.SplicePlus' is not implemented yet");
}

export function printExpressionStepRangeNode(
  path: FastPath<ExpressionStepRangeNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.StepRange' is not implemented yet");
}

export function printExpressionSubscriptNode(
  path: FastPath<ExpressionSubscriptNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Subscript' is not implemented yet");
}

export function printExpressionSubtractionNode(
  path: FastPath<ExpressionSubtractionNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Subtraction' is not implemented yet");
}

export function printExpressionTransitiveClosureNode(
  path: FastPath<ExpressionTransitiveClosureNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.TransitiveClosure' is not implemented yet");
}

export function printExpressionTransitiveReflexiveClosureNode(
  path: FastPath<ExpressionTransitiveReflexiveClosureNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.TransitiveReflexiveClosure' is not implemented yet");
}

export function printExpressionTupleNode(
  path: FastPath<ExpressionTupleNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Tuple' is not implemented yet");
}

export function printExpressionTypedVariableNode(
  path: FastPath<ExpressionTypedVariableNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.TypedVariable' is not implemented yet");
}

export function printExpressionTypedVariableBecomesNode(
  path: FastPath<ExpressionTypedVariableBecomesNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.TypedVariableBecomes' is not implemented yet");
}

export function printExpressionVariableBecomesNode(
  path: FastPath<ExpressionVariableBecomesNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.VariableBecomes' is not implemented yet");
}

export function printExpressionVisitNode(
  path: FastPath<ExpressionVisitNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.Visit' is not implemented yet");
}

export function printExpressionVoidClosureNode(
  path: FastPath<ExpressionVoidClosureNode>,
  options: ParserOptions,
  print: (path: FastPath<ASTNode>) => Doc,
): Doc {
  // TODO(jmerle): Implement
  console.log(path.getValue());
  throw new Error("Node type 'Expression.VoidClosure' is not implemented yet");
}
