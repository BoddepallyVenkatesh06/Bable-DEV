import { isIdentifier } from "../validators/generated/index.ts";
import { stringLiteral } from "../builders/generated/index.ts";
import type * as t from "../index.ts";

export default function toComputedKey(
  node:
    | t.ObjectMember
    | t.ObjectProperty
    | t.ClassMethod
    | t.ClassProperty
    | t.ClassAccessorProperty
    | t.MemberExpression
    | t.OptionalMemberExpression,
  // @ts-expect-error todo(flow->ts): maybe check the type of node before accessing .key and .property
  key: t.Expression | t.PrivateName = node.key || node.property,
) {
  if (!node.computed && isIdentifier(key)) key = stringLiteral(key.name);

  return key;
}
