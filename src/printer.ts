import { Doc, doc, FastPath, ParserOptions } from 'prettier';

const { concat, join, group, indent, line, softline, hardline } = doc.builders;

export function print(path: FastPath<ASTNode>, options: ParserOptions, print: (path: FastPath<ASTNode>) => Doc): Doc {
  const node = path.getValue();

  switch (node._type) {
    case 'Assignable.Annotation':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.Annotation' is not implemented yet");

    case 'Assignable.Bracket':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.Bracket' is not implemented yet");

    case 'Assignable.Constructor':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.Constructor' is not implemented yet");

    case 'Assignable.FieldAccess':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.FieldAccess' is not implemented yet");

    case 'Assignable.IfDefinedOrDefault':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.IfDefinedOrDefault' is not implemented yet");

    case 'Assignable.Slice':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.Slice' is not implemented yet");

    case 'Assignable.SliceStep':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.SliceStep' is not implemented yet");

    case 'Assignable.Subscript':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.Subscript' is not implemented yet");

    case 'Assignable.Tuple':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.Tuple' is not implemented yet");

    case 'Assignable.Variable':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignable.Variable' is not implemented yet");

    case 'Assignment.Addition':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignment.Addition' is not implemented yet");

    case 'Assignment.Append':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignment.Append' is not implemented yet");

    case 'Assignment.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignment.Default' is not implemented yet");

    case 'Assignment.Division':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignment.Division' is not implemented yet");

    case 'Assignment.IfDefined':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignment.IfDefined' is not implemented yet");

    case 'Assignment.Intersection':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignment.Intersection' is not implemented yet");

    case 'Assignment.Product':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignment.Product' is not implemented yet");

    case 'Assignment.Subtraction':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assignment.Subtraction' is not implemented yet");

    case 'Assoc.Associative':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assoc.Associative' is not implemented yet");

    case 'Assoc.Left':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assoc.Left' is not implemented yet");

    case 'Assoc.NonAssociative':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assoc.NonAssociative' is not implemented yet");

    case 'Assoc.Right':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Assoc.Right' is not implemented yet");

    case 'Backslash.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Backslash.Lexical' is not implemented yet");

    case 'BasicType.Bag':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Bag' is not implemented yet");

    case 'BasicType.Bool':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Bool' is not implemented yet");

    case 'BasicType.DateTime':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.DateTime' is not implemented yet");

    case 'BasicType.Int':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Int' is not implemented yet");

    case 'BasicType.List':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.List' is not implemented yet");

    case 'BasicType.ListRelation':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.ListRelation' is not implemented yet");

    case 'BasicType.Loc':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Loc' is not implemented yet");

    case 'BasicType.Map':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Map' is not implemented yet");

    case 'BasicType.Node':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Node' is not implemented yet");

    case 'BasicType.Num':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Num' is not implemented yet");

    case 'BasicType.Rational':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Rational' is not implemented yet");

    case 'BasicType.Real':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Real' is not implemented yet");

    case 'BasicType.Relation':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Relation' is not implemented yet");

    case 'BasicType.Set':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Set' is not implemented yet");

    case 'BasicType.String':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.String' is not implemented yet");

    case 'BasicType.Tuple':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Tuple' is not implemented yet");

    case 'BasicType.Type':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Type' is not implemented yet");

    case 'BasicType.Value':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Value' is not implemented yet");

    case 'BasicType.Void':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BasicType.Void' is not implemented yet");

    case 'Body.Toplevels':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Body.Toplevels' is not implemented yet");

    case 'BooleanLiteral.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'BooleanLiteral.Lexical' is not implemented yet");

    case 'Bound.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Bound.Default' is not implemented yet");

    case 'Bound.Empty':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Bound.Empty' is not implemented yet");

    case 'Case.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Case.Default' is not implemented yet");

    case 'Case.PatternWithAction':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Case.PatternWithAction' is not implemented yet");

    case 'CaseInsensitiveStringConstant.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'CaseInsensitiveStringConstant.Lexical' is not implemented yet");

    case 'Catch.Binding':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Catch.Binding' is not implemented yet");

    case 'Catch.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Catch.Default' is not implemented yet");

    case 'Char.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Char.Lexical' is not implemented yet");

    case 'Class.Bracket':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Class.Bracket' is not implemented yet");

    case 'Class.Complement':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Class.Complement' is not implemented yet");

    case 'Class.Difference':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Class.Difference' is not implemented yet");

    case 'Class.Intersection':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Class.Intersection' is not implemented yet");

    case 'Class.SimpleCharclass':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Class.SimpleCharclass' is not implemented yet");

    case 'Class.Union':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Class.Union' is not implemented yet");

    case 'Command.Declaration':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Command.Declaration' is not implemented yet");

    case 'Command.Expression':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Command.Expression' is not implemented yet");

    case 'Command.Import':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Command.Import' is not implemented yet");

    case 'Command.Shell':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Command.Shell' is not implemented yet");

    case 'Command.Statement':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Command.Statement' is not implemented yet");

    case 'Commands.Commandlist':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Commands.Commandlist' is not implemented yet");

    case 'Comment.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Comment.Lexical' is not implemented yet");

    case 'CommonKeywordParameters.Absent':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'CommonKeywordParameters.Absent' is not implemented yet");

    case 'CommonKeywordParameters.Present':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'CommonKeywordParameters.Present' is not implemented yet");

    case 'Comprehension.List':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Comprehension.List' is not implemented yet");

    case 'Comprehension.Map':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Comprehension.Map' is not implemented yet");

    case 'Comprehension.Set':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Comprehension.Set' is not implemented yet");

    case 'Concrete.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Concrete.Lexical' is not implemented yet");

    case 'ConcreteHole.One':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ConcreteHole.One' is not implemented yet");

    case 'ConcretePart.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ConcretePart.Lexical' is not implemented yet");

    case 'DataTarget.Empty':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'DataTarget.Empty' is not implemented yet");

    case 'DataTarget.Labeled':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'DataTarget.Labeled' is not implemented yet");

    case 'DataTypeSelector.Selector':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'DataTypeSelector.Selector' is not implemented yet");

    case 'DateAndTime.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'DateAndTime.Lexical' is not implemented yet");

    case 'DatePart.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'DatePart.Lexical' is not implemented yet");

    case 'DateTimeLiteral.DateAndTimeLiteral':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'DateTimeLiteral.DateAndTimeLiteral' is not implemented yet");

    case 'DateTimeLiteral.DateLiteral':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'DateTimeLiteral.DateLiteral' is not implemented yet");

    case 'DateTimeLiteral.TimeLiteral':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'DateTimeLiteral.TimeLiteral' is not implemented yet");

    case 'DecimalIntegerLiteral.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'DecimalIntegerLiteral.Lexical' is not implemented yet");

    case 'Declaration.Alias':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Declaration.Alias' is not implemented yet");

    case 'Declaration.Annotation':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Declaration.Annotation' is not implemented yet");

    case 'Declaration.Data':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Declaration.Data' is not implemented yet");

    case 'Declaration.DataAbstract':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Declaration.DataAbstract' is not implemented yet");

    case 'Declaration.Function':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Declaration.Function' is not implemented yet");

    case 'Declaration.Tag':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Declaration.Tag' is not implemented yet");

    case 'Declaration.Variable':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Declaration.Variable' is not implemented yet");

    case 'Declarator.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Declarator.Default' is not implemented yet");

    case 'EvalCommand.Declaration':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'EvalCommand.Declaration' is not implemented yet");

    case 'EvalCommand.Import':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'EvalCommand.Import' is not implemented yet");

    case 'EvalCommand.Output':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'EvalCommand.Output' is not implemented yet");

    case 'EvalCommand.Statement':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'EvalCommand.Statement' is not implemented yet");

    case 'Expression.Addition':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Addition' is not implemented yet");

    case 'Expression.All':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.All' is not implemented yet");

    case 'Expression.And':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.And' is not implemented yet");

    case 'Expression.Anti':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Anti' is not implemented yet");

    case 'Expression.Any':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Any' is not implemented yet");

    case 'Expression.AppendAfter':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.AppendAfter' is not implemented yet");

    case 'Expression.AsType':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.AsType' is not implemented yet");

    case 'Expression.Bracket':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Bracket' is not implemented yet");

    case 'Expression.CallOrTree':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.CallOrTree' is not implemented yet");

    case 'Expression.Closure':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Closure' is not implemented yet");

    case 'Expression.Composition':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Composition' is not implemented yet");

    case 'Expression.Comprehension':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Comprehension' is not implemented yet");

    case 'Expression.Concrete':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Concrete' is not implemented yet");

    case 'Expression.Descendant':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Descendant' is not implemented yet");

    case 'Expression.Division':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Division' is not implemented yet");

    case 'Expression.Enumerator':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Enumerator' is not implemented yet");

    case 'Expression.Equals':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Equals' is not implemented yet");

    case 'Expression.Equivalence':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Equivalence' is not implemented yet");

    case 'Expression.FieldAccess':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.FieldAccess' is not implemented yet");

    case 'Expression.FieldProject':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.FieldProject' is not implemented yet");

    case 'Expression.FieldUpdate':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.FieldUpdate' is not implemented yet");

    case 'Expression.GetAnnotation':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.GetAnnotation' is not implemented yet");

    case 'Expression.GreaterThan':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.GreaterThan' is not implemented yet");

    case 'Expression.GreaterThanOrEq':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.GreaterThanOrEq' is not implemented yet");

    case 'Expression.Has':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Has' is not implemented yet");

    case 'Expression.IfDefinedOtherwise':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.IfDefinedOtherwise' is not implemented yet");

    case 'Expression.IfThenElse':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.IfThenElse' is not implemented yet");

    case 'Expression.Implication':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Implication' is not implemented yet");

    case 'Expression.In':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.In' is not implemented yet");

    case 'Expression.InsertBefore':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.InsertBefore' is not implemented yet");

    case 'Expression.Intersection':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Intersection' is not implemented yet");

    case 'Expression.Is':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Is' is not implemented yet");

    case 'Expression.IsDefined':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.IsDefined' is not implemented yet");

    case 'Expression.It':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.It' is not implemented yet");

    case 'Expression.Join':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Join' is not implemented yet");

    case 'Expression.LessThan':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.LessThan' is not implemented yet");

    case 'Expression.LessThanOrEq':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.LessThanOrEq' is not implemented yet");

    case 'Expression.List':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.List' is not implemented yet");

    case 'Expression.Literal':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Literal' is not implemented yet");

    case 'Expression.Map':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Map' is not implemented yet");

    case 'Expression.Match':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Match' is not implemented yet");

    case 'Expression.Modulo':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Modulo' is not implemented yet");

    case 'Expression.MultiVariable':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.MultiVariable' is not implemented yet");

    case 'Expression.Negation':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Negation' is not implemented yet");

    case 'Expression.Negative':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Negative' is not implemented yet");

    case 'Expression.NoMatch':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.NoMatch' is not implemented yet");

    case 'Expression.NonEmptyBlock':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.NonEmptyBlock' is not implemented yet");

    case 'Expression.NonEquals':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.NonEquals' is not implemented yet");

    case 'Expression.NotIn':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.NotIn' is not implemented yet");

    case 'Expression.Or':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Or' is not implemented yet");

    case 'Expression.Product':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Product' is not implemented yet");

    case 'Expression.QualifiedName':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.QualifiedName' is not implemented yet");

    case 'Expression.Range':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Range' is not implemented yet");

    case 'Expression.Reducer':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Reducer' is not implemented yet");

    case 'Expression.ReifiedType':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.ReifiedType' is not implemented yet");

    case 'Expression.ReifyType':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.ReifyType' is not implemented yet");

    case 'Expression.Remainder':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Remainder' is not implemented yet");

    case 'Expression.Set':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Set' is not implemented yet");

    case 'Expression.SetAnnotation':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.SetAnnotation' is not implemented yet");

    case 'Expression.Slice':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Slice' is not implemented yet");

    case 'Expression.SliceStep':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.SliceStep' is not implemented yet");

    case 'Expression.Splice':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Splice' is not implemented yet");

    case 'Expression.SplicePlus':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.SplicePlus' is not implemented yet");

    case 'Expression.StepRange':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.StepRange' is not implemented yet");

    case 'Expression.Subscript':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Subscript' is not implemented yet");

    case 'Expression.Subtraction':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Subtraction' is not implemented yet");

    case 'Expression.TransitiveClosure':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.TransitiveClosure' is not implemented yet");

    case 'Expression.TransitiveReflexiveClosure':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.TransitiveReflexiveClosure' is not implemented yet");

    case 'Expression.Tuple':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Tuple' is not implemented yet");

    case 'Expression.TypedVariable':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.TypedVariable' is not implemented yet");

    case 'Expression.TypedVariableBecomes':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.TypedVariableBecomes' is not implemented yet");

    case 'Expression.VariableBecomes':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.VariableBecomes' is not implemented yet");

    case 'Expression.Visit':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.Visit' is not implemented yet");

    case 'Expression.VoidClosure':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Expression.VoidClosure' is not implemented yet");

    case 'Field.Index':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Field.Index' is not implemented yet");

    case 'Field.Name':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Field.Name' is not implemented yet");

    case 'Formals.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Formals.Default' is not implemented yet");

    case 'FunctionBody.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionBody.Default' is not implemented yet");

    case 'FunctionDeclaration.Abstract':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionDeclaration.Abstract' is not implemented yet");

    case 'FunctionDeclaration.Conditional':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionDeclaration.Conditional' is not implemented yet");

    case 'FunctionDeclaration.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionDeclaration.Default' is not implemented yet");

    case 'FunctionDeclaration.Expression':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionDeclaration.Expression' is not implemented yet");

    case 'FunctionModifier.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionModifier.Default' is not implemented yet");

    case 'FunctionModifier.Java':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionModifier.Java' is not implemented yet");

    case 'FunctionModifier.Test':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionModifier.Test' is not implemented yet");

    case 'FunctionModifiers.Modifierlist':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionModifiers.Modifierlist' is not implemented yet");

    case 'FunctionType.TypeArguments':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'FunctionType.TypeArguments' is not implemented yet");

    case 'Header.Default':
      console.log(node);
      return concat([
        path.call(print, 'tags'),
        'module ',
        path.call(print, 'name'),
        hardline,
        hardline,
        ...path.map(print, 'imports'),
      ]);

    case 'Header.Parameters':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Header.Parameters' is not implemented yet");

    case 'HexIntegerLiteral.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'HexIntegerLiteral.Lexical' is not implemented yet");

    case 'Import.Default':
      return concat(['import ', path.call(print, 'module'), ';', hardline]);

    case 'Import.Extend':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Import.Extend' is not implemented yet");

    case 'Import.External':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Import.External' is not implemented yet");

    case 'Import.Syntax':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Import.Syntax' is not implemented yet");

    case 'ImportedModule.Actuals':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ImportedModule.Actuals' is not implemented yet");

    case 'ImportedModule.ActualsRenaming':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ImportedModule.ActualsRenaming' is not implemented yet");

    case 'ImportedModule.Default':
      return path.call(print, 'name');

    case 'ImportedModule.Renamings':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ImportedModule.Renamings' is not implemented yet");

    case 'IntegerLiteral.DecimalIntegerLiteral':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'IntegerLiteral.DecimalIntegerLiteral' is not implemented yet");

    case 'IntegerLiteral.HexIntegerLiteral':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'IntegerLiteral.HexIntegerLiteral' is not implemented yet");

    case 'IntegerLiteral.OctalIntegerLiteral':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'IntegerLiteral.OctalIntegerLiteral' is not implemented yet");

    case 'JustDate.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'JustDate.Lexical' is not implemented yet");

    case 'JustTime.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'JustTime.Lexical' is not implemented yet");

    case 'KeywordArgument_Expression.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'KeywordArgument_Expression.Default' is not implemented yet");

    case 'KeywordArguments_Expression.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'KeywordArguments_Expression.Default' is not implemented yet");

    case 'KeywordArguments_Expression.None':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'KeywordArguments_Expression.None' is not implemented yet");

    case 'KeywordFormal.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'KeywordFormal.Default' is not implemented yet");

    case 'KeywordFormals.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'KeywordFormals.Default' is not implemented yet");

    case 'KeywordFormals.None':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'KeywordFormals.None' is not implemented yet");

    case 'Kind.Alias':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Kind.Alias' is not implemented yet");

    case 'Kind.All':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Kind.All' is not implemented yet");

    case 'Kind.Anno':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Kind.Anno' is not implemented yet");

    case 'Kind.Data':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Kind.Data' is not implemented yet");

    case 'Kind.Function':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Kind.Function' is not implemented yet");

    case 'Kind.Module':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Kind.Module' is not implemented yet");

    case 'Kind.Tag':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Kind.Tag' is not implemented yet");

    case 'Kind.Variable':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Kind.Variable' is not implemented yet");

    case 'Kind.View':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Kind.View' is not implemented yet");

    case 'Label.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Label.Default' is not implemented yet");

    case 'Label.Empty':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Label.Empty' is not implemented yet");

    case 'LAYOUT.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'LAYOUT.Lexical' is not implemented yet");

    case 'Literal.Boolean':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Literal.Boolean' is not implemented yet");

    case 'Literal.DateTime':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Literal.DateTime' is not implemented yet");

    case 'Literal.Integer':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Literal.Integer' is not implemented yet");

    case 'Literal.Location':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Literal.Location' is not implemented yet");

    case 'Literal.Rational':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Literal.Rational' is not implemented yet");

    case 'Literal.Real':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Literal.Real' is not implemented yet");

    case 'Literal.RegExp':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Literal.RegExp' is not implemented yet");

    case 'Literal.String':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Literal.String' is not implemented yet");

    case 'LocalVariableDeclaration.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'LocalVariableDeclaration.Default' is not implemented yet");

    case 'LocalVariableDeclaration.Dynamic':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'LocalVariableDeclaration.Dynamic' is not implemented yet");

    case 'LocationLiteral.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'LocationLiteral.Default' is not implemented yet");

    case 'Mapping_Expression.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Mapping_Expression.Default' is not implemented yet");

    case 'MidPathChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'MidPathChars.Lexical' is not implemented yet");

    case 'MidProtocolChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'MidProtocolChars.Lexical' is not implemented yet");

    case 'MidStringChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'MidStringChars.Lexical' is not implemented yet");

    case 'Module.Default':
      return concat([path.call(print, 'header'), path.call(print, 'body')]);

    case 'ModuleActuals.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ModuleActuals.Default' is not implemented yet");

    case 'ModuleParameters.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ModuleParameters.Default' is not implemented yet");

    case 'Name.Lexical':
      return node.string;

    case 'NamedBackslash.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'NamedBackslash.Lexical' is not implemented yet");

    case 'NamedRegExp.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'NamedRegExp.Lexical' is not implemented yet");

    case 'Nonterminal.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Nonterminal.Lexical' is not implemented yet");

    case 'NonterminalLabel.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'NonterminalLabel.Lexical' is not implemented yet");

    case 'OctalIntegerLiteral.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'OctalIntegerLiteral.Lexical' is not implemented yet");

    case 'OptionalComma.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'OptionalComma.Lexical' is not implemented yet");

    case 'OptionalExpression.Expression':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'OptionalExpression.Expression' is not implemented yet");

    case 'OptionalExpression.NoExpression':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'OptionalExpression.NoExpression' is not implemented yet");

    case 'Output.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Output.Lexical' is not implemented yet");

    case 'Parameters.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Parameters.Default' is not implemented yet");

    case 'Parameters.VarArgs':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Parameters.VarArgs' is not implemented yet");

    case 'PathChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PathChars.Lexical' is not implemented yet");

    case 'PathPart.Interpolated':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PathPart.Interpolated' is not implemented yet");

    case 'PathPart.NonInterpolated':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PathPart.NonInterpolated' is not implemented yet");

    case 'PathTail.Mid':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PathTail.Mid' is not implemented yet");

    case 'PathTail.Post':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PathTail.Post' is not implemented yet");

    case 'PatternWithAction.Arbitrary':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PatternWithAction.Arbitrary' is not implemented yet");

    case 'PatternWithAction.Replacing':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PatternWithAction.Replacing' is not implemented yet");

    case 'PostPathChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PostPathChars.Lexical' is not implemented yet");

    case 'PostProtocolChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PostProtocolChars.Lexical' is not implemented yet");

    case 'PostStringChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PostStringChars.Lexical' is not implemented yet");

    case 'PrePathChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PrePathChars.Lexical' is not implemented yet");

    case 'PreProtocolChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PreProtocolChars.Lexical' is not implemented yet");

    case 'PreStringChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'PreStringChars.Lexical' is not implemented yet");

    case 'Prod.All':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Prod.All' is not implemented yet");

    case 'Prod.AssociativityGroup':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Prod.AssociativityGroup' is not implemented yet");

    case 'Prod.First':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Prod.First' is not implemented yet");

    case 'Prod.Labeled':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Prod.Labeled' is not implemented yet");

    case 'Prod.Reference':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Prod.Reference' is not implemented yet");

    case 'Prod.Unlabeled':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Prod.Unlabeled' is not implemented yet");

    case 'ProdModifier.Associativity':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ProdModifier.Associativity' is not implemented yet");

    case 'ProdModifier.Bracket':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ProdModifier.Bracket' is not implemented yet");

    case 'ProdModifier.Tag':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ProdModifier.Tag' is not implemented yet");

    case 'ProtocolChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ProtocolChars.Lexical' is not implemented yet");

    case 'ProtocolPart.Interpolated':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ProtocolPart.Interpolated' is not implemented yet");

    case 'ProtocolPart.NonInterpolated':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ProtocolPart.NonInterpolated' is not implemented yet");

    case 'ProtocolTail.Mid':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ProtocolTail.Mid' is not implemented yet");

    case 'ProtocolTail.Post':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ProtocolTail.Post' is not implemented yet");

    case 'QualifiedName.Default':
      return join('::', path.map(print, 'names'));

    case 'Range.Character':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Range.Character' is not implemented yet");

    case 'Range.FromTo':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Range.FromTo' is not implemented yet");

    case 'RationalLiteral.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'RationalLiteral.Lexical' is not implemented yet");

    case 'RealLiteral.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'RealLiteral.Lexical' is not implemented yet");

    case 'RegExp.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'RegExp.Lexical' is not implemented yet");

    case 'RegExpLiteral.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'RegExpLiteral.Lexical' is not implemented yet");

    case 'RegExpModifier.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'RegExpModifier.Lexical' is not implemented yet");

    case 'Renaming.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Renaming.Default' is not implemented yet");

    case 'Renamings.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Renamings.Default' is not implemented yet");

    case 'Replacement.Conditional':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Replacement.Conditional' is not implemented yet");

    case 'Replacement.Unconditional':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Replacement.Unconditional' is not implemented yet");

    case 'ShellCommand.Clear':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.Clear' is not implemented yet");

    case 'ShellCommand.Edit':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.Edit' is not implemented yet");

    case 'ShellCommand.Help':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.Help' is not implemented yet");

    case 'ShellCommand.History':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.History' is not implemented yet");

    case 'ShellCommand.ListDeclarations':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.ListDeclarations' is not implemented yet");

    case 'ShellCommand.ListModules':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.ListModules' is not implemented yet");

    case 'ShellCommand.Quit':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.Quit' is not implemented yet");

    case 'ShellCommand.SetOption':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.SetOption' is not implemented yet");

    case 'ShellCommand.Test':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.Test' is not implemented yet");

    case 'ShellCommand.Undeclare':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.Undeclare' is not implemented yet");

    case 'ShellCommand.Unimport':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'ShellCommand.Unimport' is not implemented yet");

    case 'Signature.NoThrows':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Signature.NoThrows' is not implemented yet");

    case 'Signature.WithThrows':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Signature.WithThrows' is not implemented yet");

    case 'Start.Absent':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Start.Absent' is not implemented yet");

    case 'Start.Present':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Start.Present' is not implemented yet");

    case 'Statement.Append':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Append' is not implemented yet");

    case 'Statement.Assert':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Assert' is not implemented yet");

    case 'Statement.AssertWithMessage':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.AssertWithMessage' is not implemented yet");

    case 'Statement.Assignment':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Assignment' is not implemented yet");

    case 'Statement.Break':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Break' is not implemented yet");

    case 'Statement.Continue':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Continue' is not implemented yet");

    case 'Statement.DoWhile':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.DoWhile' is not implemented yet");

    case 'Statement.EmptyStatement':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.EmptyStatement' is not implemented yet");

    case 'Statement.Expression':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Expression' is not implemented yet");

    case 'Statement.Fail':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Fail' is not implemented yet");

    case 'Statement.Filter':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Filter' is not implemented yet");

    case 'Statement.For':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.For' is not implemented yet");

    case 'Statement.FunctionDeclaration':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.FunctionDeclaration' is not implemented yet");

    case 'Statement.GlobalDirective':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.GlobalDirective' is not implemented yet");

    case 'Statement.IfThen':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.IfThen' is not implemented yet");

    case 'Statement.IfThenElse':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.IfThenElse' is not implemented yet");

    case 'Statement.Insert':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Insert' is not implemented yet");

    case 'Statement.NonEmptyBlock':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.NonEmptyBlock' is not implemented yet");

    case 'Statement.Return':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Return' is not implemented yet");

    case 'Statement.Solve':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Solve' is not implemented yet");

    case 'Statement.Switch':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Switch' is not implemented yet");

    case 'Statement.Throw':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Throw' is not implemented yet");

    case 'Statement.Try':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Try' is not implemented yet");

    case 'Statement.TryFinally':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.TryFinally' is not implemented yet");

    case 'Statement.VariableDeclaration':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.VariableDeclaration' is not implemented yet");

    case 'Statement.Visit':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.Visit' is not implemented yet");

    case 'Statement.While':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Statement.While' is not implemented yet");

    case 'Strategy.BottomUp':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Strategy.BottomUp' is not implemented yet");

    case 'Strategy.BottomUpBreak':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Strategy.BottomUpBreak' is not implemented yet");

    case 'Strategy.Innermost':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Strategy.Innermost' is not implemented yet");

    case 'Strategy.Outermost':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Strategy.Outermost' is not implemented yet");

    case 'Strategy.TopDown':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Strategy.TopDown' is not implemented yet");

    case 'Strategy.TopDownBreak':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Strategy.TopDownBreak' is not implemented yet");

    case 'StringCharacter.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringCharacter.Lexical' is not implemented yet");

    case 'StringConstant.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringConstant.Lexical' is not implemented yet");

    case 'StringLiteral.Interpolated':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringLiteral.Interpolated' is not implemented yet");

    case 'StringLiteral.NonInterpolated':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringLiteral.NonInterpolated' is not implemented yet");

    case 'StringLiteral.Template':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringLiteral.Template' is not implemented yet");

    case 'StringMiddle.Interpolated':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringMiddle.Interpolated' is not implemented yet");

    case 'StringMiddle.Mid':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringMiddle.Mid' is not implemented yet");

    case 'StringMiddle.Template':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringMiddle.Template' is not implemented yet");

    case 'StringTail.MidInterpolated':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringTail.MidInterpolated' is not implemented yet");

    case 'StringTail.MidTemplate':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringTail.MidTemplate' is not implemented yet");

    case 'StringTail.Post':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringTail.Post' is not implemented yet");

    case 'StringTemplate.DoWhile':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringTemplate.DoWhile' is not implemented yet");

    case 'StringTemplate.For':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringTemplate.For' is not implemented yet");

    case 'StringTemplate.IfThen':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringTemplate.IfThen' is not implemented yet");

    case 'StringTemplate.IfThenElse':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringTemplate.IfThenElse' is not implemented yet");

    case 'StringTemplate.While':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StringTemplate.While' is not implemented yet");

    case 'StructuredType.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'StructuredType.Default' is not implemented yet");

    case 'Sym.Alternative':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Alternative' is not implemented yet");

    case 'Sym.CaseInsensitiveLiteral':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.CaseInsensitiveLiteral' is not implemented yet");

    case 'Sym.CharacterClass':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.CharacterClass' is not implemented yet");

    case 'Sym.Column':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Column' is not implemented yet");

    case 'Sym.Empty':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Empty' is not implemented yet");

    case 'Sym.EndOfLine':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.EndOfLine' is not implemented yet");

    case 'Sym.Except':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Except' is not implemented yet");

    case 'Sym.Follow':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Follow' is not implemented yet");

    case 'Sym.Iter':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Iter' is not implemented yet");

    case 'Sym.IterSep':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.IterSep' is not implemented yet");

    case 'Sym.IterStar':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.IterStar' is not implemented yet");

    case 'Sym.IterStarSep':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.IterStarSep' is not implemented yet");

    case 'Sym.Labeled':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Labeled' is not implemented yet");

    case 'Sym.Literal':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Literal' is not implemented yet");

    case 'Sym.Nonterminal':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Nonterminal' is not implemented yet");

    case 'Sym.NotFollow':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.NotFollow' is not implemented yet");

    case 'Sym.NotPrecede':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.NotPrecede' is not implemented yet");

    case 'Sym.Optional':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Optional' is not implemented yet");

    case 'Sym.Parameter':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Parameter' is not implemented yet");

    case 'Sym.Parametrized':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Parametrized' is not implemented yet");

    case 'Sym.Precede':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Precede' is not implemented yet");

    case 'Sym.Sequence':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Sequence' is not implemented yet");

    case 'Sym.Start':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Start' is not implemented yet");

    case 'Sym.StartOfLine':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.StartOfLine' is not implemented yet");

    case 'Sym.Unequal':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Sym.Unequal' is not implemented yet");

    case 'SyntaxDefinition.Keyword':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'SyntaxDefinition.Keyword' is not implemented yet");

    case 'SyntaxDefinition.Language':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'SyntaxDefinition.Language' is not implemented yet");

    case 'SyntaxDefinition.Layout':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'SyntaxDefinition.Layout' is not implemented yet");

    case 'SyntaxDefinition.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'SyntaxDefinition.Lexical' is not implemented yet");

    case 'Tag.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Tag.Default' is not implemented yet");

    case 'Tag.Empty':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Tag.Empty' is not implemented yet");

    case 'Tag.Expression':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Tag.Expression' is not implemented yet");

    case 'Tags.Default':
      return concat(path.map(print, 'tags'));

    case 'TagString.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'TagString.Lexical' is not implemented yet");

    case 'Target.Empty':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Target.Empty' is not implemented yet");

    case 'Target.Labeled':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Target.Labeled' is not implemented yet");

    case 'TimePartNoTZ.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'TimePartNoTZ.Lexical' is not implemented yet");

    case 'TimeZonePart.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'TimeZonePart.Lexical' is not implemented yet");

    case 'Toplevel.GivenVisibility':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Toplevel.GivenVisibility' is not implemented yet");

    case 'Type.Basic':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Type.Basic' is not implemented yet");

    case 'Type.Bracket':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Type.Bracket' is not implemented yet");

    case 'Type.Function':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Type.Function' is not implemented yet");

    case 'Type.Selector':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Type.Selector' is not implemented yet");

    case 'Type.Structured':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Type.Structured' is not implemented yet");

    case 'Type.Symbol':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Type.Symbol' is not implemented yet");

    case 'Type.User':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Type.User' is not implemented yet");

    case 'Type.Variable':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Type.Variable' is not implemented yet");

    case 'TypeArg.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'TypeArg.Default' is not implemented yet");

    case 'TypeArg.Named':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'TypeArg.Named' is not implemented yet");

    case 'TypeVar.Bounded':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'TypeVar.Bounded' is not implemented yet");

    case 'TypeVar.Free':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'TypeVar.Free' is not implemented yet");

    case 'UnicodeEscape.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'UnicodeEscape.Lexical' is not implemented yet");

    case 'URLChars.Lexical':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'URLChars.Lexical' is not implemented yet");

    case 'UserType.Name':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'UserType.Name' is not implemented yet");

    case 'UserType.Parametric':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'UserType.Parametric' is not implemented yet");

    case 'Variable.Initialized':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Variable.Initialized' is not implemented yet");

    case 'Variable.UnInitialized':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Variable.UnInitialized' is not implemented yet");

    case 'Variant.NAryConstructor':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Variant.NAryConstructor' is not implemented yet");

    case 'Visibility.Default':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Visibility.Default' is not implemented yet");

    case 'Visibility.Private':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Visibility.Private' is not implemented yet");

    case 'Visibility.Public':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Visibility.Public' is not implemented yet");

    case 'Visit.DefaultStrategy':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Visit.DefaultStrategy' is not implemented yet");

    case 'Visit.GivenStrategy':
      // TODO(jmerle): Implement
      console.log(node);
      throw new Error("Node type 'Visit.GivenStrategy' is not implemented yet");
  }
}
