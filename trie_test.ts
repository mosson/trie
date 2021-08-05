import { assertEquals } from "https://deno.land/std@0.103.0/testing/asserts.ts";
import { Trie } from "./trie.ts";

Deno.test("simple search and insert and delete", () => {
  const trie: Trie = new Trie();
  assertEquals(trie.search("apple"), false);
  assertEquals(trie.search("orange"), false);

  trie.insert("apple");
  assertEquals(trie.search("apple"), true);
  assertEquals(trie.search("orange"), false);
  assertEquals(trie.search("appl"), false);
  assertEquals(trie.search("apple "), false);
  assertEquals(trie.search("applee"), false);

  trie.insert("applee");
  assertEquals(trie.search("apple"), true);
  assertEquals(trie.search("applee"), true);
  assertEquals(trie.search("appl"), false);
  assertEquals(trie.search("apple "), false);

  trie.insert("orange");
  assertEquals(trie.search("orange"), true);

  trie.delete("apple");
  assertEquals(trie.search("apple"), false);
  assertEquals(trie.search("applee"), true);
  assertEquals(trie.search("orange"), true);
});
