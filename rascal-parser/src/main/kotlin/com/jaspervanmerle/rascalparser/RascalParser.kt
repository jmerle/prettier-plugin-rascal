package com.jaspervanmerle.rascalparser

import com.github.salomonbrys.kotson.jsonObject
import io.usethesource.vallang.IConstructor
import io.usethesource.vallang.ISourceLocation
import org.rascalmpl.ast.Module
import org.rascalmpl.library.lang.rascal.syntax.RascalParser
import org.rascalmpl.parser.ASTBuilder
import org.rascalmpl.parser.Parser
import org.rascalmpl.parser.gtd.result.out.DefaultNodeFlattener
import org.rascalmpl.parser.uptr.UPTRNodeFactory
import org.rascalmpl.parser.uptr.action.NoActionExecutor
import org.rascalmpl.values.uptr.ITree
import java.io.PrintWriter
import java.io.StringWriter
import java.net.URI

object RascalParser {
  @JvmStatic
  fun main(args: Array<String>) {
    val code = readCode()
    val tree = createTree(code)
    val ast = createAST(tree)

    try {
      println(ast.accept(ASTConverter))
    } catch (err: Throwable) {
      val stringWriter = StringWriter()
      val printWriter = PrintWriter(stringWriter)
      err.printStackTrace(printWriter)
      val stackTrace = stringWriter.toString()

      println(jsonObject("error" to stackTrace))
    }
  }

  private fun readCode(): String {
    return generateSequence(::readLine).joinToString("\n")
  }

  private fun createTree(code: String): ITree {
    return RascalParser().parse(
      Parser.START_MODULE,
      URI.create("https://www.google.com/"),
      code.toCharArray(),
      NoActionExecutor(),
      DefaultNodeFlattener<IConstructor, ITree, ISourceLocation>(),
      UPTRNodeFactory(true)
    )
  }

  private fun createAST(tree: ITree): Module {
    return ASTBuilder().buildModule(tree)
  }
}
