import { Node } from "./node.ts";

// Trie Tree
export class Trie {
  private static leaf: Node = new Node(undefined); // 葉は終端を表現する
  public root: Node;

  constructor() {
    this.root = new Node(undefined);
  }

  public insert(seq: string): void {
    let node: Node = this.root;
    for (let i = 0; i < seq.length; i++) {
      let child = node.search(seq.substr(i, 1));

      if (!child) {
        child = node.grow(seq.substr(i, 1));
      }

      node = child;
    }

    if (node.children.indexOf(Trie.leaf) < 0) {
      node.children.push(Trie.leaf);
    }
  }

  public search(seq: string): true | false {
    let node: Node | undefined = this.root;
    for (let i = 0; i < seq.length; i++) {
      node = node.search(seq.substr(i, 1));
      if (!node) return false;
    }
    return node.children.indexOf(Trie.leaf) >= 0;
  }

  public delete(seq: string): void {
    let node: Node | undefined = this.root;
    for (let i = 0; i < seq.length; i++) {
      node = node.search(seq.substr(i, 1));
      if (!node) return;
    }

    node.children.splice(node.children.indexOf(Trie.leaf), 1);
  }
}
