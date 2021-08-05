export class Node {
  public data: string | undefined;
  public children: Node[];
  constructor(data: string | undefined) {
    this.data = data;
    this.children = [];
  }

  public search(char: string): Node | undefined {
    return this.children.find((child) => {
      return child.data === char;
    });
  }

  public grow(char: string): Node {
    const child = new Node(char);
    this.children.push(child);
    return child;
  }
}
