import { assertEquals } from "https://deno.land/std@0.103.0/testing/asserts.ts";
import { Trie } from "./trie.ts";

Deno.test("simple search and insert", () => {
  const trie: Trie = new Trie();
  trie.insert("apple");
  assertEquals(trie.search("apple"), true);
  assertEquals(trie.search("orange"), false);
  assertEquals(trie.search("appl"), false);
  assertEquals(trie.search("apple "), false);
  assertEquals(trie.search("applee"), false);

  trie.insert("orange");
  assertEquals(trie.search("orange"), true);
});
