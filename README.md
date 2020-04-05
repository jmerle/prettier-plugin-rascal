# Prettier for Rascal

[![Build Status](https://dev.azure.com/jmerle/prettier-plugin-rascal/_apis/build/status/Build?branchName=master)](https://dev.azure.com/jmerle/prettier-plugin-rascal/_build/latest?definitionId=27&branchName=master)
[![Test Results](https://img.shields.io/azure-devops/tests/jmerle/prettier-plugin-rascal/27/master)](https://dev.azure.com/jmerle/prettier-plugin-rascal/_build/latest?definitionId=27&branchName=master)
[![Test Coverage](https://img.shields.io/azure-devops/coverage/jmerle/prettier-plugin-rascal/27/master)](https://dev.azure.com/jmerle/prettier-plugin-rascal/_build/latest?definitionId=27&branchName=master)
[![Version](https://img.shields.io/npm/v/prettier-plugin-rascal.svg)](https://npmjs.org/package/prettier-plugin-rascal)
[![License](https://img.shields.io/npm/l/prettier-plugin-rascal.svg)](https://github.com/jmerle/prettier-plugin-rascal/blob/master/LICENSE)

**Uh-oh, it took me a while before I realised that converting Rascal code to an AST to formatted Rascal code is kind of a bad idea because an AST contains no information about comments or newlines, thereby causing valuable contextual information to get lost in the conversion. This project is no longer being worked on.**

Format Rascal code using Prettier.

~~This project is a work-in-progress. I have no idea whether I will ever finish it, but it's a fun side project at the time of writing this.~~

Implemented printers by node type (1/412):
- [ ] [Assignable.Annotation](./src/printers/assignable.ts)
- [ ] [Assignable.Bracket](./src/printers/assignable.ts)
- [ ] [Assignable.Constructor](./src/printers/assignable.ts)
- [ ] [Assignable.FieldAccess](./src/printers/assignable.ts)
- [ ] [Assignable.IfDefinedOrDefault](./src/printers/assignable.ts)
- [ ] [Assignable.Slice](./src/printers/assignable.ts)
- [ ] [Assignable.SliceStep](./src/printers/assignable.ts)
- [ ] [Assignable.Subscript](./src/printers/assignable.ts)
- [ ] [Assignable.Tuple](./src/printers/assignable.ts)
- [ ] [Assignable.Variable](./src/printers/assignable.ts)
- [ ] [Assignment.Addition](./src/printers/assignment.ts)
- [ ] [Assignment.Append](./src/printers/assignment.ts)
- [ ] [Assignment.Default](./src/printers/assignment.ts)
- [ ] [Assignment.Division](./src/printers/assignment.ts)
- [ ] [Assignment.IfDefined](./src/printers/assignment.ts)
- [ ] [Assignment.Intersection](./src/printers/assignment.ts)
- [ ] [Assignment.Product](./src/printers/assignment.ts)
- [ ] [Assignment.Subtraction](./src/printers/assignment.ts)
- [ ] [Assoc.Associative](./src/printers/assoc.ts)
- [ ] [Assoc.Left](./src/printers/assoc.ts)
- [ ] [Assoc.NonAssociative](./src/printers/assoc.ts)
- [ ] [Assoc.Right](./src/printers/assoc.ts)
- [ ] [Backslash.Lexical](./src/printers/backslash.ts)
- [ ] [BasicType.Bag](./src/printers/basic-type.ts)
- [ ] [BasicType.Bool](./src/printers/basic-type.ts)
- [ ] [BasicType.DateTime](./src/printers/basic-type.ts)
- [ ] [BasicType.Int](./src/printers/basic-type.ts)
- [ ] [BasicType.List](./src/printers/basic-type.ts)
- [ ] [BasicType.ListRelation](./src/printers/basic-type.ts)
- [ ] [BasicType.Loc](./src/printers/basic-type.ts)
- [ ] [BasicType.Map](./src/printers/basic-type.ts)
- [ ] [BasicType.Node](./src/printers/basic-type.ts)
- [ ] [BasicType.Num](./src/printers/basic-type.ts)
- [ ] [BasicType.Rational](./src/printers/basic-type.ts)
- [ ] [BasicType.Real](./src/printers/basic-type.ts)
- [ ] [BasicType.Relation](./src/printers/basic-type.ts)
- [ ] [BasicType.Set](./src/printers/basic-type.ts)
- [ ] [BasicType.String](./src/printers/basic-type.ts)
- [ ] [BasicType.Tuple](./src/printers/basic-type.ts)
- [ ] [BasicType.Type](./src/printers/basic-type.ts)
- [ ] [BasicType.Value](./src/printers/basic-type.ts)
- [ ] [BasicType.Void](./src/printers/basic-type.ts)
- [ ] [Body.Toplevels](./src/printers/body.ts)
- [ ] [BooleanLiteral.Lexical](./src/printers/boolean-literal.ts)
- [ ] [Bound.Default](./src/printers/bound.ts)
- [ ] [Bound.Empty](./src/printers/bound.ts)
- [ ] [Case.Default](./src/printers/case.ts)
- [ ] [Case.PatternWithAction](./src/printers/case.ts)
- [ ] [CaseInsensitiveStringConstant.Lexical](./src/printers/case-insensitive-string-constant.ts)
- [ ] [Catch.Binding](./src/printers/catch.ts)
- [ ] [Catch.Default](./src/printers/catch.ts)
- [ ] [Char.Lexical](./src/printers/char.ts)
- [ ] [Class.Bracket](./src/printers/class.ts)
- [ ] [Class.Complement](./src/printers/class.ts)
- [ ] [Class.Difference](./src/printers/class.ts)
- [ ] [Class.Intersection](./src/printers/class.ts)
- [ ] [Class.SimpleCharclass](./src/printers/class.ts)
- [ ] [Class.Union](./src/printers/class.ts)
- [ ] [Command.Declaration](./src/printers/command.ts)
- [ ] [Command.Expression](./src/printers/command.ts)
- [ ] [Command.Import](./src/printers/command.ts)
- [ ] [Command.Shell](./src/printers/command.ts)
- [ ] [Command.Statement](./src/printers/command.ts)
- [ ] [Commands.Commandlist](./src/printers/commands.ts)
- [ ] [Comment.Lexical](./src/printers/comment.ts)
- [ ] [CommonKeywordParameters.Absent](./src/printers/common-keyword-parameters.ts)
- [ ] [CommonKeywordParameters.Present](./src/printers/common-keyword-parameters.ts)
- [ ] [Comprehension.List](./src/printers/comprehension.ts)
- [ ] [Comprehension.Map](./src/printers/comprehension.ts)
- [ ] [Comprehension.Set](./src/printers/comprehension.ts)
- [ ] [Concrete.Lexical](./src/printers/concrete.ts)
- [ ] [ConcreteHole.One](./src/printers/concrete-hole.ts)
- [ ] [ConcretePart.Lexical](./src/printers/concrete-part.ts)
- [ ] [DataTarget.Empty](./src/printers/data-target.ts)
- [ ] [DataTarget.Labeled](./src/printers/data-target.ts)
- [ ] [DataTypeSelector.Selector](./src/printers/data-type-selector.ts)
- [ ] [DateAndTime.Lexical](./src/printers/date-and-time.ts)
- [ ] [DatePart.Lexical](./src/printers/date-part.ts)
- [ ] [DateTimeLiteral.DateAndTimeLiteral](./src/printers/date-time-literal.ts)
- [ ] [DateTimeLiteral.DateLiteral](./src/printers/date-time-literal.ts)
- [ ] [DateTimeLiteral.TimeLiteral](./src/printers/date-time-literal.ts)
- [ ] [DecimalIntegerLiteral.Lexical](./src/printers/decimal-integer-literal.ts)
- [ ] [Declaration.Alias](./src/printers/declaration.ts)
- [ ] [Declaration.Annotation](./src/printers/declaration.ts)
- [ ] [Declaration.Data](./src/printers/declaration.ts)
- [ ] [Declaration.DataAbstract](./src/printers/declaration.ts)
- [ ] [Declaration.Function](./src/printers/declaration.ts)
- [ ] [Declaration.Tag](./src/printers/declaration.ts)
- [ ] [Declaration.Variable](./src/printers/declaration.ts)
- [ ] [Declarator.Default](./src/printers/declarator.ts)
- [ ] [EvalCommand.Declaration](./src/printers/eval-command.ts)
- [ ] [EvalCommand.Import](./src/printers/eval-command.ts)
- [ ] [EvalCommand.Output](./src/printers/eval-command.ts)
- [ ] [EvalCommand.Statement](./src/printers/eval-command.ts)
- [ ] [Expression.Addition](./src/printers/expression.ts)
- [ ] [Expression.All](./src/printers/expression.ts)
- [ ] [Expression.And](./src/printers/expression.ts)
- [ ] [Expression.Anti](./src/printers/expression.ts)
- [ ] [Expression.Any](./src/printers/expression.ts)
- [ ] [Expression.AppendAfter](./src/printers/expression.ts)
- [ ] [Expression.AsType](./src/printers/expression.ts)
- [ ] [Expression.Bracket](./src/printers/expression.ts)
- [ ] [Expression.CallOrTree](./src/printers/expression.ts)
- [ ] [Expression.Closure](./src/printers/expression.ts)
- [ ] [Expression.Composition](./src/printers/expression.ts)
- [ ] [Expression.Comprehension](./src/printers/expression.ts)
- [ ] [Expression.Concrete](./src/printers/expression.ts)
- [ ] [Expression.Descendant](./src/printers/expression.ts)
- [ ] [Expression.Division](./src/printers/expression.ts)
- [ ] [Expression.Enumerator](./src/printers/expression.ts)
- [ ] [Expression.Equals](./src/printers/expression.ts)
- [ ] [Expression.Equivalence](./src/printers/expression.ts)
- [ ] [Expression.FieldAccess](./src/printers/expression.ts)
- [ ] [Expression.FieldProject](./src/printers/expression.ts)
- [ ] [Expression.FieldUpdate](./src/printers/expression.ts)
- [ ] [Expression.GetAnnotation](./src/printers/expression.ts)
- [ ] [Expression.GreaterThan](./src/printers/expression.ts)
- [ ] [Expression.GreaterThanOrEq](./src/printers/expression.ts)
- [ ] [Expression.Has](./src/printers/expression.ts)
- [ ] [Expression.IfDefinedOtherwise](./src/printers/expression.ts)
- [ ] [Expression.IfThenElse](./src/printers/expression.ts)
- [ ] [Expression.Implication](./src/printers/expression.ts)
- [ ] [Expression.In](./src/printers/expression.ts)
- [ ] [Expression.InsertBefore](./src/printers/expression.ts)
- [ ] [Expression.Intersection](./src/printers/expression.ts)
- [ ] [Expression.Is](./src/printers/expression.ts)
- [ ] [Expression.IsDefined](./src/printers/expression.ts)
- [ ] [Expression.It](./src/printers/expression.ts)
- [ ] [Expression.Join](./src/printers/expression.ts)
- [ ] [Expression.LessThan](./src/printers/expression.ts)
- [ ] [Expression.LessThanOrEq](./src/printers/expression.ts)
- [ ] [Expression.List](./src/printers/expression.ts)
- [ ] [Expression.Literal](./src/printers/expression.ts)
- [ ] [Expression.Map](./src/printers/expression.ts)
- [ ] [Expression.Match](./src/printers/expression.ts)
- [ ] [Expression.Modulo](./src/printers/expression.ts)
- [ ] [Expression.MultiVariable](./src/printers/expression.ts)
- [ ] [Expression.Negation](./src/printers/expression.ts)
- [ ] [Expression.Negative](./src/printers/expression.ts)
- [ ] [Expression.NoMatch](./src/printers/expression.ts)
- [ ] [Expression.NonEmptyBlock](./src/printers/expression.ts)
- [ ] [Expression.NonEquals](./src/printers/expression.ts)
- [ ] [Expression.NotIn](./src/printers/expression.ts)
- [ ] [Expression.Or](./src/printers/expression.ts)
- [ ] [Expression.Product](./src/printers/expression.ts)
- [ ] [Expression.QualifiedName](./src/printers/expression.ts)
- [ ] [Expression.Range](./src/printers/expression.ts)
- [ ] [Expression.Reducer](./src/printers/expression.ts)
- [ ] [Expression.ReifiedType](./src/printers/expression.ts)
- [ ] [Expression.ReifyType](./src/printers/expression.ts)
- [ ] [Expression.Remainder](./src/printers/expression.ts)
- [ ] [Expression.Set](./src/printers/expression.ts)
- [ ] [Expression.SetAnnotation](./src/printers/expression.ts)
- [ ] [Expression.Slice](./src/printers/expression.ts)
- [ ] [Expression.SliceStep](./src/printers/expression.ts)
- [ ] [Expression.Splice](./src/printers/expression.ts)
- [ ] [Expression.SplicePlus](./src/printers/expression.ts)
- [ ] [Expression.StepRange](./src/printers/expression.ts)
- [ ] [Expression.Subscript](./src/printers/expression.ts)
- [ ] [Expression.Subtraction](./src/printers/expression.ts)
- [ ] [Expression.TransitiveClosure](./src/printers/expression.ts)
- [ ] [Expression.TransitiveReflexiveClosure](./src/printers/expression.ts)
- [ ] [Expression.Tuple](./src/printers/expression.ts)
- [ ] [Expression.TypedVariable](./src/printers/expression.ts)
- [ ] [Expression.TypedVariableBecomes](./src/printers/expression.ts)
- [ ] [Expression.VariableBecomes](./src/printers/expression.ts)
- [ ] [Expression.Visit](./src/printers/expression.ts)
- [ ] [Expression.VoidClosure](./src/printers/expression.ts)
- [ ] [Field.Index](./src/printers/field.ts)
- [ ] [Field.Name](./src/printers/field.ts)
- [ ] [Formals.Default](./src/printers/formals.ts)
- [ ] [FunctionBody.Default](./src/printers/function-body.ts)
- [ ] [FunctionDeclaration.Abstract](./src/printers/function-declaration.ts)
- [ ] [FunctionDeclaration.Conditional](./src/printers/function-declaration.ts)
- [ ] [FunctionDeclaration.Default](./src/printers/function-declaration.ts)
- [ ] [FunctionDeclaration.Expression](./src/printers/function-declaration.ts)
- [ ] [FunctionModifier.Default](./src/printers/function-modifier.ts)
- [ ] [FunctionModifier.Java](./src/printers/function-modifier.ts)
- [ ] [FunctionModifier.Test](./src/printers/function-modifier.ts)
- [ ] [FunctionModifiers.Modifierlist](./src/printers/function-modifiers.ts)
- [ ] [FunctionType.TypeArguments](./src/printers/function-type.ts)
- [ ] [Header.Default](./src/printers/header.ts)
- [ ] [Header.Parameters](./src/printers/header.ts)
- [ ] [HexIntegerLiteral.Lexical](./src/printers/hex-integer-literal.ts)
- [ ] [Import.Default](./src/printers/import.ts)
- [ ] [Import.Extend](./src/printers/import.ts)
- [ ] [Import.External](./src/printers/import.ts)
- [ ] [Import.Syntax](./src/printers/import.ts)
- [ ] [ImportedModule.Actuals](./src/printers/imported-module.ts)
- [ ] [ImportedModule.ActualsRenaming](./src/printers/imported-module.ts)
- [ ] [ImportedModule.Default](./src/printers/imported-module.ts)
- [ ] [ImportedModule.Renamings](./src/printers/imported-module.ts)
- [ ] [IntegerLiteral.DecimalIntegerLiteral](./src/printers/integer-literal.ts)
- [ ] [IntegerLiteral.HexIntegerLiteral](./src/printers/integer-literal.ts)
- [ ] [IntegerLiteral.OctalIntegerLiteral](./src/printers/integer-literal.ts)
- [ ] [JustDate.Lexical](./src/printers/just-date.ts)
- [ ] [JustTime.Lexical](./src/printers/just-time.ts)
- [ ] [KeywordArgument_Expression.Default](./src/printers/keyword-argument-expression.ts)
- [ ] [KeywordArguments_Expression.Default](./src/printers/keyword-arguments-expression.ts)
- [ ] [KeywordArguments_Expression.None](./src/printers/keyword-arguments-expression.ts)
- [ ] [KeywordFormal.Default](./src/printers/keyword-formal.ts)
- [ ] [KeywordFormals.Default](./src/printers/keyword-formals.ts)
- [ ] [KeywordFormals.None](./src/printers/keyword-formals.ts)
- [ ] [Kind.Alias](./src/printers/kind.ts)
- [ ] [Kind.All](./src/printers/kind.ts)
- [ ] [Kind.Anno](./src/printers/kind.ts)
- [ ] [Kind.Data](./src/printers/kind.ts)
- [ ] [Kind.Function](./src/printers/kind.ts)
- [ ] [Kind.Module](./src/printers/kind.ts)
- [ ] [Kind.Tag](./src/printers/kind.ts)
- [ ] [Kind.Variable](./src/printers/kind.ts)
- [ ] [Kind.View](./src/printers/kind.ts)
- [ ] [LAYOUT.Lexical](./src/printers/layout.ts)
- [ ] [Label.Default](./src/printers/label.ts)
- [ ] [Label.Empty](./src/printers/label.ts)
- [ ] [Literal.Boolean](./src/printers/literal.ts)
- [ ] [Literal.DateTime](./src/printers/literal.ts)
- [ ] [Literal.Integer](./src/printers/literal.ts)
- [ ] [Literal.Location](./src/printers/literal.ts)
- [ ] [Literal.Rational](./src/printers/literal.ts)
- [ ] [Literal.Real](./src/printers/literal.ts)
- [ ] [Literal.RegExp](./src/printers/literal.ts)
- [ ] [Literal.String](./src/printers/literal.ts)
- [ ] [LocalVariableDeclaration.Default](./src/printers/local-variable-declaration.ts)
- [ ] [LocalVariableDeclaration.Dynamic](./src/printers/local-variable-declaration.ts)
- [ ] [LocationLiteral.Default](./src/printers/location-literal.ts)
- [ ] [Mapping_Expression.Default](./src/printers/mapping-expression.ts)
- [ ] [MidPathChars.Lexical](./src/printers/mid-path-chars.ts)
- [ ] [MidProtocolChars.Lexical](./src/printers/mid-protocol-chars.ts)
- [ ] [MidStringChars.Lexical](./src/printers/mid-string-chars.ts)
- [x] [Module.Default](./src/printers/module.ts)
- [ ] [ModuleActuals.Default](./src/printers/module-actuals.ts)
- [ ] [ModuleParameters.Default](./src/printers/module-parameters.ts)
- [ ] [Name.Lexical](./src/printers/name.ts)
- [ ] [NamedBackslash.Lexical](./src/printers/named-backslash.ts)
- [ ] [NamedRegExp.Lexical](./src/printers/named-reg-exp.ts)
- [ ] [Nonterminal.Lexical](./src/printers/nonterminal.ts)
- [ ] [NonterminalLabel.Lexical](./src/printers/nonterminal-label.ts)
- [ ] [OctalIntegerLiteral.Lexical](./src/printers/octal-integer-literal.ts)
- [ ] [OptionalComma.Lexical](./src/printers/optional-comma.ts)
- [ ] [OptionalExpression.Expression](./src/printers/optional-expression.ts)
- [ ] [OptionalExpression.NoExpression](./src/printers/optional-expression.ts)
- [ ] [Output.Lexical](./src/printers/output.ts)
- [ ] [Parameters.Default](./src/printers/parameters.ts)
- [ ] [Parameters.VarArgs](./src/printers/parameters.ts)
- [ ] [PathChars.Lexical](./src/printers/path-chars.ts)
- [ ] [PathPart.Interpolated](./src/printers/path-part.ts)
- [ ] [PathPart.NonInterpolated](./src/printers/path-part.ts)
- [ ] [PathTail.Mid](./src/printers/path-tail.ts)
- [ ] [PathTail.Post](./src/printers/path-tail.ts)
- [ ] [PatternWithAction.Arbitrary](./src/printers/pattern-with-action.ts)
- [ ] [PatternWithAction.Replacing](./src/printers/pattern-with-action.ts)
- [ ] [PostPathChars.Lexical](./src/printers/post-path-chars.ts)
- [ ] [PostProtocolChars.Lexical](./src/printers/post-protocol-chars.ts)
- [ ] [PostStringChars.Lexical](./src/printers/post-string-chars.ts)
- [ ] [PrePathChars.Lexical](./src/printers/pre-path-chars.ts)
- [ ] [PreProtocolChars.Lexical](./src/printers/pre-protocol-chars.ts)
- [ ] [PreStringChars.Lexical](./src/printers/pre-string-chars.ts)
- [ ] [Prod.All](./src/printers/prod.ts)
- [ ] [Prod.AssociativityGroup](./src/printers/prod.ts)
- [ ] [Prod.First](./src/printers/prod.ts)
- [ ] [Prod.Labeled](./src/printers/prod.ts)
- [ ] [Prod.Reference](./src/printers/prod.ts)
- [ ] [Prod.Unlabeled](./src/printers/prod.ts)
- [ ] [ProdModifier.Associativity](./src/printers/prod-modifier.ts)
- [ ] [ProdModifier.Bracket](./src/printers/prod-modifier.ts)
- [ ] [ProdModifier.Tag](./src/printers/prod-modifier.ts)
- [ ] [ProtocolChars.Lexical](./src/printers/protocol-chars.ts)
- [ ] [ProtocolPart.Interpolated](./src/printers/protocol-part.ts)
- [ ] [ProtocolPart.NonInterpolated](./src/printers/protocol-part.ts)
- [ ] [ProtocolTail.Mid](./src/printers/protocol-tail.ts)
- [ ] [ProtocolTail.Post](./src/printers/protocol-tail.ts)
- [ ] [QualifiedName.Default](./src/printers/qualified-name.ts)
- [ ] [Range.Character](./src/printers/range.ts)
- [ ] [Range.FromTo](./src/printers/range.ts)
- [ ] [RationalLiteral.Lexical](./src/printers/rational-literal.ts)
- [ ] [RealLiteral.Lexical](./src/printers/real-literal.ts)
- [ ] [RegExp.Lexical](./src/printers/reg-exp.ts)
- [ ] [RegExpLiteral.Lexical](./src/printers/reg-exp-literal.ts)
- [ ] [RegExpModifier.Lexical](./src/printers/reg-exp-modifier.ts)
- [ ] [Renaming.Default](./src/printers/renaming.ts)
- [ ] [Renamings.Default](./src/printers/renamings.ts)
- [ ] [Replacement.Conditional](./src/printers/replacement.ts)
- [ ] [Replacement.Unconditional](./src/printers/replacement.ts)
- [ ] [ShellCommand.Clear](./src/printers/shell-command.ts)
- [ ] [ShellCommand.Edit](./src/printers/shell-command.ts)
- [ ] [ShellCommand.Help](./src/printers/shell-command.ts)
- [ ] [ShellCommand.History](./src/printers/shell-command.ts)
- [ ] [ShellCommand.ListDeclarations](./src/printers/shell-command.ts)
- [ ] [ShellCommand.ListModules](./src/printers/shell-command.ts)
- [ ] [ShellCommand.Quit](./src/printers/shell-command.ts)
- [ ] [ShellCommand.SetOption](./src/printers/shell-command.ts)
- [ ] [ShellCommand.Test](./src/printers/shell-command.ts)
- [ ] [ShellCommand.Undeclare](./src/printers/shell-command.ts)
- [ ] [ShellCommand.Unimport](./src/printers/shell-command.ts)
- [ ] [Signature.NoThrows](./src/printers/signature.ts)
- [ ] [Signature.WithThrows](./src/printers/signature.ts)
- [ ] [Start.Absent](./src/printers/start.ts)
- [ ] [Start.Present](./src/printers/start.ts)
- [ ] [Statement.Append](./src/printers/statement.ts)
- [ ] [Statement.Assert](./src/printers/statement.ts)
- [ ] [Statement.AssertWithMessage](./src/printers/statement.ts)
- [ ] [Statement.Assignment](./src/printers/statement.ts)
- [ ] [Statement.Break](./src/printers/statement.ts)
- [ ] [Statement.Continue](./src/printers/statement.ts)
- [ ] [Statement.DoWhile](./src/printers/statement.ts)
- [ ] [Statement.EmptyStatement](./src/printers/statement.ts)
- [ ] [Statement.Expression](./src/printers/statement.ts)
- [ ] [Statement.Fail](./src/printers/statement.ts)
- [ ] [Statement.Filter](./src/printers/statement.ts)
- [ ] [Statement.For](./src/printers/statement.ts)
- [ ] [Statement.FunctionDeclaration](./src/printers/statement.ts)
- [ ] [Statement.GlobalDirective](./src/printers/statement.ts)
- [ ] [Statement.IfThen](./src/printers/statement.ts)
- [ ] [Statement.IfThenElse](./src/printers/statement.ts)
- [ ] [Statement.Insert](./src/printers/statement.ts)
- [ ] [Statement.NonEmptyBlock](./src/printers/statement.ts)
- [ ] [Statement.Return](./src/printers/statement.ts)
- [ ] [Statement.Solve](./src/printers/statement.ts)
- [ ] [Statement.Switch](./src/printers/statement.ts)
- [ ] [Statement.Throw](./src/printers/statement.ts)
- [ ] [Statement.Try](./src/printers/statement.ts)
- [ ] [Statement.TryFinally](./src/printers/statement.ts)
- [ ] [Statement.VariableDeclaration](./src/printers/statement.ts)
- [ ] [Statement.Visit](./src/printers/statement.ts)
- [ ] [Statement.While](./src/printers/statement.ts)
- [ ] [Strategy.BottomUp](./src/printers/strategy.ts)
- [ ] [Strategy.BottomUpBreak](./src/printers/strategy.ts)
- [ ] [Strategy.Innermost](./src/printers/strategy.ts)
- [ ] [Strategy.Outermost](./src/printers/strategy.ts)
- [ ] [Strategy.TopDown](./src/printers/strategy.ts)
- [ ] [Strategy.TopDownBreak](./src/printers/strategy.ts)
- [ ] [StringCharacter.Lexical](./src/printers/string-character.ts)
- [ ] [StringConstant.Lexical](./src/printers/string-constant.ts)
- [ ] [StringLiteral.Interpolated](./src/printers/string-literal.ts)
- [ ] [StringLiteral.NonInterpolated](./src/printers/string-literal.ts)
- [ ] [StringLiteral.Template](./src/printers/string-literal.ts)
- [ ] [StringMiddle.Interpolated](./src/printers/string-middle.ts)
- [ ] [StringMiddle.Mid](./src/printers/string-middle.ts)
- [ ] [StringMiddle.Template](./src/printers/string-middle.ts)
- [ ] [StringTail.MidInterpolated](./src/printers/string-tail.ts)
- [ ] [StringTail.MidTemplate](./src/printers/string-tail.ts)
- [ ] [StringTail.Post](./src/printers/string-tail.ts)
- [ ] [StringTemplate.DoWhile](./src/printers/string-template.ts)
- [ ] [StringTemplate.For](./src/printers/string-template.ts)
- [ ] [StringTemplate.IfThen](./src/printers/string-template.ts)
- [ ] [StringTemplate.IfThenElse](./src/printers/string-template.ts)
- [ ] [StringTemplate.While](./src/printers/string-template.ts)
- [ ] [StructuredType.Default](./src/printers/structured-type.ts)
- [ ] [Sym.Alternative](./src/printers/sym.ts)
- [ ] [Sym.CaseInsensitiveLiteral](./src/printers/sym.ts)
- [ ] [Sym.CharacterClass](./src/printers/sym.ts)
- [ ] [Sym.Column](./src/printers/sym.ts)
- [ ] [Sym.Empty](./src/printers/sym.ts)
- [ ] [Sym.EndOfLine](./src/printers/sym.ts)
- [ ] [Sym.Except](./src/printers/sym.ts)
- [ ] [Sym.Follow](./src/printers/sym.ts)
- [ ] [Sym.Iter](./src/printers/sym.ts)
- [ ] [Sym.IterSep](./src/printers/sym.ts)
- [ ] [Sym.IterStar](./src/printers/sym.ts)
- [ ] [Sym.IterStarSep](./src/printers/sym.ts)
- [ ] [Sym.Labeled](./src/printers/sym.ts)
- [ ] [Sym.Literal](./src/printers/sym.ts)
- [ ] [Sym.Nonterminal](./src/printers/sym.ts)
- [ ] [Sym.NotFollow](./src/printers/sym.ts)
- [ ] [Sym.NotPrecede](./src/printers/sym.ts)
- [ ] [Sym.Optional](./src/printers/sym.ts)
- [ ] [Sym.Parameter](./src/printers/sym.ts)
- [ ] [Sym.Parametrized](./src/printers/sym.ts)
- [ ] [Sym.Precede](./src/printers/sym.ts)
- [ ] [Sym.Sequence](./src/printers/sym.ts)
- [ ] [Sym.Start](./src/printers/sym.ts)
- [ ] [Sym.StartOfLine](./src/printers/sym.ts)
- [ ] [Sym.Unequal](./src/printers/sym.ts)
- [ ] [SyntaxDefinition.Keyword](./src/printers/syntax-definition.ts)
- [ ] [SyntaxDefinition.Language](./src/printers/syntax-definition.ts)
- [ ] [SyntaxDefinition.Layout](./src/printers/syntax-definition.ts)
- [ ] [SyntaxDefinition.Lexical](./src/printers/syntax-definition.ts)
- [ ] [Tag.Default](./src/printers/tag.ts)
- [ ] [Tag.Empty](./src/printers/tag.ts)
- [ ] [Tag.Expression](./src/printers/tag.ts)
- [ ] [TagString.Lexical](./src/printers/tag-string.ts)
- [ ] [Tags.Default](./src/printers/tags.ts)
- [ ] [Target.Empty](./src/printers/target.ts)
- [ ] [Target.Labeled](./src/printers/target.ts)
- [ ] [TimePartNoTZ.Lexical](./src/printers/time-part-no-tz.ts)
- [ ] [TimeZonePart.Lexical](./src/printers/time-zone-part.ts)
- [ ] [Toplevel.GivenVisibility](./src/printers/toplevel.ts)
- [ ] [Type.Basic](./src/printers/type.ts)
- [ ] [Type.Bracket](./src/printers/type.ts)
- [ ] [Type.Function](./src/printers/type.ts)
- [ ] [Type.Selector](./src/printers/type.ts)
- [ ] [Type.Structured](./src/printers/type.ts)
- [ ] [Type.Symbol](./src/printers/type.ts)
- [ ] [Type.User](./src/printers/type.ts)
- [ ] [Type.Variable](./src/printers/type.ts)
- [ ] [TypeArg.Default](./src/printers/type-arg.ts)
- [ ] [TypeArg.Named](./src/printers/type-arg.ts)
- [ ] [TypeVar.Bounded](./src/printers/type-var.ts)
- [ ] [TypeVar.Free](./src/printers/type-var.ts)
- [ ] [URLChars.Lexical](./src/printers/url-chars.ts)
- [ ] [UnicodeEscape.Lexical](./src/printers/unicode-escape.ts)
- [ ] [UserType.Name](./src/printers/user-type.ts)
- [ ] [UserType.Parametric](./src/printers/user-type.ts)
- [ ] [Variable.Initialized](./src/printers/variable.ts)
- [ ] [Variable.UnInitialized](./src/printers/variable.ts)
- [ ] [Variant.NAryConstructor](./src/printers/variant.ts)
- [ ] [Visibility.Default](./src/printers/visibility.ts)
- [ ] [Visibility.Private](./src/printers/visibility.ts)
- [ ] [Visibility.Public](./src/printers/visibility.ts)
- [ ] [Visit.DefaultStrategy](./src/printers/visit.ts)
- [ ] [Visit.GivenStrategy](./src/printers/visit.ts)
