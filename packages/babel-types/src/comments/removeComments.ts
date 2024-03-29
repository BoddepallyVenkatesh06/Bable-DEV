import { COMMENT_KEYS } from "../constants/index.ts";
import type * as t from "../index.ts";

/**
 * Remove comment properties from a node.
 */
export default function removeComments<T extends t.Node>(node: T): T {
  COMMENT_KEYS.forEach(key => {
    node[key] = null;
  });

  return node;
}
