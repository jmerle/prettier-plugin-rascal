interface ASTNode {
  type: string;
  start: number;
  end: number;
  content: { [key: string]: any };
}
